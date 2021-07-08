import React, { useState } from 'react';
import Webcam from 'react-webcam';

const WebcamComponent = () => <Webcam />;

const videoConstraint = {
    width: 220,
    height: 200,
    facingModel: 'USer'
}
export const WebcamCapture = () => {
    const [image, setImage] = useState('');
    const webcamRef = React.useRef(null);
    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        console.log(imageSrc);
        setImage(imageSrc)
    }, [webcamRef]);

    return (
        <div className='webcam-container'>
            <div className="webcam-img">

                {image == '' ?
                    <Webcam audio={false}
                        height={200}
                        ref={webcamRef}
                        screenshotFormat='image/jpeg'
                        width={220}
                        videoConstraints={videoConstraint}
                    >
                        <button onClick={e => { e.preventDefault(); capture() }}>Capture</button>
                    </Webcam>
                    : <img src={image} />}
            </div>
            <div>
                {image != '' ?
                    <button onClick={(e) => {
                        e.preventDefault();
                        setImage('')
                    }}
                        className="webcam-btn">
                        Retake Image</button> :
                    <button onClick={(e) => {
                        e.preventDefault();
                        capture();
                    }}
                        className="webcam-btn">Capture</button>
                }
            </div>
        </div>
    )
}