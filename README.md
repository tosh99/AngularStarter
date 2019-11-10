# Angular Starter Styleguide
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
- [Folder Structure]()
- [Environment Management]()
    - [Design guidelines]()
    - [Configuration]()
- [Designing Modules]()
    - [How to design modules]()
    - [AppModule]()
    - [SharedModule]()
- [Designing Components]()
    - [How to design components]()
    - [AppComponent]()
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

### 1. Folder Structure
The current folder structure is described below

- Core Angular Files
    - package.json
    - angular.json
    - .editorconfig




### 2. Environment Management


#### 2.1 Design guidelines
asdasdasda

#### 2.1 Configuration
asdasdasadasda


### 3. Designing Modules
asdasdasadasda

### 4. Designing Components
asdasdasadasda

### 5. Libraries
asdasdasadasda

### 6. Styles
asdasdasadasda

### 7. Asset Management
asdasdasadasda

### 8. Building
>asdasdasadasda

## Global Components
> These components have been pre-included and their usage guidelines are mentioned 
in their respective descriptions. 


#### [Header]() 
> Most of the functionality for the header is located in the header component 
file and the styles in the header styling file.

#### [Modal]() 
> Description : A simple modal
	
>- First item
>- Second item
>- Third item


Params: modal_params
```typescript
const modal_params = {
    context: 'mycontext', 
    type: 'confirmation', 
    headertext: 'Modal Header', 
    content: 'Modal Body', 
    affirmtext: 'Proceed', 
    canceltext: 'Cancel',  
    isdisplayed: false
};
```

#### [Loader]() 
    A simple container containing loading circle


Params: loader_params
```typescript
const loader_params = {
    isdisplayed: false
};
```



#### [Message]() 
    A simple container containing messages of type 'message' and 'error'

Params: message_params
```typescript
const message_params = {
    type: 'message',
    message: 'Sample Message',
    isdisplayed: false
};
```



## Global Styles
> Default styles have been provided for the following components. 

* [Global](https://github.com/tosh99/AngularStarter/blob/master/src/styles.scss)
* [Variables](https://github.com/tosh99/AngularStarter/blob/master/src/app/shared/stylesheets/variables.scss)
* [Buttons](https://github.com/tosh99/AngularStarter/blob/master/src/app/shared/stylesheets/buttons.scss)
* [Headers](https://github.com/tosh99/AngularStarter/blob/master/src/app/shared/components/header/header.component.scss)
* [Modal](https://github.com/tosh99/AngularStarter/blob/master/src/app/shared/components/modal/modal.component.scss)

## Global Services
> Default styles have been provided for the following components. 

* [Utils](https://github.com/tosh99/AngularStarter/blob/master/src/styles.scss)
* [GlobalStateVariables](https://github.com/tosh99/AngularStarter/blob/master/src/app/shared/stylesheets/variables.scss)

## API Calling Procedure
> Default styles have been provided for the following components. 

* [Utils](https://github.com/tosh99/AngularStarter/blob/master/src/styles.scss)
* [GlobalStateVariables](https://github.com/tosh99/AngularStarter/blob/master/src/app/shared/stylesheets/variables.scss)


## Component Blueprint
> This is the standard component design guideline to be followed


