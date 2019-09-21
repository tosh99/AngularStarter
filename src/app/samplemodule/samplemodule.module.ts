import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SampleComponent} from './sample/sample.component';
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {SampleModuleRoutingModule} from "./sample-module-routing.module";
import {NgSelectModule} from "@ng-select/ng-select";

@NgModule({
    declarations: [SampleComponent],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        SampleModuleRoutingModule,
        NgSelectModule
    ]
})
export class SamplemoduleModule {
}
