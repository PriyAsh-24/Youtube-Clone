import { Provider } from "react-redux";
import "./App.css"
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./Utils/store"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainComponent from "./components/MainComponent";
import WatchPage from "./components/WatchPage";
import SerachResultMenu from "./components/SerachResultMenu";

const appRouter=createBrowserRouter(
  [
    {
      path: "/",
      element: <Body/>,
      children:[
        {
          path: "/",
          element : <MainComponent/>
        },{
          path: "watch",
          element : <WatchPage/>
        }
      ]
    },
    {
      path: "/results",
      element : <SerachResultMenu/>
    }
  ]
)

function App() {
  return (
    <Provider store={store}>
    <div>
       <Head/>
       <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
