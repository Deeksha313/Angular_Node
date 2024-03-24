import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-data2',
  standalone: true,
  imports: [HttpClientModule,RouterOutlet,NgFor],
  templateUrl: './data2.component.html',
  styleUrl: './data2.component.css'
})
export class Data2Component implements OnInit{
  data: any;
  newData: { name: string, age: string } = { name: '', age: '' };

  url = 'http://localhost:3001'

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>(this.url)
      .subscribe({
        next: response => {
          this.data = response;
        }
      })
  }

  putData(name: string, age: string) {
    this.newData.name = name;
    this.newData.age = age;
    this.http.put<any>(this.url, this.newData)
      .subscribe({
        next: response => {
          this.data = response;
        }
      });
  }

}
