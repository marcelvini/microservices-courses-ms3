import { Module } from '@nestjs/common';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { course1Guard } from './guards/course1.guard';
import { JwtModule } from '@nestjs/jwt';
import { config } from 'dotenv';
config();
@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60m' },
    }),
  ],
  controllers: [CourseController],
  providers: [CourseService, course1Guard],
})
export class CourseModule {}
