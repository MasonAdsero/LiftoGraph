import React from 'react';
import { createRoot } from 'react-dom/client';
import styles from './index.less';

function App() {
    return (
        <h1 className={styles.liftographRoot}>I'm a react component!</h1>
    );
}

// Application root should never be null
const applicationRoot = document.getElementById('application-root')!;
const root = createRoot(applicationRoot);
root.render(<App />);
