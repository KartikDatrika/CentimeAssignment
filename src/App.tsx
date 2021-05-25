import { Provider } from 'react-redux';
import './App.css';
import ExpenditureVisualization from './Components/ExpenditureVisualization/ExpenditureVisualization';
import configureStore from './State-Management/configureStore';

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
    <div className="App">
      <header className="text-center mb-5">
       <img  src={"https://centime.com/images/logo.png"} alt="logo" />
      </header>
        <ExpenditureVisualization/>
    </div>
    </Provider>
  );
}

export default App;
