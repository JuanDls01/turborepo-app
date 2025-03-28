# My first Turborepo App

This Turborepo starter is maintained by the Turborepo core team.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo has the following structure:

- `apps/`: includes all our applications, like web, backend, docs, etc..
  - `docs`: a [Next.js](https://nextjs.org/) app
  - `web`: another [Next.js](https://nextjs.org/) app
- `packages/`: includes toolings, libraries, services, configs we will use in our apps. **Important:** The idea is that defined things inside each app should not be shaerable between them, instead should be a package in `packages/`.
  - `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
  - `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
  - `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

Other things we will have:

- Root `package.json`: is the base of our workspace.
- Root `turbo.json`: is used to configure the behavior of turbo. To learn how to configure [tasks](https://turbo.build/repo/docs/crafting-your-repository/configuring-tasks)

## Benefits of using monorepo & workspaces with turbo

- **Avoiding barrel files:** Barrel files are files that re-export other files in the same package, creating one entrypoint for the entire package. While they might appear convenient, they're difficult for compilers and bundlers to handle and can quickly lead to performance problems.
- **More powerful features:** exports also has other powerful features compared to the main field like Conditional Exports. In general, we recommend using exports over main whenever possible as it is the more modern option.
- **IDE autocompletion:** By specifying the entrypoints for your package using exports, you can ensure that your code editor can provide auto-completion for the package's exports.

## Managing Dependencies

In each app or maybe package we will have two types of dependencies:

- **External dependencies**: come from the npm registry, allowing you to leverage valuable code from the ecosystem to build your applications and libraries faster.
- **Internal dependencies:** Which let you share functionality within your repository, dramatically improving discoverability and usability of shared code.

### Adding dependencies

When you install a dependency in your repository, you should install it directly in the package that uses it. The package's package.json will have every dependency that the package needs.

Adding a dependency can be done through running:

```bash
npm install jest --workspace=web --workspace=@repo/ui --save-dev
```
