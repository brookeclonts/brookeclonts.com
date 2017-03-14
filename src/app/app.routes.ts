import {Routes} from '@angular/router';
// import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ProjectsComponent} from './projects/projects.component';
import {LandingPageComponent} from './landing-page/landing-page.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'books', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'landing', component: LandingPageComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
