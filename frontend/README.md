# Frontend

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.1.

## Environment setup (required)

The contact form submits to [Web3Forms](https://web3forms.com) and needs an access key:

1. Copy `.env.example` to `.env`.
2. Set `VITE_WEB3FORMS_ACCESS_KEY` to your key.

`npm start` and `npm run build` automatically run `scripts/generate-env.mjs`, which writes the gitignored `src/environments/environment.generated.ts` from `.env` (or from a `VITE_WEB3FORMS_ACCESS_KEY` environment variable in CI, which takes precedence). If you run `ng serve`/`ng build` directly, run `npm run config:env` first. Never commit `.env` or the generated file.

Security notes:

- The access key is embedded in the built JavaScript bundle; this is unavoidable for a client-side form and is how Web3Forms is designed to work. Keeping it out of git prevents leaking it via the repository, not via the deployed site.
- In the Web3Forms dashboard, restrict the key to your production domain so it cannot be abused from other sites; optionally enable hCaptcha for stronger spam protection.
- The form includes a hidden `botcheck` honeypot field that Web3Forms uses to reject bot submissions.
- If you suspect the key has been abused, rotate it in the Web3Forms dashboard and update `.env`.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
