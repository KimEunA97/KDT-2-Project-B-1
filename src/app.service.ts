import { Injectable, Inject } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class AppService {
  constructor(@Inject('fs') private readonly fileSystem: typeof fs) {}

  // 사용 예시
  readFile(filePath: string): Promise<string> {
    return this.fileSystem.promises.readFile(filePath, 'utf8');
  }
}
