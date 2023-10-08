import { Component, Input, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'app-face-recog',
  templateUrl: './face-recog.component.html',
  styleUrls: ['./face-recog.component.css']
})
export class FaceRecogComponent {
  @Input() click: string = '';
  box : any = {}
  
  FaceLocation = (data:any) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = <HTMLCanvasElement>document.getElementById('imageFace')
    const width = Number(image.width);
    const height = Number(image.height);
    return{
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box: any) => {
    this.box = box
    console.log(box)
  }


  
}
