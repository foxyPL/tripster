import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/core/authentication/authentication.service';
import { I18nService } from '@app/core/i18n.service';

@Component({
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

    constructor(private router: Router,
        private authenticationService: AuthenticationService,
        private i18nService: I18nService) { }

    ngOnInit() { }

    setLanguage(language: string) {
        this.i18nService.language = language;
      }

      logout() {
        this.authenticationService.logout()
          .subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
      }

      get currentLanguage(): string {
        return this.i18nService.language;
      }

      get languages(): string[] {
        return this.i18nService.supportedLanguages;
      }

      get username(): string | null {
        const credentials = this.authenticationService.credentials;
        return credentials ? credentials.username : null;
      }

      getTitle() {
        return 'Dashboard';
      }
}
