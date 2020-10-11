import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Wine } from '../models/wine';
import { WineService } from '../services/wine.service';

@Component({
  selector: 'app-update-wine',
  templateUrl: './update-wine.page.html',
  styleUrls: ['./update-wine.page.scss'],
})
export class UpdateWinePage implements OnInit {
  wineForm: FormGroup;
  wine: Wine;
  constructor(public fb: FormBuilder, private wineService: WineService, private router: Router) 
  {
  ;
    this.wineService.getWineId(this.wineService.getCurrentWineId()).subscribe( wine2 => {
      this.wine = wine2;
    this.wineForm = this.fb.group(
      {
        name: [this.wine.name],
        type: [this.wine.type],
        description: [this.wine.description],
        price: [this.wine.price],
        quantity: [this.wine.quantity]
      }
    )
    });
    
    this.wineForm = this.fb.group(
      {
        name: [""],
        type: [""],
        description: [""],
        price: [""],
        quantity: [""]
      }
    )
    
   }

  ngOnInit() {}
  


  
  onFormSubmit() {
    if (!this.wineForm.valid) {
      return false;
    } else {
      let updateWine = {
        id: this.wineService.getCurrentWineId(),
        name: this.wineForm.value.name,
        type: this.wineForm.value.type,
        description: this.wineForm.value.description,
        price: this.wineForm.value.price,
        quantity: this.wineForm.value.quantity
      }
      this.wineService.updateWine(updateWine)
        .subscribe((res) => {
          this.router.navigateByUrl("/wine-list");
        });
    }
  }
}
