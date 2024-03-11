# Presspass.xyz

Application for journalists wanting to attest their work.

This application is using a Next.js + Tailwind CSS + Ionic Framework + Capacitor Mobile Starter template. Documenation and more info about it can be found [here](https://github.com/mlynch/nextjs-tailwind-ionic-capacitor-starter).

## Usage

To build the app, run:

```bash
npm run build
```

All the client side files will be sent to the `./out/` directory. These files need to be copied to the native iOS and Android projects, and this is where Capacitor comes in:

```bash
npm run sync
```

Finally, use the following run commands to run the app on each platform:

```bash
npm run ios
npm run android
```

## Caveats from template

One caveat with this project: Because the app must be able to run purely client-side and use [Next.js's Export command](https://nextjs.org/docs/advanced-features/static-html-export), that means no Server Side Rendering in this code base. There is likely a way to SSR and a fully static Next.js app in tandem but it requires [a Babel plugin](https://github.com/erzr/next-babel-conditional-ssg-ssr) or would involve a more elaborate monorepo setup with code sharing that is out of scope for this project.

Additionally, Next.js routing is not really used much in this app beyond a catch-all route to render the native app shell and engage the Ionic React Router. This is primarily because Next.js routing is not set up to enable native-style transitions and history state management like the kind Ionic uses.
