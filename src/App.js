import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PostList from './PostList';
import NewPost from './NewPost';
import ViewPost from './ViewPost';
import EditPost from './EditPost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PostList/>}/>
        <Route exact path="/posts/new" element={<NewPost/>}/>
        <Route exact path="/posts/:id" element={<ViewPost/>}/>
        <Route exact path="/posts/:id/edit" element={<EditPost/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
