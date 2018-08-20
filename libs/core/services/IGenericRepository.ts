import { Observable } from 'rxjs';

export interface IGenericRepository<T, id> {
  save(t: T): Observable<T>;
  update(id: id, t: T): Observable<T>;
  findOne(id: id): Observable<{ articles: T }>;
  findAll(): Observable<{ articles: T[] }>;
  delete(id: id): Observable<any>;
}
