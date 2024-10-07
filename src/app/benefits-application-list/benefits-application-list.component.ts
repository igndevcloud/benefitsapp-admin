import { Component } from '@angular/core';
import { BenefitsApplication } from '../benefits-application';
import { BenefitsApplicationService } from '../benefits-application.service';
import{FormsModule} from '@angular/forms'

import { Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-benefits-application-list',
  templateUrl: './benefits-application-list.component.html',
  styleUrls: ['./benefits-application-list.component.css'],
})
export class BenefitsApplicationListComponent {

  benefitsApplications: BenefitsApplication[];
  EnteredID!:number;

  constructor(private benefitsApplicationService: BenefitsApplicationService,  private router: Router) {
    this.benefitsApplications=[];
   }

  ngOnInit(): void {
    this.getBenefitsApplications();
  }

  goToBenefitsApplication(){
    console.log(this.EnteredID);
    this.router.navigate(['details-of-benefits-application',this.EnteredID]);
  }

  getBenefitsApplications(){
    this.benefitsApplicationService.getBenefitsApplicationsList().subscribe(data => {this.benefitsApplications = data;});
  }

  updateBenefitsApplication(id: number){
    this.router.navigate(['updating-by-id', id]);
  }

  approveBenefitsApplication(id: number){

    if(confirm("Are you sure to approve BenefitsApplication ID: "+id)){
    const benefitsApp = this.getBenefitsApplicationById(id);
    if(benefitsApp) {
    this.benefitsApplicationService.approveBenefitsApplication(id, benefitsApp).subscribe( data => {
      console.log(data);
      this.getBenefitsApplications();
    })
    }}
  }

  declineBenefitsApplication(id: number){

    if(confirm("Are you sure to approve BenefitsApplication ID: "+id)){
    const benefitsApp = this.getBenefitsApplicationById(id);
    if(benefitsApp) {
    this.benefitsApplicationService.declineBenefitsApplication(id, benefitsApp).subscribe( data => {
      console.log(data);
      this.getBenefitsApplications();
    })
    }}
  }

  deleteBenefitsApplication(id: number){

    if(confirm("Are you sure to delete BenefitsApplication ID: "+id)){
    this.benefitsApplicationService.deleteBenefitsApplication(id).subscribe( data => {
      console.log(data);
      this.getBenefitsApplications();
    })}
  }

  detailsOfBenefitsApplication(id: number){
    this.router.navigate(['details-of-benefitsApplication', id]);
  }

  getBenefitsApplicationById(id: number): BenefitsApplication | undefined {
    return this.benefitsApplications.find(benfi => benfi.id === id);
  }

  IsAlreadyApprovedDeclined(status: string) {
    return status === 'Applied';
  }
}
