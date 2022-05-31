import React from 'react'
import {BrowserRouter,Routes,Route, NavLink } from 'react-router-dom'
import { sidebar } from '../utils/sidebar'
import { Container ,Wrapper} from './style'
import Sidebar from '../component/Sidebar'
import Buyurtmalar from '../component/Buyurtmalar'
import '../'
function Index() {
    return (
        <Container className='box' >
        <BrowserRouter>
        <Sidebar/>
       <Wrapper>
       <Routes>
           {sidebar.map(({id,pathname,component:Element})=>(
                 <Route key={id} path={pathname} element={<Element/>}/>
               
           ))}
           <Route path='?*' element={<h1>404 not found</h1>}/>
           <Route path='/' element={<Buyurtmalar/>}/>
        </Routes>
        </Wrapper>
        </BrowserRouter>
        </Container>
    )
}

export default Index
