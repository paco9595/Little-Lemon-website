import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import routes from './routes';
import NotFound from './pages/notFound';

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Navbar />
        <Routes >
          {routes.map(({path, component},id)=> (
            <Route path={path} Component={component} key={id}  />
          ))}
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
