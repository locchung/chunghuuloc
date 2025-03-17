import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { HelperService } from './helper/helper.service';

@Module({
  imports: [NewsModule],
  controllers: [AppController],
  providers: [AppService, HelperService],
})
export class AppModule {}
