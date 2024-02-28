import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentsModule } from './documents/documents.module';
import { Document } from './documents/entities/document.entity';

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'postgres-a',
        port: 5432,
        username: 'user',
        password: 'psw',
        database: 'db',
        entities: [Document],
        synchronize: true,
      }),
      DocumentsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
