import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './Components/Header/Header';
import HomePage from './Pages/Home-pages/Home-page';
import GamePage from './Pages/GamePage/GamePage';
import { store } from './Redux';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route  exact  path="/app/:title" element={<GamePage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

 export default App;
