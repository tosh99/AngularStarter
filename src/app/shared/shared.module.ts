import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UtilsService} from './services/utils.service';
import {HttpClientModule} from '@angular/common/http';
import {ContenteditableModelDirective} from './directives/contenteditable';
import {FlexBoxModelDirective} from './directives/flexbox';
import {GlobalStateVariables} from './services/globalstate.service';
import {HeaderComponent} from './components/header/header.component';
import {ModalComponent} from './components/modal/modal.component';
import {LoaderComponent} from './components/loader/loader.component';
import {ComponentInterface, ComponentInterfaceService} from "./interfaces/component.interface";
import { MessageComponent } from './components/message/message.component';

@NgModule({
    declarations: [
        ContenteditableModelDirective,
        FlexBoxModelDirective,
        HeaderComponent,
        ModalComponent,
        LoaderComponent,
        MessageComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [
        ContenteditableModelDirective,
        FlexBoxModelDirective,
        ModalComponent,
        HeaderComponent,
        LoaderComponent,
        MessageComponent

    ],
    providers: [UtilsService, GlobalStateVariables, ComponentInterfaceService]
})
export class SharedModule {
}
