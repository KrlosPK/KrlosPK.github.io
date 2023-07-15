import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { EducationComponent } from './components/education/education.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [
    ContactMeComponent,
    EducationComponent,
    FooterComponent,
    HomeComponent,
    ProjectCardComponent,
    ProjectsComponent,
    SkillsComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    ContactMeComponent,
    EducationComponent,
    FooterComponent,
    HomeComponent,
    ProjectsComponent,
    SkillsComponent,
  ],
})
export class PortfolioModule {}
