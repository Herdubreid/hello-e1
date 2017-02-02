## Getting started with E1
A simple but fully fledged mobile E1 app build with the [Ionic Framework](http://ionicframework.com/docs/) that can be used as a starting point for new E1 app development.  
The key `Hello E1` features are:

* A basic Ionic framework with paging menu  
* The plumbings required for [Redux](http://redux.js.org) and [e1-service](https://www.npmjs.com/package/e1-service)  
* An About page that tests and stores the AIS url and optionally default user name and password  
* An A/B Word Search page that demonstrates search & select requests  
* An A/B Revision page that demonstrate inspect requests (read-only)  

### Prerequisite
First, have the latest recommended versions of [Node](https://nodejs.org) and [Visual Studio Code](https://code.visualstudio.com/download) installed.

Install Ionic with (might need `sudo` or administrator permission):

```bash
$ npm install -g cordova ionic
```

### Installation
Download the [source code](https://github.com/Herdubreid/hello-e1/archive/v0.0.1.zip) and extract it into your project folder (hello-e1 is the original project folder name).  

In the project folder, type:

```bash
$ npm install
```

To test if the installation was successful, type:

```bash
$ ionic serve
```

This command will build the app and open it up in your default browser.

### Explore the code
To explore the code, open the project folder in Visual Code and expand the `src` folder, which is where our source code lives.

### The `app` folder
Let's start by looking at the `app` folder, which contains definitions and initialisation code for our app (often referred to as the plumbings). The two files of interest are:

* `app.module.ts` : Contains definitions of modules, pages and providers for our app  
* `app.component.ts` : The closest thing to traditional `main` function, this is where initialisation normally takes place, such as menu definition

Once established, the content of the `app` folder is typically only changed if new components, like page or provider is added, or new initialisation is needed.

### The `pages` folder
The pages is where user interaction happens and subsequently the main functional area of our app.  
A page can be thought of like forms in E1, providing a certain functionality and interconnecting with other pages.

![App Overview Diagram](docs/app-overview.png)

### The `e1` folder

