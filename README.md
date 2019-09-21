# Angular Starter Styleguide
> This is a well designed Starter Schema for Angular having tons of 
Customisable Components and Satandards for pretty much everything.

View Demo [Here](https://tosh99.github.io/AngularStarter/)

## App Module
> This should be absolutely lightweight. Never add any module or component here. All 
modules should handle their own functionalities.

## Global Components
> These components have been pre-included and their usage guidelines are mentioned 
in their respective descriptions. 


#### [Header]() 
    Most of the functionality for the header is located in the header component 
    file and the styles in the header styling file.

#### [Modal]() 
    A simple modal


Params: modal_params
```typescript
const modal_params = {
    context       : 'mycontext', 
    type          : 'confirmation', 
    headertext    : 'Modal Header', 
    content       : 'Modal Body', 
    affirmtext    : 'Proceed', 
    canceltext    : 'Cancel',  
    isdisplayed   : false
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






