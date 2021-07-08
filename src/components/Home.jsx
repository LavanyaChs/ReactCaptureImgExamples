import React, { useState } from 'react';
import { WebcamCapture } from './WebcamCapture'
import {HideScroll} from 'react-hide-on-scroll'
import './Home.css';
const Home = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const submitForm = (e) => {
        e.preventDefault();
        alert("Form Submitetd");
    }
    return (
        <div className='home-container'>
            <div className='container'>
                <div className='text'>
                    <h1>Fill the form</h1>

                    <form className='form'>
                    <HideScroll variant="down">
                            <div>
                                <WebcamCapture />
                            </div>
                        </HideScroll>


                        <input type='email' placeholder='email' value={email} onChange={e => setEmail(e.target.value)} />
                        <input type='text' placeholder='name' value={name} onChange={e => setName(e.target.value)} />
                        <button type='submit' id='login-button' onClick={e => submitForm(e)}>Submit</button>
                    </form>
                    <div id="hideCamera"></div>
                </div>
            </div>

        </div>
    );
}

export default Home;
