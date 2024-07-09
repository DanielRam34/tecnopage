import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; // Asegúrate de importar AppModule si no lo has hecho ya
import { environment } from './environments/environment';

import { AppComponent } from './app/app.component'; // Importa AppComponent aquí si es necesario

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
