import { Injectable } from '@angular/core';
import { ICourse } from './../models/icourse';
import { Course } from './../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }
   public findAll(): string[] {
    const items: string[] = [];
    items.push('item 1');
    items.push('item AAA');
    items.push('item 3');
    return items;
  }
  public findAllCourses(): ICourse[] {
    const items: Course[] = [];
    items.push(new Course('1', 'course 1', 'description 1', 5, new Date()));
    items.push(new Course('2', 'course 2', 'description 2', 6, new Date()));
    items.push(new Course('3', 'course 3', 'description BBB', 7, new Date()));
    return items;
  }
}

