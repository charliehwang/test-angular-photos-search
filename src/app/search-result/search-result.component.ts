import { Input, Component, OnInit } from '@angular/core';
import { UnsplashSearchResult } from '../unsplash-search/unsplash-search-result';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.sass'],
})
export class SearchResultComponent implements OnInit {
  @Input() result: UnsplashSearchResult;

  constructor() {
    this.result = new UnsplashSearchResult();
  }

  ngOnInit(): void {}
}
