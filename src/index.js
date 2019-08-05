import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './router/router';
import * as serviceWorker from './serviceWorker';

const App = () => {
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
    return <Routes />
}
ReactDOM.render(<App id='Root' />, document.getElementById('⚛️'));

serviceWorker.register();
