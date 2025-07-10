import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-property-detail',
  standalone: false,
  templateUrl: './property-detail.component.html',
  styleUrl: './property-detail.component.css'
})
export class PropertyDetailComponent {

  public propertyId: number;

  constructor(private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit() {
    this.propertyId = Number(this.activatedRoute.snapshot.params['id']);

    this.activatedRoute.params
    .pipe(take(1))
    .subscribe(
      (params) => {
        this.propertyId = Number(params['id']);
      }
    )
  }

  nextPage(){
    this.propertyId++;
    this.router.navigate(['property-detail', this.propertyId]);
  }
}
