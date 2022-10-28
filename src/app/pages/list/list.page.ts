import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/interfaces';
import { ApijsonService } from 'src/app/services/apijson.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  items: User[]=[];

  constructor(private ser: ApijsonService) {
  }
  

  getImgSrc(avatar: string) {
    return `https://dummyimage.com/600x400/${Math.round( Math.random() * 99999)}&text=${avatar}`;
  }

  ngOnInit() {
    this.ser.getInfo().subscribe(resp => {
      this.items = resp.map(obj => ({ ...obj, img: this.getImgSrc(String (obj.name).charAt(0)) }));
      console.log(this.items);
    });
  }

}
