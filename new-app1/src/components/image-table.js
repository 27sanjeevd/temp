import image1 from '../IMG_0034.jpg';
import image2 from '../IMG_0208.jpg';
import image3 from '../THORSEN_0469_JPG.jpeg';
import React, {Component} from 'react';

export default function Information() {
    return (
        <>
            <div class="description1">
                <div class="table">
                    <div class="column">
                        <img src={image1} alt="First pic of Sanjeev" style={{width: '100%'}}></img>
                    </div>
                    <div class="column">
                        <img src={image2} alt="Second pic of Sanjeev" style={{width: '100%'}}></img>
                    </div>
                    <div class="column">
                        <img src={image3} alt="Third pic of Sanjeev" style={{width: '100%'}}></img>
                    </div>
                </div>
                <a href="https://www.linkedin.com/in/sanjeevdevarajan/">LinkedIn</a>
                <br></br>
                <a href="https://github.com/27sanjeevd">Github</a>
            </div>
        </>
    );
}

