import { Component, OnInit } from '@angular/core';
import { UnsplashSearchResult } from './unsplash-search-result';

@Component({
  selector: 'app-unsplash-search',
  templateUrl: './unsplash-search.component.html',
  styleUrls: ['./unsplash-search.component.sass'],
})
export class UnsplashSearchComponent implements OnInit {
  results: UnsplashSearchResult[] = [];
  loading: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  updateResults(results: UnsplashSearchResult[]): void {
    this.results = results;
    console.log('results:', this.results); // uncomment to take a look
  }
}
