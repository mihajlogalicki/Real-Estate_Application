import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IPropertyBase } from '../../../model/IPropertyBase';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-property',
  standalone: false,
  templateUrl: './add-property.component.html',
  styleUrl: './add-property.component.css'
})
/* TODO: 
    1) Add getters for all form groups and form controls
    2) Display validation errors for each control (improve using <p-message>)
    3) Disable clicking on tabs navigation, if entire tab is valid highlight with green backround,
    all non-filled tabs should have light green color
*/
export class AddPropertyComponent {

  // @ViewChild('Form') groupedFormControl : NgForm; -> Old, used for Template Driven Form
  public currentTab : number = 0;
  public propertyTypes : Array<string> = ['House', 'Villa', 'Apartment'];
  public furnishingTypes : Array<string> = ['Fully', 'Semi', 'Unfurnished'];
  public mainEntrances : Array<string> = ['East', 'West', 'South', 'North'];
  public addPropertyForm : FormGroup;
  public isNextButtonClicked : boolean;

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

  constructor(private router: Router, private formBuilder: FormBuilder, private messageService: MessageService){}

  ngOnInit(){
    this.initAddPropertyForm();
  }

  initAddPropertyForm(){
    this.addPropertyForm = this.formBuilder.group({
      BasicInfo: this.formBuilder.group({
        RealEstateType: [1, Validators.required],
        PropertyType: [null, Validators.required],
        furnishingType: [null, Validators.required],
        Name: [null, Validators.required],
        City: [null, Validators.required],
      }),

      PricingInfo: this.formBuilder.group({
        Price: [null, Validators.required],
        TotalArea: [null, Validators.required],
        Security:  [null],
        Maintenance: [null],
        CarpetArea: [null]
      }),

      Address: this.formBuilder.group({
        FloorNo: [null],
        TotalFloor: [null],
        Address:  [null, Validators.required],
        Address2:  [null],
        Landmark: [null]
      }),

      OtherDetails: this.formBuilder.group({
        RTM: [null, Validators.required],
        AOP: [null],
        Possession: [null],
        Gated: [null],
        MainEntrance:  [null],
        Description: [null, Validators.required],
      }),

      Photos: this.formBuilder.group({
      }),
    })
  }

  Save(){
    if(this.addPropertyForm.valid) {
        this.messageService.add({ severity: 'success', summary: 'Property saved successfully!', life: 4000});
    } else {
        this.messageService.add({ severity: 'error', summary: 'Property errors during saving!', life: 4000});
    }
  }

  //getters for Basic Info tab Form Group
  get BasicInfoFormGroup(){
    return this.addPropertyForm.controls['BasicInfo'] as FormGroup;
  }
  get RealEstateType(){
    return this.BasicInfoFormGroup.controls['RealEstateType'] as FormControl;
  }
  get PropertyType(){
    return this.BasicInfoFormGroup.controls['PropertyType'] as FormControl;
  }
  get Name(){
    return this.BasicInfoFormGroup.controls['Name'] as FormControl;
  }

  //getters for Pricing Info tab Form Group
  get PricingInfoFormGroup(){
    return this.addPropertyForm.controls['PricingInfo'] as FormGroup;
  }
  get Price(){
    return this.PricingInfoFormGroup.controls['Price'] as FormControl;
  }





}
