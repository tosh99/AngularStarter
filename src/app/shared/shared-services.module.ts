import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UtilsService} from './services/utils.service';
import {HttpClientModule} from '@angular/common/http';
import {ContenteditableModelDirective} from './directives/contenteditable.directive';
import {GlobalStateVariables} from './services/globalstate.service';
import {ComponentInterfaceService} from "./models/interfaces/component.interface";

@NgModule({
    declarations: [
        ContenteditableModelDirective,
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [
        ContenteditableModelDirective,
    ],
    providers: [UtilsService, GlobalStateVariables, ComponentInterfaceService]
})
export class SharedServicesModule {
}
