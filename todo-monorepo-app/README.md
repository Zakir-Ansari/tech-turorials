# Todo App using Nx Angular Monorepo with Module Federation

## Overview

This repository contains a **Todo App** built using **Nx**, **Angular**, and **Module Federation**. The project demonstrates the use of Nx's monorepo architecture to manage multiple applications and libraries in a single repository, alongside **Module Federation** to dynamically load micro-frontends.

> This is only a demonstration of Nx Module Federation architecture through a real world project. This will not teach UI design and repective UI coding steps.

## Table of Contents

1. [Introduction to Nx Monorepo](#introduction-to-nx-monorepo)
2. [Agenda](#agenda)
3. [Technologies Used](#technologies-used)
4. [Project Structure](#project-structure)
5. [Creating Shell and Remote Apps](#creating-shell-and-remote-apps)
6. [Connect Host and Remote app](#connect-Host-and-Remote-app)
7. [Creating Environments](#creating-environments)
8. [Deployment](#deployment)
9. [Contributing](#contributing)

## Introduction to Nx Monorepo

**Nx** is an open-source build system that helps manage large monorepos, using modern tools like **Angular**, **React**, and more. Nx makes it easy to build and scale applications by:

- Organizing code into apps and libraries
- Sharing code between apps
- Efficiently building and testing applications

In this project, the Nx monorepo structure is used to manage multiple applications (both shell and remotes) while leveraging **Webpack Module Federation** to load these apps dynamically at runtime.

## Agenda

This project demonstrates how to:

- Set up an Nx monorepo with Angular apps
- Use module federation to split the app into **Shell** (host) and **Remote** (micro-frontend) apps
- Share code across multiple apps and libraries
- Deploy the project using modern CI/CD pipelines

## Technologies Used

- **Nx** for monorepo management
- **Angular** for frontend development
- **Module Federation** for micro-frontend architecture
- **TypeScript** for type safety
- **Webpack** for bundling
- **Vercel** for deployment

## Project Structure

```bash
apps/
  shell-app/            # Host application
  create-todo/          # Remote application (micro-frontend)
  view-todo/            # Remote application (micro-frontend)
```

- **Shell App**: The main application that serves as the host for micro-frontends.
- **Create Todo & View Todo**: A remote applications that is loaded dynamically into the shell via module federation.

> Current versions: Angular CLI - 17.3.8, Node - 20.16.0, NPM - 10.8.2, NX - 19.7.3

```powershell
> ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 17.3.8
Node: 20.16.0
Package Manager: npm 10.8.2
OS: win32 x64

Angular:
...

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1703.8 (cli-only)
@angular-devkit/core         17.3.8 (cli-only)
@angular-devkit/schematics   17.3.8 (cli-only)
@schematics/angular          17.3.8 (cli-only)
```

## Creating Shell and Remote Apps

**Step 1**: Create an Nx Workspace (Follow the interactive CLI to set up the workspace. Choose `Angular` as the framework.)

```bash
> npx create-nx-workspace@latest todo-monorepo-app

 NX   Let's create a new workspace [https://nx.dev/getting-started/intro]

√ Which stack do you want to use? · angular
√ Integrated monorepo, or standalone project? · integrated
√ Application name · todo-monorepo-app
√ Which bundler would you like to use? · esbuild
√ Default stylesheet format · scss
√ Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? · No
√ Test runner to use for end to end (E2E) tests · cypress
√ Which CI provider would you like to use? · skip
√ Would you like remote caching to make your build faster? · skip

 NX   Creating your v19.7.3 workspace.

√ Installing dependencies with npm
√ Successfully created the workspace: todo-monorepo-app.

 NX   Directory is already under version control. Skipping initialization of git.


————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————


 NX   Nx CLI is not installed globally.

This means that you will have to use "npx nx" to execute commands in the workspace.
Run "npm i -g nx" to be able to execute command directly.


————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————


 NX   First time using Nx? Check out this interactive Nx tutorial.

https://nx.dev/angular-tutorial/1-code-generation
```

#### Initial folder structure

![](../resources/todo-monorepo-app/initial-folder-structure.png)

#### About Nx Console VsCode Extension

Initial nx console

![](../resources/todo-monorepo-app/initial-nx-console.png)

**Install Nx Console**

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

**Useful links**

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

**Step 2**: Using Nx Console -> remove unwanted applications

![](../resources/todo-monorepo-app/remove-nx-project-from-console.png)

Similary remove todo-monorepo-app

**Step 3**: Create Host Application using Nx Generate UI

1. Create a folder in root directory as `apps` then right click on apps folder and select Nx Generate (UI)

2. Then a form will appear, put name as `shell-app` , style as `scss` then hit Generate button.

```powershell
Executing task: npx nx generate @nx/angular:host --name=shell-app --projectNameAndRootFormat=as-provided --style=scss --no-interactive 


 NX  Generating @nx/angular:host

Fetching @nx/playwright...
UPDATE nx.json
CREATE apps/shell-app/project.json
CREATE apps/shell-app/src/index.html
CREATE apps/shell-app/src/styles.scss
CREATE apps/shell-app/tsconfig.app.json
CREATE apps/shell-app/tsconfig.editor.json
CREATE apps/shell-app/tsconfig.json
CREATE apps/shell-app/public/favicon.ico
CREATE apps/shell-app/src/app/app.component.html
CREATE apps/shell-app/src/app/app.component.spec.ts
CREATE apps/shell-app/src/app/app.component.ts
CREATE apps/shell-app/src/app/app.component.scss
CREATE apps/shell-app/src/app/app.config.ts
CREATE apps/shell-app/src/app/app.routes.ts
CREATE apps/shell-app/src/main.ts
CREATE apps/shell-app/src/app/nx-welcome.component.ts
CREATE apps/shell-app/.eslintrc.json
CREATE apps/shell-app/jest.config.ts
CREATE apps/shell-app/src/test-setup.ts
CREATE apps/shell-app/tsconfig.spec.json
CREATE apps/shell-app-e2e/project.json
UPDATE package.json
CREATE apps/shell-app-e2e/playwright.config.ts
CREATE apps/shell-app-e2e/src/example.spec.ts
CREATE apps/shell-app-e2e/tsconfig.json
CREATE apps/shell-app-e2e/.eslintrc.json
UPDATE .vscode/extensions.json
CREATE apps/shell-app/module-federation.config.ts
CREATE apps/shell-app/webpack.config.ts
CREATE apps/shell-app/webpack.prod.config.ts
CREATE apps/shell-app/src/bootstrap.ts

added 7 packages, and audited 1550 packages in 9s

223 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

 NX   👀 View Details of shell-app
```

After this, you will see shell app project will be listed under Nx console

![](../resources/todo-monorepo-app/nx-console-shell-app.png)

Hit play button under `shell-app > serve > development` and the shell-app monorepo will get started at http://localhost:4200/

![](../resources/todo-monorepo-app/shell-app-ui.png)

**Step 4**: Create Remote Application using Nx Generate UI

1. Right click on `apps` folder and select Nx Generate (UI).

2. Search for `@nx/angular - remote` and hit enter

3. Put remote app name as `create-todo`

4. Put port as 4201

5. Select style as scss (optional)

6. Hit Enter

```powershell
Executing task: npx nx generate @nx/angular:remote --name=create-todo --port=4201 --projectNameAndRootFormat=as-provided --style=scss --no-interactive 


 NX  Generating @nx/angular:remote

CREATE apps/create-todo/project.json
CREATE apps/create-todo/src/index.html
CREATE apps/create-todo/src/styles.scss
CREATE apps/create-todo/tsconfig.app.json
CREATE apps/create-todo/tsconfig.editor.json
CREATE apps/create-todo/tsconfig.json
CREATE apps/create-todo/public/favicon.ico
CREATE apps/create-todo/src/app/app.config.ts
CREATE apps/create-todo/src/app/app.routes.ts
CREATE apps/create-todo/src/main.ts
CREATE apps/create-todo/.eslintrc.json
CREATE apps/create-todo/jest.config.ts
CREATE apps/create-todo/src/test-setup.ts
CREATE apps/create-todo/tsconfig.spec.json
CREATE apps/create-todo-e2e/project.json
CREATE apps/create-todo-e2e/playwright.config.ts
CREATE apps/create-todo-e2e/src/example.spec.ts
CREATE apps/create-todo-e2e/tsconfig.json
CREATE apps/create-todo-e2e/.eslintrc.json
CREATE apps/create-todo/src/app/remote-entry/entry.component.ts
CREATE apps/create-todo/src/app/remote-entry/entry.routes.ts
CREATE apps/create-todo/src/app/remote-entry/nx-welcome.component.ts
UPDATE tsconfig.base.json
CREATE apps/create-todo/module-federation.config.ts
CREATE apps/create-todo/webpack.config.ts
CREATE apps/create-todo/webpack.prod.config.ts
CREATE apps/create-todo/src/bootstrap.ts
```

**Step 5**: Start the create-todo (at http://localhost:4201)

![](../resources/todo-monorepo-app/create-todo-ui.png)

## Connect Host and Remote app

**Step 1**: Create remote-urls constants under `shell-app > src > app > constants > remote-urls.constant.ts`

```ts
export const remoteUrlMap: Record<string, any> = {
  localhost: {
    'create-todo': 'http://localhost:4201',
  },
};
```

**Step 2**: Update `shell-app > main.ts`

```ts
import { setRemoteDefinitions } from '@nx/angular/mf';
import { remoteUrlMap } from './app/constants/remote-urls.constant';

getRemoteAppUrl()
  .then((remoteDefinitions) => {
    setRemoteDefinitions(remoteDefinitions);
  })
  .then(() => import('./bootstrap').catch((err) => console.error(err)));

function getRemoteAppUrl(): Promise<Record<string, any>> {
  return new Promise((resolve, reject) => {
    const remoteAppUrl = remoteUrlMap['localhost'];

    if (remoteAppUrl) resolve(remoteAppUrl);
    else reject('Unable to get remote urls');
  });
}
```

**Step 3**: Update the `shell-app > app.routes.ts`

```ts
import { loadRemoteModule } from '@nx/angular/mf';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: 'createTodo',
    loadChildren: () =>
      loadRemoteModule('create-todo', './Routes').then((m) => m.remoteRoutes),
  },
];
```

**Step 4**: At last, update the `shell-app > app.component.html` to route the request.

```html
<ul class="remote-menu">
  <li><a routerLink="/">Home</a></li>
  <li><a routerLink="createTodo">Create Todo</a></li>
</ul>
<router-outlet></router-outlet>
```

**Step 5**: Restart host and remote servers then load host url: `localhost:4200`

![](../resources/todo-monorepo-app/ui-with-shell-and-remote.gif)



## Creating Environments

To handle environment variables in an Nx Angular monorepo that can be used across the application for different environments like development (`dev`), staging (`uat`), and production (`prod`). Nx and Angular provide built-in mechanisms to handle environment-specific configurations, and you can extend this to fit your use case.

Here are the steps to set up environment variables in an Nx Angular monorepo for `dev`, `uat`, and `prod` environments:



**Step 1**: Set Up Environment Files for Each App

Each Angular application in the monorepo can have its own set of environment files. By default, Angular uses the `environment.ts` and `environment.prod.ts` files, but you can add more environments like `sit`.

For example, in each app (e.g., `shell-app`), create environment files in the `src/environments` folder:

- **apps/shell-app/src/environments/environment.ts** (for `dev`):
  
  ```ts
  export const environment = {
    production: false,
    env: 'dev',
    remoteUrls: {
      'create-todo': 'http://localhost:4201',
    },
  };
  ```
* **apps/shell-app/src/environments/environment.uat.ts** (for `uat`):
  
  ```ts
  export const environment = {
    production: false,
    env: 'uat',
    remoteUrls: {
      'create-todo': 'http://localhost:4201',
    },
  };
  
  ```

* **apps/shell-app/src/environments/environment.prod.ts** (for `prod`):
  
  ```ts
  export const environment = {
    production: true,
    env: 'prod',
    remoteUrls: {
      'create-todo': 'http://localhost:4201', // This is to be defined once our app is deployed
    },
  };
  
  
  ```

> Note: The remote urls will be decided once, the apps are deployed.

You can follow the same approach for `remote-one` and `remote-two` or share some environment configurations between apps via libraries if needed.



**Step 2**: Configure `project.json` for File Replacements

In your `project.json` file for the app (e.g., `apps/shell-app/project.json`), you'll configure file replacements for each environment.

Here’s an example of how to extend the configuration for a new `uat` environment in `project.json`:

Updates are done under -

`targets > build > configurations`

`targets > serve`

```json
{
  "name": "shell-app",
  "$schema": "../../node_modules/nx/schemas/project-schema.json",
  "projectType": "application",
  "prefix": "app",
  "sourceRoot": "apps/shell-app/src",
  "tags": [],
  "targets": {
    "build": {
      "executor": "@nx/angular:webpack-browser",
      "outputs": ["{options.outputPath}"],
      "options": {
        "outputPath": "dist/apps/shell-app",
        "index": "apps/shell-app/src/index.html",
        "main": "apps/shell-app/src/main.ts",
        "polyfills": ["zone.js"],
        "tsConfig": "apps/shell-app/tsconfig.app.json",
        "inlineStyleLanguage": "scss",
        "assets": [
          {
            "glob": "**/*",
            "input": "apps/shell-app/public"
          }
        ],
        "styles": ["apps/shell-app/src/styles.scss"],
        "scripts": [],
        "customWebpackConfig": {
          "path": "apps/shell-app/webpack.config.ts"
        }
      },
      "configurations": {
        "production": {
          "budgets": [
            {
              "type": "initial",
              "maximumWarning": "500kb",
              "maximumError": "1mb"
            },
            {
              "type": "anyComponentStyle",
              "maximumWarning": "2kb",
              "maximumError": "4kb"
            }
          ],
          "outputHashing": "all",
          "customWebpackConfig": {
            "path": "apps/shell-app/webpack.prod.config.ts"
          },
          "fileReplacements": [
            {
              "replace": "apps/shell-app/src/environments/environment.ts",
              "with": "apps/shell-app/src/environments/environment.prod.ts"
            }
          ]
        },
        "uat": {
          "buildOptimizer": false,
          "optimization": false,
          "vendorChunk": true,
          "extractLicenses": false,
          "sourceMap": true,
          "namedChunks": true,
          "fileReplacements": [
            {
              "replace": "apps/shell-app/src/environments/environment.ts",
              "with": "apps/shell-app/src/environments/environment.uat.ts"
            }
          ]
        },
        "development": {
          "buildOptimizer": false,
          "optimization": false,
          "vendorChunk": true,
          "extractLicenses": false,
          "sourceMap": true,
          "namedChunks": true
        }
      },
      "defaultConfiguration": "production"
    },
    "serve": {
      "executor": "@nx/angular:module-federation-dev-server",
      "options": {
        "port": 4200,
        "publicHost": "http://localhost:4200"
      },
      "configurations": {
        "production": {
          "buildTarget": "shell-app:build:production"
        },
        "uat": {
          "buildTarget": "shell-app:build:uat"
        },
        "development": {
          "buildTarget": "shell-app:build:development"
        }
      },
      "defaultConfiguration": "development"
    },
    "extract-i18n": {
      "executor": "@angular-devkit/build-angular:extract-i18n",
      "options": {
        "buildTarget": "shell-app:build"
      }
    },
    "lint": {
      "executor": "@nx/eslint:lint"
    },
    "test": {
      "executor": "@nx/jest:jest",
      "outputs": ["{workspaceRoot}/coverage/{projectRoot}"],
      "options": {
        "jestConfig": "apps/shell-app/jest.config.ts"
      }
    },
    "serve-static": {
      "executor": "@nx/web:file-server",
      "options": {
        "buildTarget": "shell-app:build",
        "port": 4200,
        "spa": true
      }
    }
  }
}

```

**Step 3**: Update shell-app > main.ts

```ts
import { setRemoteDefinitions } from '@nx/angular/mf';
import { environment } from './environments/environment';

getRemoteAppUrl()
  .then((remoteDefinitions) => {
    setRemoteDefinitions(remoteDefinitions);
  })
  .then(() => import('./bootstrap').catch((err) => console.error(err)));

function getRemoteAppUrl(): Promise<Record<string, any>> {
  return new Promise((resolve, reject) => {
    const remoteAppUrl = environment.remoteUrls;

    if (remoteAppUrl) resolve(remoteAppUrl);
    else reject('Unable to get remote urls');
  });
}

```

By now, you will be able to see the changes in Nx console with an updated entry under build and serve option:

![](C:\Users\zakir\AppData\Roaming\marktext\images\2024-09-21-15-50-37-image.png)

**Step 4**: Add an element into shell-app> src > app > app.component to see live changes:

```ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { environment } from '../environments/environment';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'shell-app';

  env = environment.env;
}

```

```html
<ul class="remote-menu">
  <li><a routerLink="/">Home</a></li>
  <li><a routerLink="createTodo">Create Todo</a></li>
</ul>
<div>
  <span>ENV: </span
  ><span
    style="
      border: 2px solid black;
      border-radius: 5px;
      padding: 0px 5px;
      color: green;
    "
    >{{ env }}</span
  >
</div>
<router-outlet></router-outlet>

```

This will show an element that will tell us what environment we are currently running.

**Step 5**: Serve applicaiton with different environment

Development:

![](C:\Users\zakir\AppData\Roaming\marktext\images\2024-09-21-15-55-47-image.png)

UAT:

![](C:\Users\zakir\AppData\Roaming\marktext\images\2024-09-21-15-55-05-image.png)



## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you'd like to contribute to this project.
