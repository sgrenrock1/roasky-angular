import { Injectable } from '@angular/core';

@Injectable()
export class LoadFilesService {

  constructor() { }

  load(): string[] {
    return [
      "assets/img/2015-02-11 col.jpg",
      "assets/img/all 3.jpg",
      "assets/img/mckenzie.jpg",
      "assets/img/skylar.jpg",
      "assets/img/tns.jpg",
      "assets/img/tristan.jpg",
      "assets/img/tristan-sexy.jpg",
      "assets/img/two.jpg"
    ];
  }
}
