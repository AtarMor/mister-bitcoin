import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User | null = {
    name: 'Ochoa Hyde',
    coins: 100,
    moves: [],
    _id: 'u101'
  }

  private _loggedInUser$ = new BehaviorSubject(this.user)
  public loggedInUser$ = this._loggedInUser$.asObservable()

  getLoggedInUser() {
    console.log('this._loggedInUser$.value',this._loggedInUser$.value)
    return this._loggedInUser$.value
  }

  setLoggedInUser(name: string) {
    const user = this._getEmptyUser()
    user.name = name
    return this._loggedInUser$.next(user)
  }

  logout() {
    return this._loggedInUser$.next(null)
  }

  private _getEmptyUser(): User {
    return {
      name: '',
      coins: 100,
      moves: [],
      _id: _makeId()
    }

    function _makeId(length = 5): string {
      var txt = ''
      var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
      }
      return txt
    }
  }
}
