import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './layouts/main/main.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: MainComponent,
        children: [
            {
                path: '',
                loadChildren: './modules/home/home.module#HomeModule'
            }
        ]
    },
    {
        path: 'media',
        component: MainComponent,
        children: [
            {
                path: '',
                loadChildren: './modules/all-media/all-media.module#AllMediaModule'
            }
        ]
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
