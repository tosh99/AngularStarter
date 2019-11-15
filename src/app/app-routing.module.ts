import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'sample',
        pathMatch: 'full'
    },
    {
        path: 'sample',
        loadChildren: () => import('./samplemodule/samplemodule.module').then(m => m.SamplemoduleModule)
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
