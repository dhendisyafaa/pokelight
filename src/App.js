import './App.css';
import BottomBar from './components/BottomBar';
import Pokemon from './components/Pokemon';
import TopBar from './components/topbar/TopBar';


function App() {
  return (
    <div className=''>
      <TopBar />
        <Pokemon/>
      {/* <BottomBar /> */}
    </div>
  );
}

export default App;
