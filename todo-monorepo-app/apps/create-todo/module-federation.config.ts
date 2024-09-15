import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'create-todo',
  exposes: {
    './Routes': 'apps/create-todo/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
