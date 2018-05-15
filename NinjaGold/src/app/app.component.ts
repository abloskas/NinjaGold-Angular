import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ninja Gold';
  game = [];
  gold = 0;
  log = [];


constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.getGameFromService();
  }

  getGameFromService(){
    let observable = this._httpService.getGame();
    observable.subscribe(data => {
      console.log("Got our game!", data)
      this.game = data['data'];
    });
  }

    onClick(str) {
      if (str == 'farm'){
        var num = Math.floor(Math.random() * 5) + 2;
        this.gold += num;
        this.log.push(`You have earned yourself ${num} gold!`);
        console.log('adding gold: ', this.gold);
      }
      if (str == 'cave'){
        var num =  Math.floor(Math.random() * 10) + 5;
        this.gold += num;
        this.log.push(`You have earned yourself ${num} gold!`);
        console.log('adding gold: ', this.gold);
      }
      if (str == 'house'){
        var num =  Math.floor(Math.random() * 15) + 7;
        this.gold += num;
        this.log.push(`You have earned yourself ${num} gold!`);
        console.log('adding gold: ', this.gold);
      }
      if (str == 'casino'){
        var num = Math.floor(Math.random() * 200) - 100;
        this.gold += num;
        this.log.push(`You have earned yourself ${num} gold!`);
        console.log('gold: ', this.gold);
      }
      
    }

}
