import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { BlocksComponent } from './resume/blocks/blocks.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    AboutComponent,
    ResumeComponent,
    BlocksComponent,
    ServicesComponent,
    SkillsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AboutComponent,
    ResumeComponent,
   ServicesComponent,
   SkillsComponent,
   ContactComponent
  ]
})
export class SectionModule { }
