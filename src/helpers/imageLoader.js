export default class imageLoader {
  static async load(src) {
    const loadedImage = new Image();
    loadedImage.src = src;
  }
}
