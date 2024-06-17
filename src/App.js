import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Form from './pages/Form';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/form",
      element: <Form />,
    },
  ]);
  return <div className="App">
    <RouterProvider router={appRouter} />
  </div>;
}

export default App;
