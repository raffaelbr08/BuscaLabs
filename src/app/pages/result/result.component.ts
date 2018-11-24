import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../components/main-header/search.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  public encontrados: boolean;


  public infoLabs;

  constructor(public searchService: SearchService) { }

  ngOnInit() {

    this.searchService.resultObservable.subscribe( laboratorios => {
      this.infoLabs = laboratorios;
      this.encontrados = true;
    });

  }

}
