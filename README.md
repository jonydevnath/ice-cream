# Ice Cream Builder

A React app for building a custom ice cream with vanilla, chocolate, lemon, orange, and strawberry scoops. Add or remove scoops and see the total price update as you build.

## Requirements

- Node.js and npm

## Getting started

From the project root, install dependencies and start the development server:

```bash
npm install
npm start
```

The app opens at [http://localhost:3000](http://localhost:3000). The development server reloads the app when source files change.

## Available commands

```bash
npm start
```

Starts the development server.

```bash
npm test
```

Runs the test suite in interactive watch mode. To run once without watch mode:

```bash
npm test -- --watchAll=false
```

```bash
npm run build
```

Creates an optimized production build in the `build/` directory.

## Project structure

- `src/components/Builder/` — flavor controls, total price, and builder UI
- `src/components/IceCream/` — rendered cone and scoops
- `src/container/IceCreamBuilder/` — scoop and price state
- `src/components/Header/`, `src/components/Body/`, and `src/components/Footer/` — page sections
- `public/` — static files served by the app

Flavor prices and the initial builder state are defined in `src/container/IceCreamBuilder/IceCreamBuilder.jsx`.

## Current scope

The builder updates the displayed scoops and total price locally in the browser. The **Add to Cart** button is currently a visual control; checkout and cart persistence are not implemented.
