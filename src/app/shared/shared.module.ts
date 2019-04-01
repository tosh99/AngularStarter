import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UtilsService} from "./services/utils.service";
import {HttpClientModule} from "@angular/common/http";
import {ContenteditableModelDirective} from "./directives/contenteditable";
import {FlexBoxModelDirective} from "./directives/flexbox";

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
    providers: [UtilsService]
})
export class SharedModule {
}
