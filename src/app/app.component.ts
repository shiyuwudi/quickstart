import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}!!!??</h1>
    <div>日期: {{ dateObj | date }}</div>
    <div>日期，时间，上下午: {{ dateObj | date: 'medium' }}</div>
    <div>时间 + 上下午: {{ dateObj | date: 'shortTime' }}</div>
    <div>时间管道: {{ dateObj | date: 'hh:mm:ss' }}</div>

  `,
})
export class AppComponent implements OnInit {
  name: string = 'Angular';
  dateObj: number = Date.now();

  public ngOnInit() {
    const cb = () => {
      this.dateObj = Date.now();
    };
    setInterval(cb, 1000);
  }
}
