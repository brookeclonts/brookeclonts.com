import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.sass']
})
export class SitemapComponent implements OnInit {

  constructor(private meta: Meta) { }

  ngOnInit() {
    this.meta.addTag({ name: 'Brooke Clonts Author Sitemap', description: 'Brooke Clonts believes in learning mindlessly. She writes fantasy novels and loves to incorporate history into her complex storylines.' });            
  }

}
