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
