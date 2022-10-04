import './App.css';
import AnotherComponent from './components/AnotherComponent';
import FirstComponent from './components/FirstComponent';
import Hooks from './components/Hooks';
import Images from './components/Images';
import List from './components/List';

function App() {
  return (
    <div className='App'>
      <h1>Hello World</h1>
      <FirstComponent />
      <AnotherComponent />
      <Images />
      <Hooks/>
      <List/>
    </div>
  );
}

export default App;
