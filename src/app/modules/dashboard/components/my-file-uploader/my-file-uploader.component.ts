import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-file-uploader',
  templateUrl: './my-file-uploader.component.html',
  styleUrls: ['./my-file-uploader.component.scss']
})
export class MyFileUploaderComponent implements OnInit {

  url: any; //Angular 11, for stricter type
  msg = "";

  selectFile(event: any) { //Angular 11, for stricter type
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select an image';
      return;
    }

    const mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.msg = "Only images are supported";
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.msg = "";
      this.url = reader.result;

      console.log(this.url)
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
