// import { useState } from 'react'
// import { Button, Flex } from 'antd';
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div style={{fontSize:'40px'}}>hello World</div>
//       <Button type="primary">Primary Button</Button>
     
//     </>
//   )
// }

// export default App


import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/slides/counterSlice'
import './App.css'
import styled from 'styled-components';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import { routes } from './routes/router';
import HomePage from './pages/HomePage/HomePage';
import { Layout } from 'antd';
import DefaultComponent from './components/DefaultComponent.jsx/DefaultComponent';


export  default function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const Button = styled.button`
  color: grey;
`;

  return (
    <div >
      <Router>
        <Routes>
            {routes.map((route)=>{
              const Page=route.page
              const Layout = route.isShowHeader ? DefaultComponent : Fragment
              return(
                <Route key={route.path} path={route.path} element={
                <Layout>
                <Page/>
                </Layout>
                } />
              )
            })}
        </Routes>
      </Router>
    
    </div>
  )
}