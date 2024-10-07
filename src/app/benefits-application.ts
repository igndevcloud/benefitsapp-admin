import { User } from './../../node_modules/@aws-sdk/client-iam/dist-types/models/models_0.d';
import { DatePipe } from '@angular/common';

export class BenefitsApplication {
    id!: number;
    fname!: string;
    lname!: string;;
    email!: string;;
    address!: string;
    city!:string;
    startDate!: string;
    approval: string;

  constructor() {

    this.email="@gmail.com";
    this.address="";
    this.city="";
    this.approval="Applied";
}}
