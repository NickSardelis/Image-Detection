
import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { FaceRecogComponent } from '../face-recog/face-recog.component';
import { AuthService } from '../shared/services/auth.service';


@Component({
  selector: 'app-image-link',
  templateUrl: './image-link.component.html',
  styleUrls: ['./image-link.component.css']
})
export class ImageLinkComponent implements AfterViewInit {
    
    constructor(public authService :AuthService){}
    @ViewChild(FaceRecogComponent) face: any;
    
    
    @Input() input : string = ''
    click = ''
    FaceLocation : any
    displayBox: any
    
    ngAfterViewInit(): void {
        this.FaceLocation = this.face.FaceLocation
        this.displayBox = this.face.displayFaceBox
    }
    
    returnClarifaiRequest = (imageUrl:any) => {
        const PAT = 'cd76b825bc8f4b088d46d0097be5d62e';
        const USER_ID = '29v8wj7sprc6';       
        const APP_ID = 'my-first-application-2ezy2';   
        const IMAGE_URL = this.input;


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
        return requestOptions
    }


    onInputChange = (event: any) => {
        this.input == this.input
    }

    onButtonSubmit = () => {
        this.click = this.input
        
        fetch("https://api.clarifai.com/v2/models/" + 'face-detection' + "/outputs", this.returnClarifaiRequest(this.input))
            .then(response => response.json())
            .then(response => {
                this.displayBox(this.FaceLocation(response))
            })
            
            
        }
        
        
}
