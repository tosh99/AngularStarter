import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RootComponent} from './root/root.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from "../shared/shared.module";


const routes: Routes = [
    {
        path: '',
        component: RootComponent
    }
];


@NgModule({
    declarations: [RootComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class SplashModule {
}
