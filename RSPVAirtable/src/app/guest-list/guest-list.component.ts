import { RspvService } from './../rspv/rspv.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent implements OnInit {


    public dataFromServer?: Root;

    constructor(private http: HttpClient)
{

}
  ngOnInit(): void {
    this.http.get<Root>("https://api.airtable.com/v0/appPBBDWbnh6dxtyc/Guests",
    {
      headers: new HttpHeaders({Authorization: "Bearer pataileXpEmRT174E.32b4c99cb46c128b7c3954d4ad1d506b630253b8ada5b067e7b103185d8daea8"})
    }).subscribe(data => this.dataFromServer = data)
  }
}
