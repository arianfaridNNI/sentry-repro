# Quasar App (sentry-repro)

A Quasar Project

## Install the dependencies

```bash
yarn
# or
npm install

#install any cap dependencies
cd src-capacitor
yarn
npx cap sync
```

### Start the app in development mode for android

```bash
yarn quasar dev -m capacitor -T android
```

### Sentry info

config for sentry init is in [boot/addSentry.ts](src/boot/addSentry.ts), check `boot` property in the return in [quasar.config.js](quasar.config.js) (line 33)
