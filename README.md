# SwiftMarket

E-Commerce solution built with SvelteKit, Pocketbase as a database and Stripe for payments, providing better performance and faster development time.

## Getting Started

### Clone the repo

```bash
git clone https://github.com/SwiftMarket/swiftmarket-sveltekit.git
cd swiftmarket-sveltekit
```

### Setting up SvelteKit
Install dependencies

```bash
pnpm install
```

Create .env file

```bash
cp .env.example .env
```

Change the variables, if you haven't modified the Pocketbase database, the URL should be the same. `PUBLIC_STRIPE_KEY` and `SECRET_STRIPE_KEY` can be found from your Stripe dashboard.

### Setting up Pocketbase

Download the [Pocketbase](https://pocketbase.io/docs/) file and serve it with

```bash
./pocketbase serve
```

Open the Admin UI and create an admin account.

Download _[pb_schema.json](https://github.com/SwiftMarket/pocketbase_collections/blob/main/pb_schema.json)_

Go to **Settings/Import collections** and click **Load from JSON file** and select _pb_schema.json_

### Developing

After you serve Pocketbase, you can safely launch the SvelteKit project with:

```bash
pnpm run dev
```

## Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Next steps

For more information, please visit our documentation.
