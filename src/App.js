import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import notFound from './components/NotFound'

const App = () =>{
return ( 
    <div> 
     <Header />
    <div>
    <Switch>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route component={notFound} />
    </Switch>
    </div>
</div>
  
)
}
export default App
