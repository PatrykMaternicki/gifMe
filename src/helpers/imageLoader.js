export default class imageLoader {
   static async load(src) {
    let loadedImage = new Image();
    loadedImage.src = src
  }
}