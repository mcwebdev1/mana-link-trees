import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();

async function walk(dir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch (error) {
    if (error && error.code === "ENOENT") return [];
    throw error;
  }
  const files = [];
  for (const entry of entries) {
    if (entry.name === "node_modules" || entry.name === ".git" || entry.name === ".next" || entry.name === "out") {
      continue;
    }
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (entry.name.endsWith(".b64") || /\.b64\.\d+$/.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

function isPart(name) {
  return name.endsWith(".b64") || /\.b64\.\d+$/.test(name);
}

const groups = new Map();

function add(targetRel, file) {
  const list = groups.get(targetRel) ?? [];
  list.push(file);
  groups.set(targetRel, list);
}

const encodedRoot = path.join(root, "encoded");
for (const file of await walk(encodedRoot)) {
  const name = path.basename(file);
  if (!isPart(name)) continue;
  const rel = path.relative(encodedRoot, file).replace(/\.b64(?:\.\d+)?$/, "");
  add(rel, file);
}

for (const file of await walk(root)) {
  if (file.startsWith(encodedRoot + path.sep) || !file.endsWith(".b64")) continue;
  add(path.relative(root, file.slice(0, -4)), file);
}

for (const [targetRel, files] of groups) {
  files.sort();
  const encodedText = (await Promise.all(files.map((file) => readFile(file, "utf8")))).join("");
  const target = path.join(root, targetRel);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, Buffer.from(encodedText, "base64"));
}

if (groups.size > 0) {
  console.log(`Restored ${groups.size} binary files`);
}
