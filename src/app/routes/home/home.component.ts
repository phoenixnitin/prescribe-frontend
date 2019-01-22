import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userData = {};
  constructor( private http: HttpClient) {
    this.http.get('assets/data/tempuserdata.json').subscribe(data => {
      this.userData = data['user1234']['homepage'];
    }, error => {
      console.log('error happened');
    });
  }

  ngOnInit() {
  }

  returnObjectKeys(dictionary) {
    const obj = Object.keys(dictionary);
    return obj;
  }
  returnIsArray(object) {
    return Array.isArray(object);
  }
  returnIsString(object) {
    return typeof(object) === 'string' ? true : false;
  }
}
