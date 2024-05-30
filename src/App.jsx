import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import JobsPage from './pages/JobsPage.jsx';
import NotFound from './pages/NotFound.jsx';
import JobPage, { jobLoader } from './pages/JobPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/jobs/:id" element={<JobPage />} loader={jobLoader} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
