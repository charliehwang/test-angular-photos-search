import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  // The NgModule for using @angular/common/http
  HttpClientModule,

  // the class constants
  HttpClient,
} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { unsplashSearchInjectables } from './unsplash-search/unsplash-search.injectables';
import { UnsplashSearchComponent } from './unsplash-search/unsplash-search.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultComponent } from './search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent,
    UnsplashSearchComponent,
    SearchBoxComponent,
    SearchResultComponent,
    // MoreHttpRequestsComponent,
    // YouTubeSearchComponent,
    // SearchResultComponent,
    // SearchBoxComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [unsplashSearchInjectables],
  bootstrap: [AppComponent],
})
export class AppModule {}
