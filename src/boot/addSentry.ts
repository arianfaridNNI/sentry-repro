import { boot } from 'quasar/wrappers';
import * as Sentry from '@sentry/capacitor';
import * as SentryVue from '@sentry/vue';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  Sentry.init(
    {
      // app
      dsn: 'example dsn',
      // enableNative: false,
      debug: true,
      // dist: 'example',
      // Set tracesSampleRate to 1.0 to capture 100%
      // of transactions for performance monitoring.
      // We recommend adjusting this value in production
      // tracesSampleRate: 1.0,
    },
    SentryVue.init
  );
});
