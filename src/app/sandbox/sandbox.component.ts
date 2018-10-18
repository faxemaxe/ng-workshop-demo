import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // const customObservable$ = Observable.create((observer) => {
    //   let counter = 0;
    //   setInterval(() => {
    //     const timeout = counter * 250;
    //     console.log('timeout', timeout);
    //     setTimeout(() => {
    //       observer.next(++counter);
    //     }, timeout);
    //   }, 1000);
    // });

    // customObservable$
    //   .pipe(
    //     tap((value) => {
    //       // console.log('tapped', value);
    //     }),
        // filter((value: number) => {
        //   return !!(value % 2);
        //   // if (value % 2) {
        //   //   return true;
        //   // } else {
        //   //   return false;
        //   // }
        // }),
        // map((value: number) => {
        //   return value * 2;
        // })
      // )
      // .subscribe(
      //   (data) => {
      //     console.log('data: ', data);
      //   }
      // );

  }

}
