import { Component } from '@angular/core';
import { CityService } from '../services/city.service';
import { City } from '../../models/city';

@Component({
  selector: 'app-fetch-city',
  templateUrl: './fetch-city.component.html',
})
export class FetchCityComponent {

  public cityList: City[];

  constructor(private _cityService: CityService) {
    this.getCities();
  }

  getCities() {
    this._cityService.getCities().subscribe(
      (data: City[]) => this.cityList = data
    );
  }

  delete(cityId) {
    const ans = confirm('Do you want to delete employee with Id: ' + cityId);
    if (ans) {
      this._cityService.deleteCity(cityId).subscribe(() => {
        this.getCities();
      }, error => console.error(error));
    }
  }
}
