import {Routes} from '@angular/router';
// import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ProjectsComponent} from './projects/projects.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {SitemapComponent} from './sitemap/sitemap.component';
import {DrawComponent} from './draw/draw.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'books', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'landing', component: LandingPageComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'sitemap', component: SitemapComponent },
    { path: 'draw', component: DrawComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
