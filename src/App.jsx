import {Header} from './components/Header/Header';

import './App.scss'
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { Menu } from './components/Header/Menu/Menu';

function App() {
  return (
    <div className="app">
      <Header/>
      <Menu/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
