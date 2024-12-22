import { Component } from '@angular/core';
import { Project } from '../_models/Project';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})

export class ProjectModalComponent {
  project = {} as Project;

  constructor(public bsModalRef: BsModalRef) {

  }

  isArray(object: any) {
    return Array.isArray(object);
  }

  isString(object: any) {
    return (typeof object === 'string');
  }

  toStringArray(object: any) {
    return object as string[];
  }
}

