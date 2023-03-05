import './App.css';
import Episods from './pages/Episods/Episods';
import Header from './pages/Header/Header';
import Podcast from './pages/Podcast/Podcast';

function App() {
  return (
    <div data-theme='light' className='h-auto'>
      <Header></Header>
      <Podcast></Podcast>
      <Episods></Episods>
    </div>
  );
}

export default App;
