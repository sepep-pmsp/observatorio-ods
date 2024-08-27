import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  private jsonUrl = 'assets/json/data.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(this.jsonUrl).pipe(
      catchError(error => {
        console.error('Erro ao buscar dados', error);
        return throwError(error);
      })
    );
  }
}
