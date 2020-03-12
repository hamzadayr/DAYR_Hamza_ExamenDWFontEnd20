import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public showC : boolean =false;
  public showL: boolean =true;


  constructor() { }

  ngOnInit() {
  }

  loginU(nbr){
    console.log("hhhhhhhhhhh");
    this.showC =true;
    this.showL=false;
  }

}
