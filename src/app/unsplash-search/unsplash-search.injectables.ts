import {
  UnsplashSearchService,
  API_KEY,
  API_URL,
} from './unsplash-search.service';

export const unsplashSearchInjectables: Array<any> = [
  { provide: UnsplashSearchService, useClass: UnsplashSearchService },
  { provide: API_KEY, useValue: API_KEY },
  { provide: API_URL, useValue: API_URL },
];
