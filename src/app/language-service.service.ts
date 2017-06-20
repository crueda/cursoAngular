import { Injectable, LOCALE_ID } from '@angular/core';

@Injectable()
export class LanguageService {

  constructor() { }

  getLanguage(): string {
    return 'es';
  }
}
