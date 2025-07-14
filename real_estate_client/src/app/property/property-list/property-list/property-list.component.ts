import { Component } from '@angular/core';
import { take } from 'rxjs';
import { HousingService } from '../../../services/housing.service';
import { ActivatedRoute } from '@angular/router';
import { ePropertyType } from './ePropertyType';
import { IPropertyBase } from '../../../model/IPropertyBase';

@Component({
  selector: 'app-property-list',
  standalone: false,
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent {

  propertyType: ePropertyType = ePropertyType.Sell;
  properties: IPropertyBase[];

  constructor(private housingService: HousingService, private activatedRoute: ActivatedRoute){}

  ngOnInit() : void {
    this.getProperties();
  }

  getProperties(){ 
    if(!!this.activatedRoute.snapshot.url[0]) {
       this.propertyType = ePropertyType.Rent;
    }

    this.housingService.getAllProperties(this.propertyType)
        .pipe(take(1))
        .subscribe({
         next: data => {
            this.properties = data;
        },
         error: () => {
            console.log(`Server error occured`);
        }
    })
  }
  
}
