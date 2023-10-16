import React from 'react';
import { createRoot } from 'react-dom/client';
import CourierProvider from "./CourierProvider";

var next = document.getElementById('__next') || document.createElement('div')
var child = document.createElement('div')
child.style.position = 'fixed'
child.style.top = 0
next.appendChild(child)
const root = createRoot(child); // createRoot(container!) if you use TypeScript
root.render(<CourierProvider />);