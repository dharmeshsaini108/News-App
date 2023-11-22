import './App.css';

import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import { BrowserRouter as Router,Routes ,Route  } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const App=()=> {
  const pagesize=9
 
  const [progress, setProgress] = useState(0)
 
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        {/* here category is passing to the link of the news,this category decide the type of news */}
        <Routes>
        <Route path="/" element={<News setProgress={setProgress}key="general" pagesize={pagesize} country="in" category="" />} />
        <Route path="/business" element={<News setProgress={setProgress} key="business" pagesize={pagesize} country="in" category="business" />} />
        <Route path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pagesize={pagesize} country="in" category="entertainment" />} />
        <Route path="/general" element={<News setProgress={setProgress} key="general" pagesize={pagesize} country="in" category="general" />} />
        <Route path="/health" element={<News setProgress={setProgress} key="health" pagesize={pagesize} country="in" category="health" />} />
        <Route path="/science" element={<News setProgress={setProgress} key="science" pagesize={pagesize} country="in" category="science" />} />
        <Route path="/sports" element={<News setProgress={setProgress} key="sports" pagesize={pagesize} country="in" category="sports" />} />
        <Route path="/technology" element={<News setProgress={setProgress} key="technology" pagesize={pagesize} country="in" category="technology" />} />       
        </Routes>
        </Router>
      </div>
    )
  }



export default App;