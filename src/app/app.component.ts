import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public constructor(private titleService: Title) { 
    this.createTitle();
  }

  private createTitle () {
    var titles = [
      "Skylar Roasky",
      "skylarroasky.com"
    ];
    var min = 0;
    var max = titles.length;
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    this.setTitle(titles[random]);
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
