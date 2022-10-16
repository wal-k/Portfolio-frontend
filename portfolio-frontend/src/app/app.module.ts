import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LateralBarComponent } from './components/lateral-bar/lateral-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { HardskillsComponent } from './components/hardskills/hardskills.component';
import { SoftskillsComponent } from './components/softskills/softskills.component';
import { LateralBarMiniComponent } from './components/lateral-bar-mini/lateral-bar-mini.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    LateralBarComponent,
    HeaderComponent,
    BottomBarComponent,
    HardskillsComponent,
    SoftskillsComponent,
    LateralBarMiniComponent,
    EducacionComponent,
    ExperienciaComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
