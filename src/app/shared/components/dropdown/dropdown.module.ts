import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedServicesModule} from '../../shared-services.module';
import {DropdownComponent} from './dropdown.component';
import {TextFilterPipe} from '../../directives/dropdownfilter.pipe';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [DropdownComponent, TextFilterPipe],
    imports: [
        CommonModule,
        FormsModule,
        SharedServicesModule,
    ],
    exports: [DropdownComponent, TextFilterPipe]
})
export class DropdownModule {
}
