import {
  Route,createBrowserRouter,createRoutesFromElements,RouterProvider 
} from 'react-router-dom';
import Home from './pages/Home.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import JobsPage from './pages/JobsPage.jsx';
import NotFound from './pages/NotFound.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
    <Route index element={<Home/>}/>
    <Route path='/jobs' element={<JobsPage/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Route>
  
)
)


const App = () => {
  return <RouterProvider router={router}/>
}


export default App