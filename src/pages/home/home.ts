import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoteService } from '../../app/note.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'})
export class HomePage {


  notes;
  constructor(
    public navCtrl: NavController,
    public noteService: NoteService,
    public db: AngularFireDatabase) {
    this.notes = this.noteService.fetchNotes();
    console.log (db);
  }

  onItemClick (n){
    //console.log ("onItemClick", n)
    this.navCtrl.push('DetailPage', {noteParam: n})
  }

  onAddClick (){
    this.navCtrl.push ('DetailPage');
  }


}
