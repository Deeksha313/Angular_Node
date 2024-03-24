import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet,RouterLink, RouterLinkActive, RouterModule } from '@angular/router';//lab6,lab9
// lab1
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
//lab6
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
//lab2
import { ChildComponent } from './child/child.component';
//lab3
import { FontSizeDirective } from './font-size.directive';
import { ChildFontComponent } from "./child-font/child-font.component";
//lab4
import { CharacterPipe } from './character.pipe';
//lab6
import { FormControl, FormGroup, FormsModule,ReactiveFormsModule,Validators } from '@angular/forms';
//lab7
import { NumberListComponent } from './number-list/number-list.component';
//lab8
import { HttpClientModule ,HttpClient,provideHttpClient,withFetch} from '@angular/common/http';//(lab9component )
import { response } from 'express';
//lab9
import { DataComponent } from './data/data.component';
//lab10
import { Data2Component } from './data2/data2.component';




@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive, RouterModule, Component1Component, Component2Component, Component3Component, Component4Component, HomeComponent, ContactComponent, AboutComponent,
        ChildComponent, DataComponent,Data2Component,FontSizeDirective, ChildFontComponent,CharacterPipe,FormsModule,ReactiveFormsModule,NumberListComponent,HttpClientModule]
})
export class AppComponent {
  title = 'Deeksharath';
  //lab2
  Name:string="";
  parentvalue='Value from Parent'; //(write this first)send value from parent to child(lab2)
  getValuesfromChild(value:string){
    this.Name=value;
    console.log(value);
  }
  // lab3
  size:number=15;
  sendFontSize(value:string){
    this.size=parseInt(value);
  }
  //lab4
  str:string='';
  getString(item:any){
    this.str=item;
  }
  //lab5
  formName= new FormGroup({
    name:new FormControl('',Validators.required),
    age:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    phone:new FormControl('',Validators.required)

  })
  //lab8
  serviceUrl='https://randomuser.me/api/'
  userData:any;

  constructor(private http:HttpClient){}

  fetchData(){
    this.http.get(this.serviceUrl).subscribe({
      next:(response:any)=>{
        this.userData=response.results[0];
        console.log(this.userData);
      }
    })
  }


}
provideHttpClient(withFetch())//lab8

