import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  proJect = 'อะไรก้อได้';
  nameTh1 = 'กอล์ฟ';
  nameTh2 = 'ปอ';
  dataCard: any;
  constructor() { }

  ngOnInit(): void {
    this.getDataCard();
  }

  private getDataCard() {
    const data = [
      {
        img: '/assets/image/1.jpg',
        deteil: 'ลูฟี่ กัปตันเรือ กลุ่มโจรสลัดหมวกฟาง'
      }, {
        img: '/assets/image/2.jpg',
        deteil: 'โซโล นักดาบ แห่งกลุ่มโจรสลัดหมวกฟาง ที่ชอบเดินหลงทางอยู่เป็นประจำ แต่มีความสามารถในการต่อสู้สูงมาก'
      }, {
        img: '/assets/image/3.jpg',
        deteil: 'นามิ ต้นหนเรือ และ ผู้หญิงที่รักสมบัติและเงินทอง'
      }, {
        img: '/assets/image/5.jpg',
        deteil: 'ซันจิ ผู้ที่ชอบสาวๆเป็นอย่างมาก และเป็นกุ๊ก ของกลุ่มโจรสลัดหมวกฟาง'
      }, {
        img: '/assets/image/4.jpg',
        deteil: 'อุซป จ้าวแห่งการโกหก จมูกยาว แล้วก็ฉายา กัปตันอุซป หรือโซเงคิงนี่เอง'
      }, {
        img: '/assets/image/6.jpg',
        deteil: 'ช๊อปเปอร์ เจ้ากวางตัวน้อยน่ารัก ซึ่งเป็นหมอ ของกลุ่มโจรสลัดหมวกฟาง'
      }, {
        img: '/assets/image/7.jpg',
        deteil: 'โรบิน ผู้หญิงที่มีความรู้เรื่องประวัติศาตร์ และสามารถอ่านโพเนกลีฟได้ ของกลุ่มโจรสลัดหมวกฟาง'
      }, {
        img: '/assets/image/9.jpg',
        deteil: 'แฟรงกี้ เนื่องจากเจ้าหมอนี่มันคือ ไซบอร์คนั่นเอง และก็เป็นคนขี้ใจอ่อนร้องไห้ง่าย'
      }, {
        img: '/assets/image/8.jpg',
        deteil: 'บรู๊ค (นักดาบฮานาอุตะ" บรูค)'
      }
    ];
    this.dataCard = data;
  }
}
