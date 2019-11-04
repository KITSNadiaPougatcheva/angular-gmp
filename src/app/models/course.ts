import { ICourse } from './icourse';

export class Course implements ICourse {
  public id: string;
  public title: string;
  public description: string;
  public duration: number;
  public creationDate: Date;


  constructor(id: string, title: string, description: string, duration: number, creationDate: Date) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.duration = duration;
    this.creationDate = creationDate;
  }
}
