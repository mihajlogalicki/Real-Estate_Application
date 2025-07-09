import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  standalone: false,
  templateUrl: './add-property.component.html',
  styleUrl: './add-property.component.css'
})
export class AddPropertyComponent {

  constructor(private router: Router){}

  back(){
    this.router.navigate(['/']);
  }
}
