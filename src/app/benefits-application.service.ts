import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { BenefitsApplication } from './benefits-application';


@Injectable({
  providedIn: 'root'
})
export class BenefitsApplicationService {

  private baseURL = "http://benefitsappsvc-alb-493521080.us-east-2.elb.amazonaws.com:80/api/v1/benefitsApplications";

  constructor(private httpClient: HttpClient) { }

  getBenefitsApplicationsList(): Observable<BenefitsApplication[]>{
    return this.httpClient.get<BenefitsApplication[]>(`${this.baseURL}`);
  }

  addBenefitsApplication(benefitsApplication: BenefitsApplication): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, benefitsApplication);
  }

  getBenefitsApplicationById(id: number): Observable<BenefitsApplication>{
    return this.httpClient.get<BenefitsApplication>(`${this.baseURL}/${id}`);
  }


  updateBenefitsApplication(id: number, benefitsApplication: BenefitsApplication): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, benefitsApplication);
  }

  approveBenefitsApplication(id: number, benefitsApplication: BenefitsApplication): Observable<Object>{

    return this.httpClient.put(`${this.baseURL}/approve/${id}`, benefitsApplication);
  }

  declineBenefitsApplication(id: number, benefitsApplication: BenefitsApplication): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/decline/${id}`, benefitsApplication);
  }

  deleteBenefitsApplication(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
