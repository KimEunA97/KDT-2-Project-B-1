import { Injectable, Inject } from '@nestjs/common';
import * as fs from 'fs';
import axios from 'axios';

@Injectable()
export class AppService {
  constructor(@Inject('fs') private readonly fileSystem: typeof fs) {}

  readFile(filePath: string): Promise<string> {
    return this.fileSystem.promises.readFile(filePath, 'utf8');
  }

  async fetchAndSave(url: string, outputPath: string): Promise<void> {
    try {
      const response = await axios.get(url);
      await this.fileSystem.promises.writeFile(
        outputPath,
        JSON.stringify(response.data),
        'utf8',
      );
    } catch (err) {
      console.error(err);
    }
  }
}
