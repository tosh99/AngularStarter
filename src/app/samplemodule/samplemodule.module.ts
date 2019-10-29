import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SampleComponent} from './sample/sample.component';
import {SharedServicesModule} from "../shared/shared-services.module";
import {FormsModule} from "@angular/forms";
import {SampleModuleRoutingModule} from "./sample-module-routing.module";
import {HeaderModule} from "../shared/components/header/header.module";
import {MessageModule} from "../shared/components/message/message.module";
import {LoaderModule} from "../shared/components/loader/loader.module";
import {ModalModule} from "../shared/components/modal/modal.module";
import {DropdownModule} from "../shared/components/dropdown/dropdown.module";

@NgModule({
    declarations: [SampleComponent],
    imports: [

        // Main Modules
        CommonModule,
        FormsModule,
        SampleModuleRoutingModule,

        // Libraries

        // Shared Services Modules
        SharedServicesModule,

        // Shared Component Modules
        HeaderModule,
        MessageModule,
        LoaderModule,
        ModalModule,
        DropdownModule
    ]
})
export class SamplemoduleModule {
}
