import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrayImages = ['vehicule4.png', 'vehicule1.png', 'vehicule2.png', 'vehicule3.png'];

  jsonImages = [
    {
  title: 'Lac',
  url:'vehicule4.png',
  author: 'Bill gates'
},
{
  title: 'Sunrise',
  url:'vehicule1.png',
  author: 'Lara Croft'
},
{
  title: 'Sea',
  url:'vehicule2.png',
  author: 'James Bond'
}
];
  randomIndex = Math.round(Math.random()*this.arrayImages.length);
  sourceImage = this.arrayImages[this.randomIndex];

  console(str:string){
    console.log(str);
  }

  valcolor = 'red';
  varObjet= {'font-size':'20px'};
  textPrimary = false;
  displayParag = true;
  valsize = {'font-size':'20px'};
  displaySwitch = 1;
  incSwitch(){
    this.displaySwitch++;
    this.displaySwitch = this.displaySwitch>3 ? 1 : this.displaySwitch;
  }
  constructor() { }



  ngOnInit(): void {

    console.log('randomIndex:',this.randomIndex);
    console.log('sourceImage:',this.sourceImage);
  }

}
