import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { eRealEstateType } from '../property/property-list/property-list/eRealEstateType';
import { IPropertyBase } from '../model/IPropertyBase';
import { Property } from '../model/Property';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private httpClient: HttpClient) { }

  getAllProperties(propertyType: eRealEstateType) : Observable<IPropertyBase[]> { 
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

  addProperty(property : Property){
    localStorage.setItem('newProperty', JSON.stringify(property));
  }

  addPropertyId(){
    if(localStorage.getItem('Id')){
        const localStorageId = Number(localStorage.getItem('Id')) + 1; 
        localStorage.setItem('Id', String(localStorageId));
        return localStorageId
    } else {
      localStorage.setItem('Id', '101');
      return 101;
    }
  }
}
