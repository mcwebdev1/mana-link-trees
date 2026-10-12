# Mana link trees

Separate link-in-bio pages for Mana Hubs, Mana Common, Mana Fashion Services, and Mana Tech. Each app is one page and can be installed and deployed on its own.

## Run locally

Install once from the repository root, then start the app you need:

```bash
npm install
npm run dev:hubs
npm run dev:common
npm run dev:fashion
npm run dev:tech
```

To run a single app outside this repository, copy that app’s directory and install there:

```bash
cd apps/hubs
npm install
npm run dev
```

Each dev server listens on all interfaces.

| App | Directory | Local URL |
| --- | --- | --- |
| Mana Hubs | `apps/hubs` | http://127.0.0.1:4177 |
| Mana Common | `apps/common` | http://127.0.0.1:4178 |
| Mana Fashion | `apps/fashion` | http://127.0.0.1:4179 |
| Mana Tech | `apps/tech` | http://127.0.0.1:4180 |

## Desktop backgrounds

The link column stays centered. The rest of the viewport is a full-bleed background.

Mana Hubs uses the photo at `apps/hubs/public/tech-spaces-loft-10-2.jpg`. Put that file in place before starting the Hubs app. Until it is there, the centered column still renders on the flat page color `#dfdfdf`.

Mana Common and Mana Tech use the flat page color `#dfdfdf` from each card. Mana Fashion uses `#5f1711` across the viewport.
