import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  standalone: false,
  templateUrl: './add-property.component.html',
  styleUrl: './add-property.component.css'
})
export class AddPropertyComponent {

  @ViewChild('Form') groupedFormControl : NgForm;
  constructor(private router: Router){}

  Save(){
    console.log(this.groupedFormControl);
  }
}
