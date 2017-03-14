import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ROUTES} from './app.routes';
import {RouterModule, Router} from '@angular/router';
import {JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { FacebookComponent } from './facebook/facebook.component';
import { TwitterComponent } from './twitter/twitter.component';
import { InstagramComponent } from './instagram/instagram.component';
import { HomeComponent } from './home/home.component';

import {AnimationService} from './services/animation.service';
import {HttpService} from './services/http.service';
import { TattooComponent } from './tattoo/tattoo.component';
import { AboutComponent } from './about/about.component';
import { MessageComponent } from './message/message.component';
import { ProjectsComponent } from './projects/projects.component';
import { EmailSubmissionComponent } from './email-submission/email-submission.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    FacebookComponent,
    TwitterComponent,
    InstagramComponent,
    HomeComponent,
    TattooComponent,
    AboutComponent,
    MessageComponent,
    ProjectsComponent,
    EmailSubmissionComponent,
    LandingPageComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    FormsModule,
    JsonpModule,
    HttpModule
  ],
  providers: [AnimationService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
