import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './Components/Header/Header';
import HomePage from './Pages/Home-pages/Home-page';
import { store } from './Redux';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
