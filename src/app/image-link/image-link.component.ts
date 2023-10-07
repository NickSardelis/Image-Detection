
import { Component, Output, ViewChild, AfterViewInit } from '@angular/core';
import { FaceRecogComponent } from '../face-recog/face-recog.component';


@Component({
  selector: 'app-image-link',
  templateUrl: './image-link.component.html',
  styleUrls: ['./image-link.component.css']
})
export class ImageLinkComponent implements AfterViewInit {
    
    
    @ViewChild(FaceRecogComponent) face: any;
    
    
    input : string = ''
    click : string = ''
    FaceLocation : any
    displayBox: any
    
    ngAfterViewInit(): void {
        this.FaceLocation = this.face.FaceLocation
        this.displayBox = this.face.displayBox
    }

    onButtonSubmit = () => {
        this.click = this.input
  
    
    
        const PAT = 'cd76b825bc8f4b088d46d0097be5d62e';
        const USER_ID = '29v8wj7sprc6';       
        const APP_ID = 'my-first-application-2ezy2';
        const MODEL_ID = 'face-detection';
        const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';    
        const IMAGE_URL = this.click;


        const raw = JSON.stringify({
            "user_app_id": {
                "user_id": USER_ID,
                "app_id": APP_ID
            },
            "inputs": [
                {
                    "data": {
                        "image": {
                            "url": IMAGE_URL
                        }
                    }
                }
            ]
        });

        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Key ' + PAT
            },
            body: raw
        };



        fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
            .then(response => this.displayBox(this.FaceLocation((response.json()))))
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        }
}
