import React from 'react';
import { createRoot } from 'react-dom/client';
import { LiftographRoot } from './liftograph-root';

// Application root should never be null
const applicationRoot = document.getElementById('application-root')!;
const root = createRoot(applicationRoot);
root.render(<LiftographRoot />);
