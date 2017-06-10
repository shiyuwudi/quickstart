import {Component, OnInit} from '@angular/core';
import {Logger} from "../../service/logger.service";

@Component({
    selector: 'logger',
    templateUrl: "./logger.component.html",
    styleUrls: ["./logger.css"],
})
export class LoggerComponent implements OnInit {
  private msgArr: Array<{msg: string, date: Date}> = [];
  constructor(private logger: Logger) {}
    public ngOnInit() {
      this.msgArr = this.logger.getMessageRecord();
    }
}
