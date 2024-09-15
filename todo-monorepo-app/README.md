# Todo Monorepo App

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!





Current Node and Angular version

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



Command to create a new ng application:

```powershell
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



initial nx console

![](../resources/todo-monorepo-app/initial-nx-console.png)



## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:

- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)





### Using Nx Console -> remove unwanted applications

![](../resources/todo-monorepo-app/remove-nx-project-from-console.png)

Similary remove todo-monorepo-app



## Tutorial

Create host application from Nx Generate UI

Create a folder in root directory as `apps` then right click on apps folder and select Nx Generate (UI)

Then a form will appear, put name as `shell-app` , style as `scss` then hit Generate button.

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

After this, you will shell app project will be listed under Nx console

![](../resources/todo-monorepo-app/nx-console-shell-app.png)

Hit play button under `shell-app > serve > development` and the shell-app monorepo will get started at http://localhost:4200/

![](../resources/todo-monorepo-app/shell-app-ui.png)



Now create our first remote app: create-todo

"Steps to create remote using Nx Ui"

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

Nor start the create-todo.

create-todo app: localhost:4201

![](../resources/todo-monorepo-app/create-todo-ui.png)





Now it's time stitch the remote app i.e. `create-todo` to our shell app

step one: create remote-urls constants under shell-app > src > app > constants > remote-urls.constant.ts

```ts
export const remoteUrlMap: Record<string, any> = {
  localhost: {
    'create-todo': 'http://localhost:4201',
  },
};
```



then update shell-app > main.ts

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



then update the shell-app app.routes.ts

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

As last update the shell-app > app.component.html to route the request

```html
<ul class="remote-menu">
  <li><a routerLink="/">Home</a></li>
  <li><a routerLink="createTodo">Create Todo</a></li>
</ul>
<router-outlet></router-outlet>

```

updated shell-app: localhost:4200

![](../resources/todo-monorepo-app/ui-with-shell-and-remote.gif)
