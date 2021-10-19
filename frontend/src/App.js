import React from 'react'
import  Container  from 'react-bootstrap/Container'
import { Header, Footer } from './components'
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen'
const App = () => {
  return (
    <Router>
      <div className="body__custom">
      <Header/>
      <main className="py-3"> 
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
        </Container>
      </main>
      <Footer />
      </div>
    </Router>
  )
}

export default App

