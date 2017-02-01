import { Component, OnInit } from '@angular/core';
import {HttpService} from '../services/http.service';
import {IProject} from '../interfaces/projects';


@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {
    projects: IProject[];

    constructor(private httpService: HttpService) {
        httpService.projectsAnnounced$.subscribe(
            (value: IProject[]) => {
            this.projects = value;
        });
    }

  ngOnInit() {
  }

}
