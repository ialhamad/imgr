import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-images",
  templateUrl: "./images.component.html",
  styleUrls: ["./images.component.scss"]
})
export class ImagesComponent implements OnInit {
  images = localStorage.getItem("images")
    ? JSON.parse(localStorage.getItem("images"))
    : [];

  constructor() {}

  deleteImage(event) {
    let imageHolder = event.target.closest(".image");
    let imageIndex = imageHolder.querySelector(".index").value;
    imageHolder.remove();
    this.images.splice(imageIndex, 1);
    this.updateImages();
  }
  private updateImages() {
    localStorage.setItem("images", JSON.stringify(this.images));
  }
  ngOnInit() {}
}
