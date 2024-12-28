import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{

  projects = {} as Project[];

  isCollapsed: boolean = true;
  
  filtering: boolean = false;

  typescript: boolean = false;
  javascript: boolean = false;
  python: boolean = false;
  csharp: boolean = false;
  java: boolean = false;
  angular: boolean = false;
  nodejs: boolean = false;
  aspnet: boolean = false;
  react: boolean = false;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Portfolio')
  }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  public filter() {
    let filterTags: Tag[] = [];

    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if (this.javascript) {
      filterTags.push(Tag.JAVASCRIPT);
    }
    if (this.python) {
      filterTags.push(Tag.PYTHON);
    }
    if (this.csharp) {
      filterTags.push(Tag.CSHARP);
    }
    if (this.java) {
      filterTags.push(Tag.JAVA);
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if (this.nodejs) {
      filterTags.push(Tag.NODEJS);
    }
    if (this.aspnet) {
      filterTags.push(Tag.ASPNET);
    }
    if (this.react) {
      filterTags.push(Tag.REACT);
    }

    if (filterTags.length > 0) {
      this.filtering = true;
    } else {
      this.filtering = false;
    }

    this.projects = this.projectService.getProjectsByFilter(filterTags);
  }

  public resetFilters() {
    this.typescript = false;
    this.javascript= false;
    this.python = false;
    this.csharp = false;
    this.java = false;
    this.angular = false;
    this.nodejs = false;
    this.aspnet = false;
    this.react = false;

    this.filtering = false;

    this.projects = this.projectService.getProjects();
  }
}
