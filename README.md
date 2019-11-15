# Angular Starter Styleguide (v0.0.2)
> This is a well designed Starter Schema for Angular(v8) having tons of 
customisable components and standards for pretty much everything.

View Demo [Here](https://tosh99.github.io/AngularStarter/)

This repo serves as an Angular Starter Blueprint for anyone looking to get up and running with Angular and TypeScript fast. 

- Best practices in file and application organization for Angular.
- Pre included state of the art libraries
- A great Angular seed repo for anyone who wants to start their project.
- Ahead of Time (AoT) compile for rapid page loads of your production builds.
- Tree shaking to automatically remove unused code from your production bundle.


## Installation
##### Make sure you have Node version >= 10
> Clone/Download the repo then run these commands
```
# Install Dependencies
npm i

# Start Server
ng serve --o
```

Go to [http://localhost:4200](http://localhost:4200) to view your app


## Table of Contents
- [Environment Management]()
    - [API Calling Procedure]()
- [Designing Modules]()
    - [Loading Modules]()
    - [SharedModule]()
- [Global Components]()
- [Libraries]()
    - [Preincluded libraries]()
    - [Configuring Styling for the libraries]()
- [Styles]()
    - [Styling guidelines]()
    - [Global Styles]()
- [Asset Management]()
    - [Shared Assets]()
    - [Module Specific Assets]()
- [Building]()
    - [Environment specific builds]()


### Environment Management
One of the most important part of the repository is the environment management. 
Environment management is done via the environment files and the Network Manager.

> All APIs are to be listed in [environment.xxx.ts]()

##### API Calling
In your component use this -
```typescript
const payload = {};
this.service.parseEnv('url_key', 'POST', payload).subscribe((val) => {
            // Handle Valid Response Here
        }, (err) => {
            // Handle Error Response Here(eg. 500)
        })
```

> The 'url_key' must be defined in the [environment.xxx.ts]() files. That's it. 
No other modifications are required.


### Designing Modules
The modules should comprise of at most 2-3 big components. If you require more components 
group them together and register them in a separate module. How to load them is described below-


##### Loading Modules
> Url Based Modules

These modules have to be lazily loaded via url routes.

> Feature Based Modules

The components defined here can simply be imported into another module via an import where it
is required.

##### Shared Module
The shared module contains the following components, services and functionalities. The components 
have been designed as modules for easier import into modules wherever they are required.

- Directives
- Components
- Models
- Services
- Stylesheets

> Directives

| Directive         | Description   | Usage  |
| -------------     |---------------| -------|
| Contenteditable   | This is to create dynamic containers with variable height | ```<div [appContentEditableModel]="ngmodel_variable" (appContentEditableModelChange)="change($event)"></div>``` |

> For components, see below

### Global Components
These components have been designed and created so as to be flexible enough to accomodate various
scenarios without imposing any king of restrictions from customising it. 

> Important: Please note that to use these you have to import the shared/components/<component_name> module
to the required module


##### Global Reusable Components

> Dropdown

| Input Params           | Description    |
|------------------------| -------------- |
| items                  |                |
| selectedItem           |                |
| placeholder            |                |
| bindLabel              |                |
| bindValue              |                |
| isSearchable           |                |
| isClearable            |                |
| isMultiSelect          |                |
| isAddTag               |                |
| style                  |                |
| theme                  |                |
| isDebugMode            |                |

> Message

| Input Params           | Description    | Default Value |
|------------------------| -------------- |-------------|
| is_message_displayed   |                |{type: 'message',message: '',isdisplayed: false};|




> Loader

| Input Params           | Description    | Default Value |
|------------------------| -------------- |-------------|
| styles                 |                |{height: '200px', position: 'relative'}


> Modal

| Input Params           | Description    | Default Value |
|------------------------| -------------- |-------------|
| is_modal_displayed     |                |{type: 'confirmation', headertext: 'Modal Header', content: 'Modal Body', affirmtext: 'Proceed', canceltext: 'Cancel'};


##### Global Requirement Based Components

> Header

You can go and change the styles and markup directly in the header module.





### Libraries
> Only bootstrap has been used as of now

### Styles
Default styles have been provided for the following components. 

1. [Global](https://github.com/tosh99/AngularStarter/blob/master/src/styles.scss)
This is the master file and this must not be touched in any case
2. [Buttons](https://github.com/tosh99/AngularStarter/blob/master/src/app/shared/stylesheets/buttons.scss)
All the button styles including styles for outline, clear and disabled are present here.
3. [Colors](https://github.com/tosh99/AngularStarter/blob/master/src/app/shared/components/header/header.component.scss)
All the theme based color definitions are present here. Use this file to define your color scheme.
4. [Fonts](https://github.com/tosh99/AngularStarter/blob/master/src/app/shared/components/modal/modal.component.scss)
All the font related styles including styles for default and fallback font is defined here. Font is downloaded in index.html
5. [Input](https://github.com/tosh99/AngularStarter/blob/master/src/app/shared/components/modal/modal.component.scss)
All the global styles for inputs and inputgroups are present here. Inputgroups are primarily used for forms for a consistent styling
6. [Pages](https://github.com/tosh99/AngularStarter/blob/master/src/app/shared/components/modal/modal.component.scss)
All the page related styles are here to give a uniform look to all the pages and maintain the design language
7. [Scroll](https://github.com/tosh99/AngularStarter/blob/master/src/app/shared/components/modal/modal.component.scss)
All the scroll related styles are here to accomodate the various requirements while scrolling 
8. [Table](https://github.com/tosh99/AngularStarter/blob/master/src/app/shared/components/modal/modal.component.scss)
All the table related styles are present here along with an example. 
9. [Theme](https://github.com/tosh99/AngularStarter/blob/master/src/app/shared/components/modal/modal.component.scss)
Various standard dimensions are present here

### Asset Management
WIP

### Building
WIP
