import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { map , debounceTime , distinctUntilChanged , switchMap} from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerachService {

  baseUrl: string = 'https://api.cdnjs.com/libraries';
  queryUrl: string = '?search=';

  constructor(private http:HttpClient) { }

   search(terms: Observable<string>) {
    return terms.pipe(debounceTime(400)
      ,distinctUntilChanged()
      ,switchMap(term => this.searchEntries(term)));
  }

  searchEntries(term) {
    return this.http
        .get(this.baseUrl + this.queryUrl + term).pipe((res)=> res)
  }
}
