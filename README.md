# Project description

This is a protfolio website made using Next.js 14 (app directory) and NextUI (v2).

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [NextUI v2](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)

## How to Use

### Use the template with create-next-app

To create a new project based on this template using `create-next-app`, run the following command:

```bash
npx create-next-app -e https://github.com/nextui-org/next-app-template
```

### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

## License

Licensed under the [MIT license](https://github.com/nextui-org/next-app-template/blob/main/LICENSE).

# Analytics

The site uses PostHog only after a visitor opts in. Its browser project token is
configured in `components/analytics.tsx`. This is a write-only project token,
designed for use in public client apps. If it needs to be rotated, set
`NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` in the deployment environment to override
the default. The host defaults to `https://eu.i.posthog.com`; set
`NEXT_PUBLIC_POSTHOG_HOST` only if the project uses another PostHog host.

Session replay, autocapture, and IP-based location are disabled. The consent
choice and privacy details are available from the site footer.
