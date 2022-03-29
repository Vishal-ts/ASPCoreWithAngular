import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { City } from 'src/models/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  myAppUrl = '';

  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl + 'api/City/';
  }

  // getCityList() {
  //   return this._http.get(this.myAppUrl + 'GetCityList')
  //     .pipe(map(
  //       response => {
  //         return response;
  //       }));
  // }

  getCities() {
    return this._http.get(this.myAppUrl + 'Index').pipe(map(
      response => {
        return response;
      }));
  }

  getCityById(id: number) {
    return this._http.get(this.myAppUrl + 'Details/' + id)
      .pipe(map(
        response => {
          return response;
        }));
  }

  saveCity(city: City) {
    return this._http.post(this.myAppUrl + 'Create', city)
      .pipe(map(
        response => {
          return response;
        }));
  }

  updateCity(city: City) {
    return this._http.put(this.myAppUrl + 'Edit', city)
      .pipe(map(
        response => {
          return response;
        }));
  }

  deleteCity(id: number) {
    return this._http.delete(this.myAppUrl + 'Delete/' + id)
      .pipe(map(
        response => {
          return response;
        }));
  }
}
