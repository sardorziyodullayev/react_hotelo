import './App.css';
import Header from './components/Header/Header'
import Hotel_section from './components/Hotel_section/Hotel_section'
import Img from './components/Img_section/Img_section'
import Facilities from './components/Facilities/Facilities'

function App() {
  return (
    <div>
      <Header/>
      <Hotel_section/>
      <Img/>
      <Facilities/>
    </div>
  );
}

export default App;
