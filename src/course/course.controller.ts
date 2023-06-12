import { Controller, Get, UseGuards } from '@nestjs/common';
import { CourseService } from './course.service';
import { course1Guard } from './guards/course1.guard';
import { course2Guard } from './guards/course2.guard';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}
  @UseGuards(course1Guard)
  @Get('123456')
  accesscourse1(): string {
    return this.courseService.course1();
  }
  @UseGuards(course2Guard)
  @Get('987654')
  accesscourse2(): string {
    return this.courseService.course2();
  }
}
