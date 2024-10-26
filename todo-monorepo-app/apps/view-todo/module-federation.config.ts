import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'view-todo',
  exposes: {
    './Routes': 'apps/view-todo/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
