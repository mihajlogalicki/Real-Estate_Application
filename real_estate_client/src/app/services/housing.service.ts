import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IProperty } from '../property/property-list/IProperty.interface';
import { ePropertyType } from '../property/property-list/property-list/ePropertyType';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private httpClient: HttpClient) { }

  getAllProperties(propertyType: ePropertyType) : Observable<IProperty[]> { 
    return this.httpClient.get('data/properties.json').pipe(
      map(data => {
        const properties: IProperty[] = [];
        for(const item in data){
          if(data.hasOwnProperty(item) && data[item].Type === propertyType){
            properties.push(data[item]);
          }
        }
        return properties;
      })
    );
  }
}
