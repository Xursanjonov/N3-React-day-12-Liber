import React from "react";
import {Home} from '../Pages/Home/home' 


export const mainRouter = [
    {
        component: <Home />,
    },
    {
        component: <Аудиокитоб/>,
        path: "audiokitob",
    },
    {
        component: <Электронкитоблар />,
        path: "elektronkitoblar",
    },
    {
        component: <Босмакитоблар />,
        path: "bosmakitoblar",
    },
    {
        component: <Контакт />,
        path: "contact",
    },
    {
        component: <Бизхақимизда />,
        path: "about",
    },
];