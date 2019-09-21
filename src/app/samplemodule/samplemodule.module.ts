import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SampleComponent} from './sample/sample.component';
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {SampleModuleRoutingModule} from "./sample-module-routing.module";

@NgModule({
    declarations: [SampleComponent],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        SampleModuleRoutingModule
    ]
})
export class SamplemoduleModule {
}
