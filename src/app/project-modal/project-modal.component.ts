import { Component } from '@angular/core';
import { Project } from '../_models/Project';
import { ProjectsService } from '../_services/projects.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css',
})

export class ProjectModalComponent {

  project = {} as Project;

  constructor(public bsModalRef: BsModalRef, public projectService: ProjectsService) {}

  public isArray(object: any): boolean {
    return Array.isArray(object);
  }

  public isString(object: any): boolean {
    return (typeof object === 'string');
  }

  public toStringArray(object: any): string[] {
    return object as string[];
  }
}

