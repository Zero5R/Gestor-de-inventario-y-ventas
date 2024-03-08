import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CategoriesComponent } from './categories/categories.component';
=======
>>>>>>> 42e82ed2e6ede8e9929c670e45de202198843672

export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'home', component:HomeComponent},
<<<<<<< HEAD
    {path:'users',component:UsuariosComponent},
    {path:'categories',component:CategoriesComponent}
    //{path:'', redirectTo:'/login', pathMatch:'full'}
=======
    {path:'', redirectTo:'/login', pathMatch:'full'}
>>>>>>> 42e82ed2e6ede8e9929c670e45de202198843672
];
