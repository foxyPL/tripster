import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { AppInsights } from 'applicationinsights-js';

@Injectable()
export class AppLoadService {

    initializeApp(): Promise<any> {
        return new Promise((resolve, reject) => {
              console.log(`initializeApp:: inside promise`);

              AppInsights.downloadAndSetup({ instrumentationKey: environment.asInstrumentationKey });
              setTimeout(() => {
                console.log(`initializeApp:: inside setTimeout`);
                // doing something

                resolve();
              }, 3000);
            });
      }

      getSettings(): Promise<any> {

        return new Promise((resolve, reject) => {
            console.log(`getSettings:: before http.get call`);

            setTimeout(() => {
              console.log(`getSettings:: inside setTimeout`);
              // doing something

              resolve();
            }, 3000);
          });

      }
}
