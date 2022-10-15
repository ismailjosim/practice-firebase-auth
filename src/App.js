import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Components/Utilities/Router';

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
