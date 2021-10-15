import { Component, OnInit, VERSION } from '@angular/core';
import { FelipeWalletService } from './felipe-wallet.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;
  constructor(public wallet: FelipeWalletService) { }

  ngOnInit() {
  }
}

