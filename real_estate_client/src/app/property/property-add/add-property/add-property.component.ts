import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IPropertyBase } from '../../../model/IPropertyBase';

@Component({
  selector: 'app-add-property',
  standalone: false,
  templateUrl: './add-property.component.html',
  styleUrl: './add-property.component.css'
})
export class AddPropertyComponent {

  @ViewChild('Form') groupedFormControl : NgForm;
  public currentTab : number = 0;
  public propertyTypes : Array<string> = ['House', 'Villa', 'Apartment'];
  public furnishTypes : Array<string> = ['Fully', 'Semi', 'Unfurnished'];

  public propertyView : IPropertyBase = 
  {
      Id: null,
      Name: '',
      Price: null,
      PropertyType: null,
      FurnishingType: null,
      RealEstateType: null,
      TotalArea: null,
      City: null,
      RTM: null
  };

  constructor(private router: Router){}

  ngOnInit(){}

  Save(){
    console.log(this.groupedFormControl);
  }
}
