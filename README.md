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
Let's start with a quick look at the `app` folder. This is where definitions and initialisation code for our app is stored (often referred to as the plumbings). The two files of interest are:

* `app.module.ts` : Contains definitions of modules, pages and providers for our app  
* `app.component.ts` : The closest thing to traditional `main` function, this is where initialisation normally takes place, such as menu definition

Once established, the content of the `app` folder is typically only changed if new components, like page or provider is added, or new initialisation is needed.

### The `pages` folder
The pages is where user interaction happens and subsequently the main functional area of our app.  
A page can be thought of like forms in E1, providing a certain functionality and interconnecting with other pages.

![App Overview Diagram](docs/app-overview.png)

The menu, as defined in `app.components.ts`, controls what pages the user has access to.  
In our app, the user has only two pages to choose from, defined by:

```typescript
    this.pages = [
      { title: 'A/B Word Search', component: AbWordSearchPage },
      { title: 'About', component: AboutPage }
    ];
```

The opening page, called the `rootPage`, is set to either page depending on the app state (see Storage below for details).

#### The 'A/B Word Search' page
The 'A/B Word Search' is our main page, a search & select like E1 form that uses `P01BDWRD` at the back-end.  The page has only two functions:

* `search` : Monitor the search-box entry and once it has 3 or more characters, make `AbWordSearchRequest` to E1 (see E1 below for details).  
* `select` : Call the 'A/B Revision' page for the selected address number.

The remaining code monitors E1 response and presents it on the page.

#### The 'A/B Revision' page
This page uses `P01012_W01012A` at the back-end (and takes it name from it -- in case 'Revision' for a read-only page is confusing).  
The only function of the page is to make `AbRevisionRequest` to E1 and present the result.

#### The 'About' page
The about page is where we configure our AIS url and optional user name and password and its only function is to validate and save the url.

### The `storage` folder
Before getting to the `e1` stuff, let's quickly look at the `storage` folder.
Our storage requirement are quite simple, with the definition in `defs.ts` and related functions in `service.ts`.  
The storage concept is document oriented as opposite to tables and rows with simple `get` and `set` functions.  This makes perfect sense since a mobile app typically only needs to store configuration and intermittent data.  Any serious data-crunching is the responsibility of the back-end.  The speed of flash-storage should also make any complex database algorithms an overkill.  
There is one 'huh...' thing here though for anyone new to `Javascript`, and that's the peculiar `Promise` type.  I don't quite understand this myself, just starting to learn how to use it and putting my faith in all those `Javascript` people.

### The `e1` folder

