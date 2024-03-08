import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CategoriesComponent } from './categories/categories.component';

export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'home', component:HomeComponent},
    {path:'users',component:UsuariosComponent},
    {path:'categories',component:CategoriesComponent}
    //{path:'', redirectTo:'/login', pathMatch:'full'}
];
