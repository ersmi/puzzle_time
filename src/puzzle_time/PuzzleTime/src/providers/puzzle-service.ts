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
  public puzzleSet:Array<string>;
  public data:JSON;
  public friendPuzzles:JSON;

  public currentPuzzleId:String;

  public result;

  public message = 'Hello World.';

  public userToken = '';

  constructor(public auth: Authenticator, public http: Http) {
    console.log('Hello PuzzleService Provider');
    let r:string = (((1 << Math.floor(Math.random() * 16)) + (1 << Math.floor(Math.random() * 16))) as Number).toString(2);
    console.log("r = " + r);
    this.puzzleSet = [r];
  }

  //

  getPuzzleSet(){
    console.log('getPuzzleSet called');
    
    console.log(this.auth.userId);
    console.log(this.auth.userId);
    console.log(this.auth.userId);
    
    var observable = this.http.get('https://pt-b.herokuapp.com/a/user?token=' + this.auth.userToken + '&userid=6');
    observable.subscribe(res => console.log('thingy:' + JSON.parse(JSON.stringify(res))._body));
    
    
    //this doesn't work
    console.log("Test1");
    var observable2 = this.http.get('https://pt-b.herokuapp.com/a/login?token=' + this.auth.userToken);
    observable2.subscribe(res => console.log('Test 1a: ' + JSON.stringify(res)));
    observable2.subscribe(res => console.log('Test 1b: ' + (res.json()).id));
    
    //this works
    console.log("Test2");
    this.http.get('http://ip.jsontest.com/').subscribe(res => console.log('Test 2a: ' + JSON.stringify(res)));
    this.http.get('http://ip.jsontest.com/').subscribe(res => console.log('Test 2b: ' + (res.json()).ip));
    
    
    //observable2.subscribe(res => console.log((res.json()).id));
    //observable2.subscribe(res => console.log('thingy2b:' + (res.json()).id));


    
    //this.http.get('http://ip.jsontest.com/').subscribe(res => console.log(JSON.stringify(res)));
    
    // print the whole thing 
    //this.http.get('http://ip.jsontest.com/').subscribe(res => console.log(JSON.stringify(res)));
    
    // just the ip address
    //var testobj = this.http.get('http://ip.jsontest.com/');
    //testobj.subscribe(res => console.log((res.json()).ip));

    // trying to put stuff in this.data
    //testobj.subscribe(res => this.data = res.json());
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
    var observable = this.http.get('https://pt-b.herokuapp.com/a/user' + '?token=' + this.auth.userToken);
    observable.subscribe(res => this.puzzleSet = JSON.parse(JSON.stringify(res)).puzzles);
    console.log(this.puzzleSet);
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

  getPicture(pictureid){//Returns an observable
      return "https://www.northcountrypublicradio.org/news/images/dofinshades_600.jpg";//this.http.get('https://pt-b.herokuapp.com/a/picture?pictureid=' + pictureid + '&token=' + this.auth.userToken).subscribe(res => console.log(JSON.stringify(res)));
  }

  setCurrentPuzzle(id:String){
    this.currentPuzzleId = id;
  }

  //upda

  updatePuzzle(id:string, progress:String){
    //this.http.put('https://pt-b.herokuapp.com/a/')
    //send in PUT request with currentPuzzleId
  }

  getCurrentProgress(){
    return this.puzzleSet[0];
  }

  rewardScore(score:number){
    if(score > 1){
      score = 1;
    }
    let arr = this.puzzleSet;
    let exit:number = 100;
    while(score >= .2 && exit > 0){
      let randPuzzle:number = Math.floor(Math.random() * arr.length);
      let randPiece:number = Math.floor(Math.random() * arr[randPuzzle].length);
      for(let i = 0; i < arr[randPuzzle].length; i++){
        let j = (randPiece + i) % arr[randPuzzle].length;
        if(arr[randPuzzle].charAt(j) == "0"){
          arr[randPuzzle] = arr[randPuzzle].slice(0, j-1) + "1" + arr[randPuzzle].slice(j+1);
          score -= .2;
          break;
        }
      }
      /*if(not in recentlyUpdated)
      this.recentlyUpdated = 
      */
      exit--;
    }
    this.puzzleSet = arr;
  }

}
