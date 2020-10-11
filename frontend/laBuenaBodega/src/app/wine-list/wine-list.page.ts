import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Wine } from '../models/wine';
import { WineService } from '../services/wine.service';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.page.html',
  styleUrls: ['./wine-list.page.scss'],
})
export class WineListPage implements OnInit {

  wine: Wine[];
  constructor(private wineService: WineService, private router: Router) { }

  ngOnInit() {
    this.getAllWines();
  }

  ionViewDidEnter(){
    this.getAllWines();
  }

  getAllWines(){
    this.wineService.getWines().subscribe( wine => {
      this.wine = wine;
    })
  }
   
  deleteWine(id: number){
    this.wineService.deleteWine(id).subscribe( () => {
      this.getAllWines();
    })
  }
  insertWine(){
    this.router.navigateByUrl("/add-wine");
  }
  updateWine(id: number){
    this.wineService.setCurrentWineId(id);
    this.router.navigateByUrl("/update-wine")
  }

}
