import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownComponent} from './dropdown.component';
import {TextFilterPipe} from './dropdownfilter.pipe';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [DropdownComponent, TextFilterPipe],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [DropdownComponent, TextFilterPipe]
})
export class DropdownModule {
}
