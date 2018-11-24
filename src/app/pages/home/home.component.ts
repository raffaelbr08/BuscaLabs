import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SearchService } from '../../components/main-header/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, public searchService: SearchService) { }

  ngOnInit() {
  }

  search(dadosForm: NgForm): void{

    this.searchService.dadosBusca = dadosForm.value;

    this.searchService.searchLab().subscribe(
      dados=>{
        this.searchService.labs = dados.json();
        this.router.navigate(['./result']);

        this.searchService.laboratoriosObservable.next(this.searchService.labs.object);
        this.searchService.resultObservable.next(this.searchService.labs.context);
        



      },error=>{

      }
    )

  }



}
