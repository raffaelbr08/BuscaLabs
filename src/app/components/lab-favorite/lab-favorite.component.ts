import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../pages/profile/profile.service';

@Component({
  selector: 'app-lab-favorite',
  templateUrl: './lab-favorite.component.html',
  styleUrls: ['./lab-favorite.component.scss']
})
export class LabFavoriteComponent implements OnInit {

  public userFavorites;


  constructor(public profileService: ProfileService) { }

  ngOnInit() {
  }

}
