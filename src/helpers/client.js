export default class Client {
  static async getBy(value) {
    const response = await fetch(`http://localhost:8080/images?search=${value}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
    return response;
  }
}
