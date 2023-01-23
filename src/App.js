import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Crud from './Components/Crud/Crud';
import PostsProvider from './Components/PostsProvider/PostsProvider';

function App() {
  return (
    <div className="page">
      <PostsProvider>
        <Router>
          <Crud/>
        </Router>
      </PostsProvider>
    </div>
  );
}

export default App;
