# Ian Mungovan Portfolio

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├─- public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where my Astro and Svelte components are located.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

TEST

| Command        | Action                                       |
| :------------- | :------------------------------------------- |
| `yarn`         | Installs dependencies                        |
| `yarn dev`     | Starts local dev server at `localhost:3000`  |
| `yarn build`   | Build your production site to `./dist/`      |
| `yarn preview` | Preview your build locally, before deploying |
