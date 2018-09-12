import * as moment from 'moment';
export class Util {
  static timeFromNow = (date: string) => moment(date).fromNow();
}
