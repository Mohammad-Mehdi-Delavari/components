import { useLocation, useRoutes } from "react-router-dom";
import { routes } from "./routes";
import "./App.css";
import SideBar from "./components/SideBar";

function App() {
  let router = useRoutes(routes);
  let location = useLocation();

  return (
    <>
    <main className="flex p-2">
      {location.pathname == "/" || <div className="w-3/24 p-2"> <SideBar/> </div> }
      <div className="grow p-2">
      {router}
      </div>
    </main>
    </>
  );
}

export default App;
