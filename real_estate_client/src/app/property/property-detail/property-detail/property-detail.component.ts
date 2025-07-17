import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { HousingService } from '../../../services/housing.service';
import { Property } from '../../../model/Property';

@Component({
  selector: 'app-property-detail',
  standalone: false,
  templateUrl: './property-detail.component.html',
  styleUrl: './property-detail.component.css'
})
export class PropertyDetailComponent {

  public propertyId: number;
  public property = new Property();

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private housingService: HousingService){}

  ngOnInit() {
    this.propertyId = Number(this.activatedRoute.snapshot.params['id']);

    this.activatedRoute.params
    .subscribe(
      (params) => {
        this.propertyId = Number(params['id']);
        
        this.housingService.getProperty(this.propertyId)
        .subscribe({
          next: (property: Property) => {
            this.property = property;
          },
          error: () => {
            console.log('Property does not exists');
        }
        })
      }
    )
  }

  nextPage(){
    this.propertyId++;
    this.router.navigate(['property-detail', this.propertyId]);
  }
}
