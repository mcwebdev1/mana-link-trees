import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name === "node_modules" || entry.name === ".git" || entry.name === ".next" || entry.name === "out") {
      continue;
    }
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (entry.name.endsWith(".b64")) {
      files.push(full);
    }
  }
  return files;
}

const encoded = await walk(root);
for (const file of encoded) {
  const target = file.slice(0, -4);
  await mkdir(path.dirname(target), { recursive: true });
  const encodedText = await readFile(file, "utf8");
  await writeFile(target, Buffer.from(encodedText, "base64"));
}

if (encoded.length > 0) {
  console.log(`Restored ${encoded.length} binary files`);
}
