import { createBuilder } from './.modules/aspire.js';

const builder = await createBuilder();

if (process.env.WORKSPEC) {
  await builder
    .addJavaScriptApp('web', './artifacts/web', 'dev:workstation')
    .withHttpEndpoint({ port: 8080, env: 'PORT' })
    .withPnpm();
} else {
  await builder
    .addViteApp('web', './artifacts/web')
    .withPnpm();
}

await builder.build().run();
