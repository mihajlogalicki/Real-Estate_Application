import { Component } from '@angular/core';
import { take } from 'rxjs';
import { HousingService } from '../../../services/housing.service';

@Component({
  selector: 'app-property-list',
  standalone: false,
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent {

  properties: Array<any>;

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
