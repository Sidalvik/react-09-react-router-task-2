import './App.css';
import Crud from './Components/Crud/Crud';
import UrlsProvider from './Components/UrlsProvider/UrlsProvider';

function App() {
  return (
    <div className="page">
      <UrlsProvider>
        <Crud/>
      </UrlsProvider>
    </div>
  );
}

export default App;
