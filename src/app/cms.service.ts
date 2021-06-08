import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CmsService {

  public resourceUrl = `https://dh.plus.ac.at/services/rest/api/rest`;

  constructor(private httpClient: HttpClient) { }

  getPage(path: string) {
    path = path.replace('%2F', '/');
    const uriSplitted = path.split('/');
    const id = uriSplitted[uriSplitted.length - 1];
    const url = `${this.resourceUrl}/${id}`;

    const headers = new HttpHeaders().set('Accept', 'application/octet-stream');

    return this.httpClient.get(url, { headers, responseType: 'text' }).pipe(
      map(
        data => data
      )
    );
  }
}
