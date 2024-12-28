import { Tag } from "./Tag";

export interface Project {
    id: number;
    name: string;
    summary: string;
    description: string;
    projectLink: string;
    featureHeadings: string[];
    featureDescriptions: (string | string[])[];
    highlightHeadings: string[];
    highlightDescriptions: string[];
    pictures: string[];
    info: any;
    tags: Tag[];
}