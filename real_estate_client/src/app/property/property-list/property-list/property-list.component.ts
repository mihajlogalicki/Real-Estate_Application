import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  standalone: false,
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent {

  properties: Array<any> = [
      {
        "Id": 1,
        "Name": "Sunset Ridge Villa",
        "Type": "Villa",
        "Price": 700000
      },
      {
        "Id": 2,
        "Name": "The Summit House",
        "Type": "House",
        "Price": 90000
      },
      {
        "Id": 3,
        "Name": "Ocean Breeze Villa",
        "Type": "Villa",
        "Price": 450000
      },
      {
        "Id": 4,
        "Name": "Bluebell Bungalow",
        "Type": "Bungalow",
        "Price": 50000
      },
      {
        "Id": 5,
        "Name": "Pinehill Residence",
        "Type": "Residence",
        "Price": 900000
      },
      {
        "Id": 6,
        "Name": "Silverleaf Residence",
        "Type": "House",
        "Price": 250000
      },
      {
        "Id": 7,
        "Name": "Stonegate House",
        "Type": "House",
        "Price": 100000
      },
      {
        "Id": 8,
        "Name": "Villa Toscana",
        "Type": "Villa",
        "Price": 150000
      },
      {
        "Id": 8,
        "Name": "The Lavender Lane House",
        "Type": "House",
        "Price": 60000
      }
  ];
}
