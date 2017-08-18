import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VMSnapShot} from './app.SnapShotList';
const helloRoutes: Routes=[
    {path:'',component:VMSnapShot}
]
const appRoutes: Routes =[
    ...helloRoutes
]
export const appRoutingProviders: any[]=[
    
];
export const AppRoutingModule: ModuleWithProviders =RouterModule.forRoot(appRoutes);