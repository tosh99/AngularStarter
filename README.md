# Angular Starter Styleguide
> This is a well designed Starter Schema for Angular(v8) having tons of 
customisable components and standards for pretty much everything.

View Demo [Here](https://tosh99.github.io/AngularStarter/)

## App Module
> This should be absolutely lightweight. Never add any module or component here. All 
modules should handle their own functionalities.

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

```typescript
import {Component, OnInit} from '@angular/core';
import {ComponentInterfaceService} from "../../shared/interfaces/component.interface";
import {GlobalStateVariables} from "../../shared/services/globalstate.service";
import {UtilsService} from "../../shared/services/utils.service";

@Component({
    selector: 'app-root',
    templateUrl: './sample.component.html',
    styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements ComponentInterfaceService {
    // UI Variables
    public app_params = {
        isinitialised: false,
        user: {}
    };
    public loader_params = {
        isdisplayed: false
    };
    public modal_params = {
        context: 'mycontext',
        type: 'confirmation',
        headertext: 'Modal Header',
        content: 'Modal Body',
        affirmtext: 'Proceed',
        canceltext: 'Cancel',
        isdisplayed: false
    };
    public message_params = {
        type: 'message',
        message: 'Sample Message',
        isdisplayed: false
    };

    // Dropdown Variables
    public metadata: {
        // Assign Dropdown Keys Here
    };

    // Data Variables
    public coredata;


    constructor(private globalstate: GlobalStateVariables, private service: UtilsService) {
        GlobalStateVariables._globalState.subscribe((val) => {
            if (!this.app_params.isinitialised) {
                this.app_params.isinitialised = true;


                this.loadMetaData();
                this.loadData();

            }
        })
    }

    /*  ----------------------------------------------   Base Implementations  ------------------------------------ */

    // Function for retreiving dropdown Values
    loadMetaData() {
        this.toggleLoader(true);
        this.toggleMessage(false);
    };

    // Function for retreiving data Values
    loadData() {
        this.toggleLoader(true);
        this.toggleMessage(false);

        const payload = {};
        this.service.parseEnv('', 'POST', payload).subscribe((val) => {
            this.toggleLoader(false);
            this.transformData();

        }, (err) => {
            this.toggleLoader(false);
            this.toggleMessage(true, 'Server Error', 'error')
        })


    };

    transformData() {
    };


    toggleModal(action?) {
        if (action === true || action === false) {
            // Action Here
            this.modal_params.isdisplayed = action;
        } else {
            this.modal_params.isdisplayed = !this.modal_params.isdisplayed;
        }
    }

    toggleLoader(isdisplayed?) {
        if (isdisplayed === true || isdisplayed === false) {
            this.loader_params.isdisplayed = isdisplayed;
        } else {
            this.loader_params.isdisplayed = !this.loader_params.isdisplayed;
        }
    }

    toggleMessage(isdisplayed?, message?, type?) {
        if (message) {
            this.message_params.message = message;
        }
        if (type) {
            this.message_params.type = type;
        }
        if (isdisplayed === true || isdisplayed === false) {
            this.message_params.isdisplayed = isdisplayed;
        } else {
            this.message_params.isdisplayed = !this.message_params.isdisplayed;
        }
    }


}

```




