import React from 'react';
import  Container  from 'react-bootstrap/Container';
import { Header, Footer } from './compenents'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <div className="body__custom">
    <Header/>
     <main className="py-3"> 
       <Container>
         <HomeScreen />
       </Container>
     </main>
    <Footer />
    </div>
  )
}

export default App

