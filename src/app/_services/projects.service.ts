import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0, name: "Minesweeper", pictures: this.GetImages("minesweeper", 5), projectLink: "https://github.com/angel-prieto-pa/Minesweeper", summary: "Python recreation of the classic Minesweeper game.", description: "For this project, I recreated the classic Minesweeper game from scratch, analyzing its core features and mechanics to ensure accurate gameplay replication. Full game functionality was developed in Python, utilizing Tkinter to design an interactive user interface for an intuitive player experience.", tags: [Tag.PYTHON]},
    // {id: 1, name: "Sample Angular App", pictures: ["/assets/Image1.jpg","/assets/Image2.jpg","/assets/Image3.jpg"], projectLink: "//www.github.com", summary: "Fullstack web app developed using Angular and Node.JS", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.NODEJS]},
    // {id: 2, name: "Sample .Net App", pictures: ["/assets/Image1.jpg","/assets/Image2.jpg","/assets/Image3.jpg"], projectLink: "//www.github.com", summary: "Fullstack web app developed using React and ASP.NET", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.REACT ,Tag.CSHARP, Tag.ASPNET]},
    // {id: 3, name: "Web API Project", pictures: ["/assets/Image1.jpg","/assets/Image2.jpg","/assets/Image3.jpg"], projectLink: "//www.github.com", summary: "Web API Project that was developed for a class project.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.CSHARP, Tag.ASPNET]},
    // {id: 4, name: "Chrome Extension", pictures: ["/assets/Image1.jpg","/assets/Image2.jpg","/assets/Image3.jpg"], projectLink: "//www.github.com", summary: "Developed a chrome extension that tracks the prices of furniture.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.JAVASCRIPT]},
    // {id: 5, name: "Mobile App", pictures: ["/assets/Image1.jpg","/assets/Image2.jpg","/assets/Image3.jpg"], projectLink: "//www.github.com", summary: "Mobile app developed in java that tracks the departure and arrival of trains.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.JAVA]}
  ];

  constructor() { }

  private GetImages(projectName: string, count: number) : string[] {

    let dir = "/assets/img/" + projectName + "/";
    let imgUrls: string[] = [];

    for (let i = 0; i < count; i++) {
      imgUrls.push(dir + i.toString() + "-" + projectName + ".png");
    }

    return imgUrls;
  }

  GetProjects() {
    return this.projects
  }

  GetProjectsById(id: number) : Project {
    let project = this.projects.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError('There is no project that matches the id: ' + id);
    }

    return project;
  }

  GetProjectsByFilter(filterTags: Tag[]) {
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
