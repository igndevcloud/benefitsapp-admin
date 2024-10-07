import { Component } from '@angular/core';
import { BenefitsApplication } from '../benefits-application';
import { Router } from '@angular/router';
import { BenefitsApplicationService } from '../benefits-application.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-update-benefits-application',
  templateUrl: './update-benefits-application.component.html',
  styleUrls: ['./update-benefits-application.component.css']
})
export class UpdateBenefitsApplicationComponent {
  id: number;
  benefitsApplication: BenefitsApplication = new BenefitsApplication();

  constructor(private benefitsApplicationService: BenefitsApplicationService,
    private route: ActivatedRoute,
    private router: Router) {
      this.id=0
    }
    //loading the data into form
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.benefitsApplicationService.getBenefitsApplicationById(this.id).subscribe(data => {
      this.benefitsApplication = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.benefitsApplicationService.updateBenefitsApplication(this.id, this.benefitsApplication).subscribe( data =>{
      this.goToBenefitsApplicationList();
    }
    , error => console.log(error));
  }

  goToBenefitsApplicationList(){
    this.router.navigate(['/show-all-benefitsApplications']);
  }
}
