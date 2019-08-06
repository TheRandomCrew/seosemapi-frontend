import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './router/router';
import * as serviceWorker from './serviceWorker';

const App = () => {
    /** Add preloader animation when launching the ap p*/
    React.useEffect(() => {
        const preloader = document.getElementById('ipl-progress-indicator')
        if (preloader) {
            // fade out
            preloader.classList.add('available')
            setTimeout(() => {
                // remove from DOM
                preloader.outerHTML = ''
            }, 2000)
        }
    })
    /** Submit app after the animation */
    return <Routes />
}

/** Render Method for App*/ 
ReactDOM.render(<App id='Root' />, document.getElementById('⚛️'));
serviceWorker.register();
