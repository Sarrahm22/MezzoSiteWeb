import { Component } from '@angular/core';
declare var name: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ngOnInit(): void {
    new name();
  }
  title = 'site-mezzo';
}
