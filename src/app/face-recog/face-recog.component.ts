import { Component, Input, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'app-face-recog',
  templateUrl: './face-recog.component.html',
  styleUrls: ['./face-recog.component.css']
})
export class FaceRecogComponent {
  @Input() click: string = '';
  box :any = {}
  initialBox : any = {}
  appendBox : any = {}
  FaceLocation = (data:any) => {
    
    const regions = data.outputs[0].data.regions;
    const image = <HTMLCanvasElement>document.getElementById('imageFace')
    const width = Number(image.width)
    const height = Number(image.height)          
      regions.forEach(region => {
        const boundingBox = region.region_info.bounding_box;
          return this.box = {
            topRow : boundingBox.top_row * height,
            leftCol : boundingBox.left_col * width,
            bottomRow : height - ( boundingBox.bottom_row * height),
            rightCol : width - (boundingBox.right_col * width)
             }
           });
         }
          

  displayFaceBox = (box: any) => {
    box = this.box
  }


  
}
