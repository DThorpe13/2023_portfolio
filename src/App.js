import './App.css';
import Header from './components/nav/header';
import Banner from './components/banner/banner'
import Jumbo from './components/jumbo/jumbo';
import Columns from './components/column-cotainer/columns';
import Projects from './components/projects/projects';

function App() {
  return (
    <div className="App">
      <Banner />
      <Header />
      <Jumbo />
      <Columns />
      <Projects />
    </div>
  );
}

export default App;
