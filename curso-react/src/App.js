import './App.css';
import AnotherComponent from './components/AnotherComponent';
import Container from './components/Container';
import FirstComponent from './components/FirstComponent';
import Fragment from './components/Fragment';
import Hooks from './components/Hooks';
import Images from './components/Images';
import List from './components/List';
import RenderCond from './components/RenderCond'

function App() {
  return (
    <div className='App'>
      <h1>Hello World</h1>
      <FirstComponent />
      <AnotherComponent />
      <Images />
      <Hooks />
      <List />
      <RenderCond x = {10} y = {20}/>
      <Fragment/>
      <Container>
        <h1>Este é filho container!</h1>
      </Container>
    </div>
  );
}

export default App;
