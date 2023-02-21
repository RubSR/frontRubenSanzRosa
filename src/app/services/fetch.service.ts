import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Character, CharactersResponse} from "../models/CharactersResponse";

@Injectable({
  providedIn: 'root'
})
export class FetchService {


   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',

    })
  };
  constructor(private http: HttpClient ) {}


  //Get
  public fetchCharacters(url: string): Observable<CharactersResponse>{

    return this.http.get<CharactersResponse>(url,this.httpOptions)
  }

  //Post
  public postCharacters(character: Character): Observable<Character>{

    return this.http.post<Character>(environment.apiURL,character,this.httpOptions)
  }

  //Delete
  deleteCharacter(id: number): Observable<unknown> {
    const url = environment.apiURL + id;
    return this.http.delete(url, this.httpOptions);

  }

  //Put
  updateCharacter(char: Character): Observable<Character> {
    return this.http.put<Character>(environment.apiURL, char, this.httpOptions);

  }
}
