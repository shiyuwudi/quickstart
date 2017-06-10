/**
 * Created by Administrator on 2017/6/10.
 */
 export class Logger {
  private _messages: Array<{msg: string, date: Date}> = [];
   public log(msg: string, date: Date) {
     console.log("hero log service:", msg);
     this._messages.push({msg, date});
   }
  public error(msg: string, date: Date) {
    console.error("hero erro service:", msg);
    this._messages.push({msg, date});
  }
  public getMessageRecord() {
     return this._messages;
  }
}
