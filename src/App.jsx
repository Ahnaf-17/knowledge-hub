
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);


  const handleMarkAsRead = time =>{
    // console.log('red' ,time)

    setReadingTime(readingTime+time)

  }

  const handlebookmark = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }




  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handlebookmark={handlebookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>

    </>
  )
}

export default App
