import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { NavModel } from '../../model/nav.model';
import { NavRepository } from '@myworkspace/core/services/nav/navRepository';

@Injectable({
  providedIn: 'root'
})
export class NavService extends NavRepository<NavModel, string> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
}
