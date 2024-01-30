import './App.css';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Header from './Components/Header';
import LeftSidePanel from './Components/LeftSidePanel';
import RightSidePanel from './Components/RightSidePanel';

function App() {
  return (
    <div>
      <Header/>
      <LeftSidePanel/>
      <Content/>
      <RightSidePanel/>
      <Footer/>
    </div>
  );
}

export default App;
