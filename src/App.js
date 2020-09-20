import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavigationBar from './Components/Shared/NavigationBar'
import Footer from './Components/Shared/Footer'
import ListToDo from './Components/Pages/ToDo/ListToDo'
import CreateToDo from './Components/Pages/ToDo/CreateToDo'
import EditToDo from './Components/Pages/ToDo/EditToDo'

function App () {
  return (
    <div>
      <NavigationBar/>

      <Router>
        <Switch>
          <Route exact path="/tarefas" component={ ListToDo }/>
          <Route exact path="/tarefas/novo" component={ CreateToDo }/>
          <Route exact path="/tarefas/:id/editar" component={ EditToDo }/>
        </Switch>
      </Router>

      <Footer/>
    </div>
  )
}

export default App
