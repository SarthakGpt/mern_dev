// import './App.css'
import {Route,Routes} from 'react-router-dom'
import HomePage  from './component/HomePage';
import MyCard from './component/MyCard'
import MyCounter from './component/MyCounter'
import Languages from './component/Languages'
import Navbar from './component/Navbar';
import ErrorPage from './component/ErrorPage';
import About from './component/About';
import Product from './component/Product';
import Product1 from './component/Product1';
import Product2 from './component/Product2';
import Product3 from './component/Product3';
import Student from './component/Student';
function App() {
    
  return (
    <>
    <Navbar />
     <Routes>
     <Route path="/" element={<HomePage />}/>
     <Route path="/card" element={<MyCard />}/>
     <Route path="/Counter" element={<MyCounter />}/>
     <Route path="/lang" element={<Languages />}/>
     <Route path="/about" element={<About />}/>
     
     <Route path="/student" element={<Student />}>
     <Route path="/student/:name" element={<Student />}/>
     </Route>
     
     <Route path="/product" element={<Product />}>

     <Route path="product1" element={<Product1 />}/>
     <Route path="product2" element={<Product2 />}/>
     <Route path="product3" element={<Product3 />}/>

      </Route>
     
     <Route path="*" element={<ErrorPage />}/>
     </Routes>
    </>
  );
}

export default App
