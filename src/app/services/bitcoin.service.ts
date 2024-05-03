import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject, catchError, retry, tap, throwError } from 'rxjs';

const RATE = 'rate'

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {
  user!: User

  constructor(private http: HttpClient) {
    // const rate = JSON.parse(localStorage.getItem(RATE) || 'null');
    // if (!rate) {
    //   localStorage.setItem(RATE, JSON.stringify(this.getRate(this.user.coins)))
    // }
  }

  private _rate$ = new BehaviorSubject<number>(0);
  public rate$ = this._rate$.asObservable()

  public getRate(coins: number) {
    return this.http.get<number>(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
      .pipe(
        tap(rate => this._rate$.next(rate)),
        retry(1),
        catchError(this._handleError)
      )
  }

  private _handleError(err: HttpErrorResponse) {
    console.log('err:', err)
    return throwError(() => err)
  }
}

