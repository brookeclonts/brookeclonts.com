import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  constructor(private meta: Meta) { }

  ngOnInit() {
    this.meta.addTag({ name: 'About Brooke Clonts', description: 'Brooke Clonts believes in learning mindlessly. She writes fantasy novels and loves to incorporate history into her complex storylines. Learn about her crazy peculiarities here.' });            
  }

}
