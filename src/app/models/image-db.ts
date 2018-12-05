import { IndexedImage } from './indexed-image';

export class ImageDB {
    mainGallery: IndexedImage[];

    constructor() {
        this.mainGallery = [
            {url: "assets/img/2013-07-05.jpg", index: 0, caption: "..." },
            {url: "assets/img/2014-10-24 s.jpg", index: 0, caption: "..." },
            {url: "assets/img/2016-01-24 neu.jpg", index: 0, caption: "..." },
            {url: "assets/img/2016-05-09.jpg", index: 0, caption: "..." },
            {url: "assets/img/2017-08-07.jpg", index: 0, caption: "..." },
            {url: "assets/img/2017-12-03.jpg", index: 0, caption: "..." },
            {url: "assets/img/2017-12-17.jpg", index: 0, caption: "..." },
            {url: "assets/img/2018-11-01.jpg", index: 0, caption: "..." },
            {url: "assets/img/2018-11-03.jpg", index: 0, caption: "..." },
            {url: "assets/img/bg-space.jpg", index: 0, caption: "..." },
            {url: "assets/img/CS_icon_with_box.png", index: 0, caption: "..." },
            {url: "assets/img/CS_logo_1x1.jpg", index: 0, caption: "..." },
            {url: "assets/img/IMG_2805.JPG", index: 0, caption: "..." }
        ];
    }
}