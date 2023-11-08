import { Component, Input, Output, EventEmitter} from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
@Component({
  selector: 'app-face-recog',
  templateUrl: './face-recog.component.html',
  styleUrls: ['./face-recog.component.css']
})


export class FaceRecogComponent {
  constructor(public authService :AuthService){}



  @Input() click: string = '';

  box :any = {}
  appendBox : any = []
  FaceLocation = (data:any) => {
    const regions = data.outputs[0].data.regions;
    const image = <HTMLCanvasElement>document.getElementById('imageFace')
    const width = Number(image.width)
    const height = Number(image.height)          
      for(let region of regions) {
        const boundingBox = region.region_info.bounding_box;
          this.box = {
             topRow: boundingBox.top_row * height,
             leftCol: boundingBox.left_col * width,
             bottomRow :height - ( boundingBox.bottom_row * height),
             rightCol: width - (boundingBox.right_col * width)
            }  
             this.appendBox.push(this.box)
           };
           return this.appendBox
         }


  displayFaceBox = (box) => {
    
    box = this.appendBox
  }
}
