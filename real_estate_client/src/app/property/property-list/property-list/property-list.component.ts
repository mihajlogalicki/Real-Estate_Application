import { Component } from '@angular/core';
import { take } from 'rxjs';
import { HousingService } from '../../../services/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  standalone: false,
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent {

  properties: IProperty[];

  constructor(private housingService: HousingService){}

  ngOnInit() : void {
    this.getProperties();
  }

  getProperties(){ 
    this.housingService.getAllProperties()
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
