import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Sum from "./components/CustomHook/Sum";
import EventIntros from "./components/Events/EventIntros";
import FormIntro from "./components/FormHandling/FormIntro";
import JsxIntro from "./components/JSX/JsxIntro";
import PropsIntro from "./components/Props/PropsIntro";
import ModernRouting from "./components/Routing/ModernRouting";
import RouteOldWay from "./components/Routing/RouteOldWay";
import StateIntro from "./components/state/StateIntro";
import Mock from "./MockPractice/Mock";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Landing from "./Pages/Landing";



let App = ()=>{
  // write js here 
  const route = createBrowserRouter([
    {
      path:"/",
      element:<Login></Login>
    },
    {
      path:"/home",
      element:<Home></Home>,
      children:[
        {
          path:"/home",
          element:<Landing></Landing>
        },
        {
          path:"/home/about",
          element:<About></About>
        },
        {
          path:"/home/contact",
          element:<Contact></Contact>
        }
      ]
    },
    {
      path:"/*",
      element:<NotFound></NotFound>
    }

  ])

  return (
    <>

    {/* <div><p>App</p></div> */}
    {/* <JsxIntro></JsxIntro> */}
    {/* <StateIntro></StateIntro> */}
    {/* <EventIntros></EventIntros> */}
    {/* <FormIntro></FormIntro> */}
    {/* <PropsIntro></PropsIntro> */}
    {/* <Sum></Sum>          */}
    {/* <Mock></Mock> */}
    {/* <RouteOldWay></RouteOldWay> */}
    {/* <ModernRouting></ModernRouting> */}
 
 <RouterProvider router={route}></RouterProvider>
   

    </>
  )
}

export default App;