import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';
import { BenefitsApplicationListComponent } from './benefits-application-list/benefits-application-list.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

Amplify.configure(outputs);

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, BenefitsApplicationListComponent, AmplifyAuthenticatorModule, FormsModule],
})
export class AppComponent {
  title = 'amplify-angular-template';

  constructor(public authenticator: AuthenticatorService,   private router: Router) {
    Amplify.configure(outputs);
  }

  addNewApplication(){
    this.router.navigate(['/add-benefits-application']);
  }
}
