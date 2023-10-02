import ReactDOM from 'react-dom/client'
import React from 'react';
import './style/App.css'
import { RouterProvider } from 'react-router-dom';
import {router} from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
)