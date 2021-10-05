import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FrameGateway } from './frame.gateway';
import { FrameServiceService } from './frame-service/frame-service.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, FrameGateway, FrameServiceService],
})
export class AppModule {}
