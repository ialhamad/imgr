import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UploadService {
  constructor() {}

  uploadFile(data: any): boolean {
    try {
      localStorage.setItem("images", JSON.stringify(this.preparData(data)));
      return true;
    } catch (error) {
      alert(error);
    }
  }
  private preparData(data: any) {
    let imagesArr = this.imagesLocalStorage();
    imagesArr.push(data);
    this.checkSize(imagesArr);
    return imagesArr;
  }
  private checkSize(data: any) {
    if (new Blob(Object.values([JSON.stringify(data)])).size > 4194304) {
      throw "You have exeeded the allowed storge!";
    }
  }
  private imagesLocalStorage() {
    let imgStorage = localStorage.getItem("images");
    return imgStorage ? JSON.parse(imgStorage) : [];
  }
}
