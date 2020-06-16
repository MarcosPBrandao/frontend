import React from 'react';

import Header from './components/Header';

function App() {
    return (
      <>  
       <Header title="Homepage">
           <ul>
               <li>
                   Homepage
               </li>
               <li>
                   Details
               </li>
           </ul>
       </Header>
       <Header title="Projects">
       <ul>
               <li>
                   SubHomepage
               </li>
               <li>
                   Topics
               </li>
               <li>
                   SubTopics
               </li>
           </ul>
       </Header>
      </>
    )
}

export default App;