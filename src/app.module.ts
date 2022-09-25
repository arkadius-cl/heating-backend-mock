import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatusService } from './status/status.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, StatusService],
})
export class AppModule {}
