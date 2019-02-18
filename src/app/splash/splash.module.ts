import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RootComponent} from './root/root.component';
import {RouterModule, Routes} from '@angular/router';


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
        RouterModule.forChild(routes)
    ]
})
export class SplashModule {
}
