import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass']
})
export class LandingPageComponent implements OnInit {

  constructor(private meta: Meta) { }

  ngOnInit() {
    this.meta.addTag({ name: 'Brooke Clonts Author Blog', description: 'Brooke Clonts believes in learning mindlessly. She writes fantasy novels and loves to incorporate history into her complex storylines. Read samples of her writing, or learn about the history she weaves into her stories.' });            
  }

}
