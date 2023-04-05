import { Suspense, useEffect, useState } from 'react';
import React,{ useDispatch, useSelector } from 'react-redux';
import { postFetch } from 'store/slices/postSlice';
import { userActions } from 'store/slices/userSlice';
import {InfiniteScroll} from 'react/infinite-scoll-component';
import './App.css';
import { useAstionCretor } from 'helpers/astionCreator';

function Exm() {
useEffect(() => {
  console.log('RENDER EXM')
}, [])
return (
  <h1>hello</h1>
)
}
const AboutPagesChunk = React.lazy(() => import('./pages/AboutPage'))

function App() {
  const dispatch = useDispatch()
  const post = useSelector(state => state.post.post) 
  const getPostsCreator = useAstionCretor(postFetch)

  const [value, setValue] = useState('')
  const [value2, setValue2] = useState('')
  const [ more, setMore ] = useState(true)


useEffect(() =>{
    console.log('RENDER APP')
  }, [] )
 
  if (post.lendth > 20) {
    setMore(false)
    return
  }

  function infiniteGetPosts() {
    const params = {
      _limit: 10,
      page: 1
    }
    getPostsCreator(postFetch(params))
  }

  return (
      <Suspense fallback={<h1>LOADING...</h1>}>
    <div className="App">
      <Exm/>
        <div className='page_wrapper'>
          <input value={value} onChange={(e) => setValue(e.target.value)}/>
          <input value={value2} onChange={(e) => setValue2(e.target.value)}/>
        </div>
        <button onClick={infiniteGetPosts}>get posts</button>
        <InfiniteScroll
          dataLength={post.lendth}
          next={infiniteGetPosts}
          hasMore={more}
          >
        {post?.map((item) =>
        <div key={item.id} className='itemCard'> 
          {item.title}
        </div>
      )}
      </InfiniteScroll>
      <AboutPagesChunk/>   
    </div>
    </Suspense>
  );
}


export default App;
