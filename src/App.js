import 'antd/dist/antd.css'
import {Routes, Route } from "react-router-dom";
import UserFind from './MianPage/UserFind';
import Menu from './MianPage/Menu';
import Results from './MianPage/Results';
import {resultContext} from './Context/ResultContext'
import { useState } from 'react';




function App() {

  const [results,setResults] = useState([]);
  return (
    <resultContext.Provider value={{results,setResults}}>
      <Routes>
            <Route exact path='/' element ={<Menu />} />
            <Route exact path='/userfind' element ={<UserFind />} />
            <Route exact path='/results' element ={<Results />} />
      </Routes>
    </resultContext.Provider>
  );
}

export default App;
