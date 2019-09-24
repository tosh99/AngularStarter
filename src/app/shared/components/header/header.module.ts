import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./header.component";
import {SharedServicesModule} from "../../shared-services.module";


@NgModule({
    declarations: [HeaderComponent],
    imports: [
        CommonModule,
        SharedServicesModule
    ],
    exports: [HeaderComponent]
})
export class HeaderModule {
}
