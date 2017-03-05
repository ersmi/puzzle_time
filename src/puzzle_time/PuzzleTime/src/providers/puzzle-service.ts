import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
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
  constructor(public http: Http) {
    console.log('Hello PuzzleService Provider');
  }

  getFriends(){
    
  }
  
  //

  getPuzzleSet(){
    console.log('getPuzzleSet called');
    
    //console.log(JSON.stringify(this.http.get('https://conduit.productionready.io/api/profiles/eric').map((res:Response) => res.json())));
    
    //console.log(JSON.stringify(this.http.get('http://headers.jsontest.com').map((res:Response) => res.json())));
    
    this.http.get('http://ip.jsontest.com/').subscribe(res => console.log(JSON.stringify(res)));
    
    //this.http.post("https://pt-b.herokuapp.com/a/users", JSON.stringify({username: guest, password: guest,
    //console.log(this.http.post("https://pt-b.herokuapp.com/a/login", JSON.stringify({username: "asd", password: "asd"})).map(this.extractData));
    //console.log(this.http.post("https://pt-b.herokuapp.com/a/login", JSON.stringify({username: "asd", password: "asd"})));
    // want to output text to console, not observable
    //console.log(this.http.get("https://pt-b.herokuapp.com/a/login").map( (res) => { return res.text(); }));
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

  getPicture(){

  }

}
