import { Component, OnInit, Input } from '@angular/core';
import { BoxCard } from '../../interface/shaers';

@Component({
  selector: 'app-box-card',
  templateUrl: './box-card.component.html',
  styleUrls: ['./box-card.component.css']
})
export class BoxCardComponent implements OnInit {

  @Input() dataCard: BoxCard;
  constructor() { }

  ngOnInit(): void {
  }

  getImg(data) {
    const path = '/assets/image/' + data;
    console.log('LOG path', path);

    return path;
  }


}
