import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
  course1(): string {
    return 'Welcome to course 1 !';
  }
  course2(): string {
    return 'Welcome to course 2 !';
  }
}
