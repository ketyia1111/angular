import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import Routes from './app/app.routes';

bootstrapApplication(AppComponent,
  {
    providers: [
      provideRouter(Routes)
    ]
  }
).catch(err => console.error(err));
