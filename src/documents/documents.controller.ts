import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Document } from './entities/document.entity';
import { DocumentsService } from './documents.service';

@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Get()
  findAll(): Promise<Document[]> {
    return this.documentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Document> {
    return this.documentsService.findOne(+id);
  }

  @Post()
  create(@Body() document: Document): Promise<Document> {
    return this.documentsService.create(document);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() document: Document): Promise<Document> {
    return this.documentsService.update(+id, document);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.documentsService.remove(+id);
  }
}