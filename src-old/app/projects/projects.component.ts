import { Component, OnInit } from '@angular/core';
import {HttpService} from '../services/http.service';
import {IProject} from '../interfaces/projects';
import { Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {
    projects: IProject[];

    constructor(private httpService: HttpService, private meta: Meta) {
        httpService.projectsAnnounced$.subscribe(
            (value: IProject[]) => {
            this.projects = value;
        });
    }

  ngOnInit() {
    this.meta.addTag({ name: 'Brooke Clonts Development Projects', description: 'See some of the professional and personal projects Brooke Clonts has worked on.' });            
  }

}
