import PageNote from "./pages/PageNot";
import Home from "./pages/Home";
export let routes = [
  { path: "/", element: <Home /> , title:"Home" },
  { path: "/*", element: <PageNote /> ,title:'404'},
];
