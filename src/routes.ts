import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
//import { RegistrationComponent } from './app/auth/registration/registration.component';
import { LoginComponent } from './app/auth/login/login.component';
import { LogoutComponent } from './app/auth/logout/logout.component';
import { ProcessComponent } from './app/process/process.component';

export const appRoutes: Routes = [

    { path: '' , component: HomeComponent },
    { path: 'home', component: HomeComponent },
    //{ path: 'signup', component: RegistrationComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'process', component: ProcessComponent}
];
