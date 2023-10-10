import { Component, Input, Output, EventEmitter} from '@angular/core';
import { connect } from 'rxjs';
@Component({
  selector: 'app-face-recog',
  templateUrl: './face-recog.component.html',
  styleUrls: ['./face-recog.component.css']
})
export class FaceRecogComponent {
  @Input() click: string = '';
  box : any = {}
  initialBox : any = {}
  appendBox : any = {}
  FaceLocation = (data:any) => {
    
    const regions = data.outputs[0].data.regions;
    const image = <HTMLCanvasElement>document.getElementById('imageFace')
    const width = Number(image.width)
    const height = Number(image.height)          
    
                regions.forEach(region => {
                  

                  const boundingBox = region.region_info.bounding_box;
                  let topRow1 = boundingBox.top_row * height;
                  let leftCol1 = boundingBox.left_col * width ;
                  let bottomRow1 = height - ( boundingBox.bottom_row * height);
                  let rightCol1 = width - (boundingBox.right_col * width);
                  
                  this.initialBox = {
                    topRow : topRow1,
                    leftCol : leftCol1,
                    bottomRow : bottomRow1,
                    rightCol : rightCol1  
                  }
                  this.appendBox = Object.assign(this.appendBox, this.initialBox)

                });
                
              return this.box = this.appendBox
            }
          

  displayFaceBox = (box: any) => {
    console.log(box)
  }


  
}
