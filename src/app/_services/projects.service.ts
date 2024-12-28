import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import * as projectData from '../../../public/assets/files/projects.json';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  // data: any = projectData;  

  title = 'JSONDataExample';
  products: any = (projectData as any).default;

  constructor() {}
  
  projects: Project[] = [
    { 
      id: 0,
      info: projectData.minesweeper,
      tags: [Tag.PYTHON]
    },
  ];

  public createImageList(projectName: string, start: number, end: number): string[] {
    // Returns an image list based on the image file naming convention "##-project_name.png".
  
    let dir = "/assets/img/" + projectName + "/";
    let imgUrls: string[] = [];

    for (let i = start; i <= end; i++) {
      imgUrls.push(dir + i.toString().padStart(2, "0") + "-" + projectName + ".png");
    }

    return imgUrls;
  }

  public getProjects(): Project[] {
    return this.projects
  }

  public getProjectById(id: number): Project {
    let project = this.projects.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError('There is no project that matches the id: ' + id);
    }

    return project;
  }

  public getProjectsByFilter(filterTags: Tag[]): Project[] {
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project) {
      let foundAll = true;

      filterTags.forEach(function (filterTag) {
        if (project.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      })

      if (foundAll) {
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }
}
