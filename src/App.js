import './App.css';
import Crud from './Components/Crud/Crud';
import PostsProvider from './Components/PostsProvider/PostsProvider';

function App() {
  return (
    <div className="page">
      <PostsProvider>
        <Crud/>
      </PostsProvider>
    </div>
  );
}

export default App;
