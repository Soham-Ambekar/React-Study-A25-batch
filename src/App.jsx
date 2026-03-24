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
// import NotFound from "./Pages/NotFound"; 
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Landing from "./Pages/Landing";
import ClassBasedComp from "./components/ClassBasesComp/ClassBasedCompIntro";
import UseEffectIntrp from "./components/UseEffect Hook/UseEffectIntrp";
import UseRefIntro from "./components/UseRef Hook/UseRefIntro";
import ContextApiIntro from "./components/ContextApi/ContextApiIntro";
import ContextTasksIntro from "./components/ContextTasks/ContextTasksIntro";
import UseReducerIntro from "./components/UseReducer/UseReducerIntro";
import UseMemoIntro from "./components/UseMemo/UseMemoIntro";
import Task2 from "./components/UseReducer/Tasks/Task2";
import Task1Intro from "../src/components/PracticeTasksRepo/Task1/Task1Intro"
import Task4 from "./components/PracticeTasksRepo/Task4/Task4";
import Task6 from "./components/PracticeTasksRepo/Task6/Task6";
import TodoReducer from "./components/PracticeTasksRepo/Task7/TodoReducer";
import Task8 from "./components/PracticeTasksRepo/Task8/Task8";
import Task9 from "./components/PracticeTasksRepo/Task9/Task9";
import Task10 from "./components/PracticeTasksRepo/Task10/Task10";
import Parent from "./components/PracticeTasksRepo/Task11/Parent";
import ProductList from "./components/PracticeTasksRepo/Task12/ProductList";
import Task14 from "./components/PracticeTasksRepo/Task14/Task14";
import Task15 from "./components/PracticeTasksRepo/Task15/Task15";
import Parent17 from "./components/PracticeTasksRepo/Task17/Parent17";
import Parent18 from "./components/PracticeTasksRepo/Task18/Parent18";



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
      // element:<NotFound></NotFound>
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
    {/* <ClassBasedComp></ClassBasedComp> */}
    {/* <UseEffectIntrp></UseEffectIntrp> */}
    {/* <UseRefIntro></UseRefIntro> */}
    {/* <ContextApiIntro></ContextApiIntro> */}
    {/* <ContextTasksIntro></ContextTasksIntro> */}
    {/* <UseReducerIntro></UseReducerIntro>/ */}
    {/* <Task1Intro></Task1Intro> */}
    
    {/* <Task2></Task2> */}
    {/* <Task4></Task4> */}
    {/* <Task6></Task6> */}
{/* <TodoReducer></TodoReducer> */}
{/* <Task8></Task8> */}
{/* <Task9></Task9> */}
{/* <Task10></Task10> */}
{/* <Parent></Parent>     */}
{/* <ProductList></ProductList> */}
{/* <Task14></Task14> */}
{/* <Task15></Task15> */}
{/* <Parent17></Parent17> */}
<Parent18></Parent18>
    {/* <UseMemoIntro></UseMemoIntro> */}
 {/* <RouterProvider router={route}></RouterProvider> */}
   

    </>
  )
}

export default App;