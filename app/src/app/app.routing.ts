import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CadastrarComponent } from "./cadastrar/cadastrar.component";
import { ListaComponent } from "./lista/lista.component";
import { ModuleWithProviders } from "@angular/core";

const APP_ROUTES: Routes = [
    {path: '', component: ListaComponent}, 
    {path: 'cadastrar', component:CadastrarComponent}
];

export const routing: ModuleWithProviders<RouterModule>  = RouterModule.forRoot(APP_ROUTES)