/**
 * UnsplashSearchResult is a data-structure that holds an individual
 * record from a Unsplash Search
 */
export class UnsplashSearchResult {
  id: string;
  description: string;
  imgThumbnailUrl: string;
  imgFullUrl: string;

  constructor(obj?: any) {
    this.id = (obj && obj.id) || null;
    this.description = (obj && obj.description) || null;
    this.imgThumbnailUrl = (obj && obj.imgThumbnailUrl) || null;
    this.imgFullUrl = (obj && obj.imgFullUrl) || null;
  }
}
