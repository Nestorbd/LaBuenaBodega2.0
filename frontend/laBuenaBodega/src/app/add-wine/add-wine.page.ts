import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { WineService } from '../services/wine.service';

@Component({
  selector: 'app-add-wine',
  templateUrl: './add-wine.page.html',
  styleUrls: ['./add-wine.page.scss'],
})
export class AddWinePage implements OnInit {
wineForm: FormGroup;
  constructor(public fb: FormBuilder, private wineService: WineService, private router: Router) {
    this.wineForm = this.fb.group(
      {
        name: [''],
        type: [''],
        description: [''],
        price: [],
        quantity: []
      }
    )
   }

  ngOnInit() {
  }

  onFormSubmit() {
    if (!this.wineForm.valid) {
      return false;
    } else {
      let wine = {
        id: null,
        name: this.wineForm.value.name,
        type: this.wineForm.value.type,
        description: this.wineForm.value.description,
        price: this.wineForm.value.price,
        quantity: this.wineForm.value.quantity
      }
      this.wineService.addWine(wine)
        .subscribe((res) => {
          this.router.navigateByUrl("/wine-list");
        });
    }
  }
}
