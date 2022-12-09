import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface Root {
  records: Record[]
}

export interface Record {
  id: string
  createdTime: string
  fields: Fields
}

export interface Fields {
  PrimaryGuest: string
  WillBeAttending?: boolean
  Comment?: string
  AdditionalGuest?: boolean
  AdditionalGuestName?: string
}

@Injectable({
  providedIn: 'root'
})

export class RspvService {

  public dataFromServer?: Root;

  constructor(private http: HttpClient) { }


}
