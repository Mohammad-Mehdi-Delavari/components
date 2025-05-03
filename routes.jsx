import PageNote from "./src/PageNot"
import Home from "./src/Home";
export let routes = [
    {path:"/",element:<Home/>},
    { path: "/*", element: <PageNote/> },
];
