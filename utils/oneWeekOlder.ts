export class OneWeekOlder {
  static isOlderThanOneWeek(date: Date): boolean {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    return date < oneWeekAgo;
  }
}