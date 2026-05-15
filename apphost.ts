import { createBuilder } from './.modules/aspire.js';

const builder = await createBuilder();

let web = builder
  .addViteApp('web', './artifacts/web')
  .withPnpm();

if (process.env.WORKSPEC) {
  web = web
    .withViteConfig('./vite.workspec.config.ts')
    .withHttpEndpoint({ port: 8080 });
}

await web;

await builder.build().run();
