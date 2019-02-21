import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UtilsService} from "./services/utils.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [UtilsService]
})
export class SharedModule {
}
