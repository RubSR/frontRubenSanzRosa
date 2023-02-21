import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Character} from "../../models/CharactersResponse";


@Component({
  selector: 'app-char-card',
  templateUrl: './char-card.component.html',
  styleUrls: ['./char-card.component.scss']
})
export class CharCardComponent implements OnInit {


  @Input() character?: Character;
  @Output() clickEvent = new EventEmitter<string>();
  @Output() removeEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitClick() {
    this.clickEvent.emit(this.character?.image);
  }


  emitRemove() {
    this.removeEvent.emit();
  }

  emitUpdate() {
    this.updateEvent.emit();
  }
}
