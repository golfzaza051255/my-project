import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  proJect = 'อะไรก้อได้';
  nameTh1 = 'กอล์ฟ';
  nameTh2 = 'ปอ';
  constructor() { }

  ngOnInit(): void {
  }

}
