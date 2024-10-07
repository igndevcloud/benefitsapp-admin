import { Routes } from '@angular/router';
import { BenefitsApplicationListComponent } from './benefits-application-list/benefits-application-list.component';
import { AddBenefitsApplicationComponent } from './add-benefits-application/add-benefits-application.component';
import { UpdateBenefitsApplicationComponent } from './update-benefits-application/update-benefits-application.component';

export const routes: Routes = [
  {path:"show-all-benefits-applications",component: BenefitsApplicationListComponent},
  {path:"add-benefits-application", component: AddBenefitsApplicationComponent},
  {path:"update-benefits-application", component: UpdateBenefitsApplicationComponent},

  {path:'', redirectTo: "home", pathMatch:"full"},
];
