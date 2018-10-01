import { Component, OnInit } from "@angular/core";
import { UploadService } from "../../services/upload.service";

@Component({
  selector: "app-uploader",
  templateUrl: "./uploader.component.html",
  styleUrls: ["./uploader.component.scss"]
})
export class UploaderComponent implements OnInit {
  image: string;
  constructor(private _service: UploadService) {}

  upload(event: any) {
    event.preventDefault();
    let form = event.target;
    let title = form.querySelector("#title").value;
    let desc = form.querySelector("#description").value;
    let date = form.querySelector("#date").value;

    if (!this.image) {
      alert("You need to select an image first.");
      return;
    }

    let _data = {
      image: this.image,
      title: title,
      description: desc,
      date: date
    };
    if (this._service.uploadFile(_data)) {
      let btn = form.querySelector("button");
      btn.classList.add("success");
      btn.innerHTML = "success!!";
      setTimeout(() => {
        let imageHolder = document.querySelector(".preview");
        imageHolder.classList.remove("js--show");
        btn.classList.remove("success");
        btn.innerHTML = "upload!";
        form.reset();
      }, 1000);
    }
  }

  previewImage(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = e => {
        let imageHolder = document.querySelector(".preview");

        imageHolder.classList.add("js--show");
        imageHolder
          .querySelector("img")
          .setAttribute("src", `${reader.result}`);
        this.image = `${reader.result}`;
      };

      reader.readAsDataURL(input.files[0]);
    }
  }

  ngOnInit() {}
}
