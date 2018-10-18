import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { tap, debounceTime, map, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.css']
})
export class TypeaheadComponent implements OnInit {

  @Output() valueChanged: EventEmitter<any> = new EventEmitter();

  public keyUp: Subject<string> = new Subject();

  constructor() { }

  ngOnInit() {
    this.keyUp.asObservable()
      .pipe(
        tap((unfiltered) => {
          console.log('unfiltered: ', unfiltered);
        }),
        debounceTime(500),
        map((input) => {
          return input.toLowerCase();
        }),
        distinctUntilChanged()
      )
      .subscribe((input) => {
        this.valueChanged.emit(input);
      });
  }

}
