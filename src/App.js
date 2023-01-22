import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './Pages/Home-pages/Home-page';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
