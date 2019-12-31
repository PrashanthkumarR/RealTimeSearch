import { Component } from '@angular/core';
import { SerachService } from '../../services/serach.service'
import { Subject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RealTimeSearch';
  results: Object;
  searchTerm$ = new Subject<string>();

  constructor(private searchService:SerachService){
    this.searchService.search(this.searchTerm$)
    .subscribe((res:any) =>{
      this.results = res.results
    });
  }
}
