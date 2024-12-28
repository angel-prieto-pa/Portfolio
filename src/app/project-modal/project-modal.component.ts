import { Component } from '@angular/core';
import { Project } from '../_models/Project';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css',
})

export class ProjectModalComponent {
  project = {} as Project;

  constructor(public bsModalRef: BsModalRef) {

  }

  public createImageList(projectName: string, start: number, end: number): string[] {
  
      let dir = "/assets/img/" + projectName.toLowerCase() + "/";
      let imgUrls: string[] = [];
  
      for (let i = start; i <= end; i++) {
        imgUrls.push(dir + i.toString().padStart(2, "0") + "-" + projectName + ".png");
      }
  
      return imgUrls;
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

