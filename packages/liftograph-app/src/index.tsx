import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
    return (
        <h1>I'm a react component!</h1>
    );
}

// Application root should never be null
// @ts-ignore
const applicationRoot = document.getElementById('application-root')!;
const root = createRoot(applicationRoot);
root.render(<App />);
