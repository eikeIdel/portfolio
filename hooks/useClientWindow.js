import { useState, useEffect } from 'react';

//SSR causes Error when using "window" . This hook updated the state only on the client side.
export default function useClientWindow() {
    const [clientWindow, setClientWindow] = useState({ width: undefined, height: undefined });

    useEffect(() => {

        function handleResize() {
            setClientWindow({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        //add event listener
        window.addEventListener('resize', handleResize);
        //call handleResize so the state get updated with initial window size
        handleResize();

        return () => {
            window.removeEventListener('resise', handleResize);
        };
    }, []);
    // console.log(clientWindow);
    return clientWindow;
}

