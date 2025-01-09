
import './App.css';
import Home from './components/Home/index';
import SideMenu from './components/SideMenu/SideMenu';

function App() {
  return (
    <div className="App d-flex">
      <SideMenu/>
      <div className='vertical-divider'></div>
      <Home/>
      <div className='vertical-divider'></div>
    </div>
  );
}

export default App;