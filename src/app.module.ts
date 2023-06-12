import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageBrokerModule } from './message-broker/message-broker.module';
import { CourseModule } from './course/course.module';

@Module({
  imports: [MessageBrokerModule, CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
