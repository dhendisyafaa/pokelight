import './App.css';
import BottomBar from './components/BottomBar';
import ListPoke from './components/ListPoke';
import TopBar from './components/topbar/TopBar';


function App() {
  return (
    <div className=''>
      <TopBar />
        <ListPoke/>
      {/* <BottomBar /> */}
    </div>
  );
}

export default App;
