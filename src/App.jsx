//react-router-dom
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

//styles
import './App.css';

//Layouts
import RootLayout from './layouts/RootLayout';
import ContactLayout from './layouts/ContactLayout';
import ArticlesLayout from './layouts/ArticlesLayout';
//pages
import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/help/Faq';
import Form from './pages/help/Form';
import Articles from './pages/Articles';
import PageNotFound from './pages/PagesNotFound';
import ArticlesDetail from './pages/ArticlesDetail';

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactLayout />}>
          <Route path="faq" element={<Faq />} />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="articles" element={<ArticlesLayout />}>
          <Route index element={<Articles />} />
          <Route path=":id" element={<ArticlesDetail />} />
        </Route>

        {/* Page not found */}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
