import { Component, OnInit } from '@angular/core';
import {FetchService} from "../../services/fetch.service";
import {MatDialog} from "@angular/material/dialog";
import {ImageDialogComponent} from "../../dialogs/image-dialog/image-dialog.component";
import {RemoveDialogComponent} from "../../dialogs/remove-dialog/remove-dialog.component";
import {UpdateCreateDialogComponent} from "../../dialogs/update-create-dialog/update-create-dialog.component";
import {environment} from "../../../environments/environment";
import {PageEvent} from "@angular/material/paginator";
import {Character} from "../../models/CharactersResponse";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  characters: Character[] = [];
  totalChars = 0;
  nextUrl: string =  environment.apiURL;
  previostUrl: string | null = '' ;

  constructor(private fetchService: FetchService, private dialogRef: MatDialog) { }

  ngOnInit(): void {
    this.getCharacters(this.nextUrl);
  }

  private getCharacters(url: string){
    this.fetchService.fetchCharacters(url).subscribe({
      next: value => {
        this.characters = value.results;
        this.totalChars = value.info.count;
        this.nextUrl = value.info.next;
        this.previostUrl = value.info.prev;
        },
      error: err => {
        console.log(err)
      },
      complete: () => {

      }
    });

  }

  openImageDialog($event: string) {
    this.dialogRef.open(ImageDialogComponent,{
      data:$event
    });
  }


  openRemoveDialog(name: string, i: number) {
    const dialog =  this.dialogRef.open(RemoveDialogComponent,{
      data: name
    })
    dialog.afterClosed().subscribe( result =>{
      if(result){
        this.characters.splice(i, 1);
      }
    })
  }

  openUpdateDialog(char: Character, i: number) {
    const dialog =  this.dialogRef.open(UpdateCreateDialogComponent,{
      data: char,
      maxWidth: '600px',
      hasBackdrop: false,
    })
    dialog.afterClosed().subscribe( result  => {
      if(result){
        this.characters[i] = result;
      }

    });
  }


  openCreateDialog() {
    const dialog =  this.dialogRef.open(UpdateCreateDialogComponent,{
      maxWidth: '600px',
      hasBackdrop: false
    })
    dialog.afterClosed().subscribe( result => {
      if(result){
        this.characters.unshift(result)
      }


    });
  }

  printar($event: PageEvent) {
    if($event.previousPageIndex! > $event.pageIndex){
      this.getCharacters(this.previostUrl!)
    }else{
      this.getCharacters(this.nextUrl);
    }
  }
}
