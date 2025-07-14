import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ePropertyType } from '../property/property-list/property-list/ePropertyType';
import { IPropertyBase } from '../model/IPropertyBase';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private httpClient: HttpClient) { }

  getAllProperties(propertyType: ePropertyType) : Observable<IPropertyBase[]> { 
    return this.httpClient.get('data/properties.json').pipe(
      map(data => {
        const properties: IPropertyBase[] = [];
        for(const item in data){
          if(data.hasOwnProperty(item) && data[item].RealEstateType === propertyType){
            properties.push(data[item]);
          }
        }
        return properties;
      })
    );
  }
}
