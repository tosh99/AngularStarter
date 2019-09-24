import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UtilsService} from './services/utils.service';
import {HttpClientModule} from '@angular/common/http';
import {ContenteditableModelDirective} from './directives/contenteditable';
import {FlexBoxModelDirective} from './directives/flexbox';
import {GlobalStateVariables} from './services/globalstate.service';
import {ComponentInterfaceService} from "./interfaces/component.interface";

@NgModule({
    declarations: [
        ContenteditableModelDirective,
        FlexBoxModelDirective
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [
        ContenteditableModelDirective,
        FlexBoxModelDirective
    ],
    providers: [UtilsService, GlobalStateVariables, ComponentInterfaceService]
})
export class SharedServicesModule {
}
