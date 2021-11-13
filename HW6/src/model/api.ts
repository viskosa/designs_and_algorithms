export default class Api {
  static async __get(): Promise<any> {
    try {
      const res = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
      return await res.json();
    } catch (err) {
      console.log(err);
    }
  }
}
