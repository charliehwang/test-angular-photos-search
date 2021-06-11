import {
  Output,
  Component,
  OnInit,
  EventEmitter,
  ElementRef,
  HostListener,
} from '@angular/core';

import { Subject } from 'rxjs';
// import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators';
import {
  takeUntil,
  debounceTime,
  distinctUntilChanged,
  tap,
} from 'rxjs/operators';

import { UnsplashSearchService } from '../unsplash-search/unsplash-search.service';
import { UnsplashSearchResult } from '../unsplash-search/unsplash-search-result';

@Component({
  selector: 'app-search-box',
  template: `
    <input
      type="text"
      class="search-input"
      placeholder="Search"
      [value]="searchValue"
      autofocus
    />
  `,
  styleUrls: ['./search-box.component.sass'],
})
export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<UnsplashSearchResult[]> = new EventEmitter<
    UnsplashSearchResult[]
  >();

  public onEvent: EventEmitter<any>;
  protected emitEvent$: Subject<any>;
  public searchValue: string = '';

  constructor(private unsplash: UnsplashSearchService, private el: ElementRef) {
    this.onEvent = new EventEmitter<any>();
    this.emitEvent$ = new Subject<any>();
  }

  ngOnInit() {
    this.emitEvent$
      .pipe(
        // takeUntil(this.subscription$),
        debounceTime(500),
        distinctUntilChanged(),
        // tap((value) => this.emitChange(value))
        tap(() => this.search(this.searchValue))
      )
      .subscribe((data) => {
        console.log('subbed', data);
      });
  }

  public search(query: string): void {
    this.unsplash.search(query).subscribe(
      (results: any) => {
        console.log(results);
        // on sucesss
        this.loading.emit(false);
        this.results.emit(results);
      },
      (err: any) => {
        // on error
        console.log(err);
        this.loading.emit(false);
      },
      () => {
        // on completion
        this.loading.emit(false);
      }
    );
  }

  public emitChange(value: any): void {
    // console.log('Emitting', this.searchValue);
    this.onEvent.emit(this.searchValue);
  }

  @HostListener('document:keyup', ['$event'])
  public onKeyUp(event: KeyboardEvent): void {
    event.preventDefault();
    // console.log(event);
    // console.log(event.target);
    this.searchValue = (event.target as HTMLInputElement).value;
    this.emitEvent$.next(event);
  }
}
