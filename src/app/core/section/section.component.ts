import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../service/course.service';
import { Course } from '../../course';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  public items: string[];
  public courses: Course[];

  constructor(
    private courseService: CourseService,
  ) { }

  ngOnInit() {
   this.courses = this.courseService.findAllCourses();
   this.items = this.courseService.findAll();
  }

}
