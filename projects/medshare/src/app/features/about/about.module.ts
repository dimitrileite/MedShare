import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { AboutComponent } from './about/about.component';
import { AboutRoutingModule } from './about-routing.module';
import { SvgCallCenterComponent } from './about/components/svg-callcenter.component';
import { SvgHospitalComponent } from './about/components/svg-hospital.component';
import { SvgFamilyComponent } from './about/components/svg-family.component';
import { SvgDoctorComponent } from './about/components/svg-doctor.component';

@NgModule({
  declarations: [AboutComponent,
    SvgDoctorComponent,
    SvgFamilyComponent,
    SvgHospitalComponent,    
    SvgCallCenterComponent
  ],
  imports: [CommonModule, SharedModule, AboutRoutingModule]
})
export class AboutModule {}
