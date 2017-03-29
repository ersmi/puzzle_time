import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Authenticator } from '../providers/authenticator';
import 'rxjs/add/operator/map';

/*
  Generated class for the PuzzleService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PuzzleService {
  public puzzleSet:JSON;
  public data:JSON;
  public friendPuzzles:JSON;

  public result;

  public message = 'Hello World.';

  public userToken = '';

  constructor(public auth: Authenticator, public http: Http) {
    console.log('Hello PuzzleService Provider');
  }

  getFriends(){
    
  }
  
  //

  getPuzzleSet(){
    console.log('getPuzzleSet called');
    this.http.get('http://ip.jsontest.com/').subscribe(res => console.log(JSON.stringify(res)));
    
    // print the whole thing 
    this.http.get('http://ip.jsontest.com/').subscribe(res => console.log(JSON.stringify(res)));
    
    // just the ip address
    var testobj = this.http.get('http://ip.jsontest.com/');
    testobj.subscribe(res => console.log((res.json()).ip));

    // trying to put stuff in this.data
    testobj.subscribe(res => this.data = res.json());
    //console.log(this.data.ip);
    
    //console.log(this.http.get("https://pt-b.herokuapp.com/a/login").map(this.extractData));
    //this.http.get("url");
  }
  
  extractData(res: Response) {
    let body = res.text();
    return body;
  }
  
  //

  getUserPuzzleSet(){
    
  }

  getPuzzle(){
    /*if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      this.http.get('path/to/data.json')
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data;
          resolve(this.data);
        });
    });*/
  }

  getPicture(pictureid){
    this.doFakeAuthenticationStuff();
    setTimeout(() => {
        this.http.get('https://pt-b.herokuapp.com/a/picture?pictureid=' + pictureid + '&token=' + this.auth.userToken).subscribe(res => console.log(JSON.stringify(res)));
    }, 10000);
  }



  doFakeAuthenticationStuff(){
    this.auth.authenticate('David','Krall');
  }

}
