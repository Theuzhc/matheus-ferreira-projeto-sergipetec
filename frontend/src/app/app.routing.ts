import { RouterModule, Routes } from "@angular/router";
// import { HomeComponent } from "./home/home.component";
import { ListaComponent } from "./lista/lista.component";
import { ModuleWithProviders } from "@angular/core";
import { ContribuintesFormComponent } from "./contribuintes-form/contribuintes-form.component";

const APP_ROUTES: Routes = [
    {path: '', component: ListaComponent}, 
    {path: 'cadastrar', component:ContribuintesFormComponent},
    {path: 'editar/:id', component:ContribuintesFormComponent}
];

export const routing: ModuleWithProviders<RouterModule>  = RouterModule.forRoot(APP_ROUTES)