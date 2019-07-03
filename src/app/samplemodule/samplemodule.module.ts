import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RootComponent} from './root/root.component';
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [RootComponent],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule
    ]
})
export class SamplemoduleModule {
}
