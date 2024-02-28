import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Document } from './entities/document.entity';

@Injectable()
export class DocumentsService {
  constructor(@InjectRepository(Document) private readonly documentsRepository: Repository<Document>) {}

  async findAll(): Promise<Document[]> {
    return this.documentsRepository.find();
  }

  async findOne(id: number): Promise<Document> {
    return this.documentsRepository.findOneBy({ id });
  }

  async create(document: Document): Promise<Document> {
    return this.documentsRepository.save(document);
  }

  async update(id: number, document: Partial<Document>): Promise<Document> {
    await this.documentsRepository.update(id, document);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.documentsRepository.delete(id);
  }
}