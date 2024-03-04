import React, {useEffect} from 'react';

import Route from './routers';

function App() {
    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);
    return (
        <div className="App">
            <Route />
        </div>
    );
}

export default App;
