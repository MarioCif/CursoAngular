import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})

export class ListComponent { 



  @Input()
  public characterList: Character[] = [{
    id: 'dasdad',
    name: 'Trunks',
    power: 10
  }];

  @Output()
  onDeletedId: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id: string): void {
    this.onDeletedId.emit(id);
  }

}
