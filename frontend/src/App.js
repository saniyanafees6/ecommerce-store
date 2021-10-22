import React from 'react'
import  Container  from 'react-bootstrap/Container'
import { Header, Footer } from './components'
import { HomeScreen, CartScreen, ProductScreen } from './screens'
import { BrowserRouter as Router, Route } from 'react-router-dom'


const App = () => {
  return (
    <Router>
      <div className="body__custom">
      <Header/>
      <main className="py-3"> 
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen}  />
        </Container>
      </main>
      <Footer />
      </div>
    </Router>
  )
}

export default App

