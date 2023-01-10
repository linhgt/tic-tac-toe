import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import MainMenu from '@containers/main-menu/';

const router = createBrowserRouter([
    {
        path:"/",
        element: <MainMenu />
    }
])

export default router;
