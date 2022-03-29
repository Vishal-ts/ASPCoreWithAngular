import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from '../services/city.service';
import { City } from '../../models/city';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {

  cityForm: FormGroup;
  title = 'Create';
  cityId: number;
  errorMessage: any;
  cityList: City[];
  

  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
    private _CityService: CityService, private _router: Router) {
    if (this._avRoute.snapshot.params['id']) {
      this.cityId = this._avRoute.snapshot.params['id'];
    }

    this.cityForm = this._fb.group({
      cityId: 0,
      cityName: ['', [Validators.required]],
    })
  }

  ngOnInit() {
    this._CityService.getCities().subscribe(
      (data: City[]) => this.cityList = data
    );

    if (this.cityId > 0) {
      this.title = 'Edit';
      this._CityService.getCityById(this.cityId)
        .subscribe((response: Employee) => {
          this.cityForm.setValue(response);
        }, error => console.error(error));
    }
  }

  savecity() {

    if (!this.cityForm.valid) {
      return;
    }

    if (this.title === 'Create') {
      this._CityService.saveCity(this.cityForm.value)
        .subscribe(() => {
          this._router.navigate(['/fetch-city']);
        }, error => console.error(error));
    } else if (this.title === 'Edit') {
      this._CityService.updateCity(this.cityForm.value)
        .subscribe(() => {
          this._router.navigate(['/fetch-city']);
        }, error => console.error(error));
    }
  }

  cancel() {
    this._router.navigate(['/fetch-city']);
  }

  get cityName() { return this.cityForm.get('cityName'); }

}
