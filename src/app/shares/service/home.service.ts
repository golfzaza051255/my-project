import { Injectable, Input } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  // tslint:disable-next-line: variable-name
  private _$userType: BehaviorSubject<any> = new BehaviorSubject<any>({});
  constructor() { }

  /**
   * Getter $userType
   * @return {Observable<any> }
   */
  public get $userType(): Observable<any> {
    return this._$userType.asObservable();
  }

  /**
   * Setter $userType
   * @param {Observable<any> } value
   */
  public set $userType(value: Observable<any>) {
    value.subscribe(data => {
      this._$userType.next(data);
    });
  }

}

