import { Route, Switch, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Layout from './components/layout/Layout';
import Posts from './components/posts/Posts';
import Albums from './components/albums/Albums';

function App() {

  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [images, setImages] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response  => {
      return response.json();
    })
    .then(data => {
      const slicedData = data.slice(1, 200);
      setPosts(slicedData);
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    });

    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response  => {
      return response.json();
    })
    .then(data => {
      const slicedData = data.slice(1, 200);
      setComments(slicedData);
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    });

    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response  => {
      return response.json();
    })
    .then(data => {
      const slicedData = data.slice(1, 5);
      setAlbums(slicedData);
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    });

    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response  => {
      return response.json();
    })
    .then(data => {
      const slicedData = data.slice(1, 100);
      setImages(slicedData);
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    });

  }, []);

  if (loading) return "Loading...";
  if (error) return "Error!";   
   return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/posts' />
        </Route>
        <Route path='/posts' exact>
          {/* {fetchPosts()} */}
          <Posts posts={posts} comments={comments}/>
        </Route>
        <Route path='/gallery'>
          {/* {fetchAlbums()} */}
          <Albums albums={albums} images={images}/>
        </Route>
      </Switch>
    </Layout>
  );
 }

export default App;