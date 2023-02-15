import {Route, Switch} from 'react-router-dom'
import Products from './components/Products'
import Home from './components/Home'
import Services from './components/Services'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/services" component={Services} />
    <Route exact path="/products" component={Products} />
    <Route exact path="/incubation" component={Home} />
    <Route path="/career" component={Home} />
    <Route path="/blog" component={Home} />
    <Route path="/about" component={Home} />
    <Route path="/contact-us" component={Home} />
  </Switch>
)

export default App
