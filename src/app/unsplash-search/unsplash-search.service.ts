import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { UnsplashSearchResult } from './unsplash-search-result';

export const API_KEY = 'yswiOHQPSc7kE2GHJB1IXDG0mwzNJ3xdT4SJH_Min3M';
export const API_URL = 'https://api.unsplash.com/search/photos/';

/**
 * UnsplashSearchService connects to the Unsplash API
 * See: https://unsplash.com/documentation
 */
@Injectable()
export class UnsplashSearchService {
  private baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject(API_KEY) private apiKey: string,
    @Inject(API_URL) private apiUrl: string
  ) {
    this.baseUrl = `${apiUrl}?client_id=${apiKey}`;
  }

  // search(query: string): Observable<UnsplashSearchResult[]> {
  search(query: string): any {
    const params: string = `query=${query}`;
    const queryUrl = `${this.baseUrl}&${params}`;

    console.log(queryUrl);
    // return this.http.get(queryUrl);
    return this.http.get(queryUrl).pipe(
      map((data: any) => {
        // console.log('--->', data);
        return data.results.map((item: any) => {
          // console.log(item);
          return new UnsplashSearchResult({
            id: item.id,
            description: item.alt_description,
            imgThumbnailUrl: item.urls.thumb,
            imgFullUrl: item.urls.full,
          });
        });
      })
    );
  }
}
