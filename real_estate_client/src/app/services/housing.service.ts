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

  getProperty(id: number) : Observable<IPropertyBase>{
    return this.getAllProperties().pipe(
      map(properties => properties.find(prop => prop.Id == id))
    );
  }

  getAllProperties(realEstateType?: eRealEstateType) : Observable<IPropertyBase[]> { 
    return this.httpClient.get('data/properties.json').pipe(
      map(data => {
        const properties: IPropertyBase[] = [];

        for(const item in data){
          if(!!realEstateType){
            if(data.hasOwnProperty(item) && data[item].RealEstateType === realEstateType){
              properties.push(data[item]);
            }
          } else {
            properties.push(data[item]);
          }
        }

        const localProperties = JSON.parse(localStorage.getItem('newProperty'));
        for(const property in localProperties){
          if(!!realEstateType){
            if(localProperties.hasOwnProperty(property) && localProperties[property].RealEstateType === realEstateType){
              properties.push(localProperties[property]);
            }
          } else {
            properties.push(localProperties[property]);
          }
        }

        return properties;
      })
    );
  }

  addProperty(property : Property){
    let props = [property];
    if(localStorage.getItem('newProperty')){
      const newProperty = JSON.parse(localStorage.getItem('newProperty'));
      props = [property, ...newProperty];
    }

    localStorage.setItem('newProperty', JSON.stringify(props));     
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
