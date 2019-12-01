import { AngularFireDatabase } from "angularfire2/database";
import { Injectable } from "@angular/core";

@Injectable()
export class NoteService{

    constructor (private db: AngularFireDatabase){

    }

    fetchNotes (){
        return this.db.list("/notes/");
    }

    notes = [
        {
          id: 1,
          modelo: 'Corsa',
          marca: 'Chevrolet',
          cor: 'Prata',
          placa: 'ABC-1234',
          date: '2019-11-14'
        },
        {
          id: 2,
          modelo: 'Uno',
          marca: 'Fiat',
          cor: 'Verde',
          placa: 'DEF-5678',
          date: '2018-11-14'
        },
        {
          id: 3,
          modelo: 'Gol',
          marca: 'Volkswagen',
          cor: 'Vermelho',
          placa: 'GHI-9012',
          date: '2018-10-14'
        }
      ]

      removeNote (note){
          this.db.object("/notes/" + note.$key).remove();
          /*let i = this.notes.indexOf(note);
          if (i > -1)
            this.notes.splice (i, 1);*/

      }

      addNote (note){
          //this.notes.push(note);
          this.db.list('/notes/').push({
              date: note.date,
              modelo: note.modelo,
              marca: note.marca,
              cor: note.cor,
              placa: note.placa
          })
      }

      editNote (note){
          this.db.object("/notes/" + note.$key).update({
              date: note.date,
              modelo: note.modelo,
              marca: note.marca,
              cor: note.cor,
              placa: note.placa
          })
      }
}
