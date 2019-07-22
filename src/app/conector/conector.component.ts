import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
@Component({
  selector: 'app-conector',
  templateUrl: './conector.component.html',
  styleUrls: ['./conector.component.css']
})
export class ConectorComponent implements OnInit {
  private information:object;

  constructor(private request:RequestService) { }

  ngOnInit() {
    this.getQuotes();
  }
  getQuotes(){
    return this.request.getQuotes()
      .subscribe(data => {
        this.information=data;
        console.log(this.information);
      });
  }
}
