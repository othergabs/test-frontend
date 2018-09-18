import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse,  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';


@Injectable()
export class FinancialSimulatorService {

  private url: string = environment.base_url;

  constructor(private http: HttpClient) { }

  doSimulation(value, months) {
    const body = { expr: `${value} * (((1 + 0.00517) ^ ${months} - 1) / 0.00517)`};
    this.http.post(`${this.url}`, body).map(data => {
      return data;
    });
  }
}


