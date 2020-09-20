import React, { Component } from 'react'

import { Button, Card, Container, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faSave } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'

import ToDoService from '../../../Services/ToDoService'

class EditToDo extends Component {

  constructor(props) {
    super(props)

    this.state = {
      id: null,
      description: null,
      complete: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.back = this.back.bind(this)
  }

  componentDidMount() {
    ToDoService.show(this.props.match.params.id).then(toDoItem => this.setState(toDoItem.data))
  }

  handleChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({ [name]: value })
  }

  handleSubmit(event) {
    ToDoService.update(this.state).then(() => Swal.fire('Tarefa atualizada com sucesso!', '', 'success'))
    event.preventDefault()
  }

  back() {
    this.props.history.push('/tarefas')
  }

  render() {
    return (
      <Container className="pt-3">
        <Card>
          <Card.Header>
            <Button variant="light" onClick={this.back}>
              <FontAwesomeIcon icon={ faArrowLeft }/>
            </Button>

            <span className="ml-1">Editar Tareda</span>
          </Card.Header>

          <Card.Body>
            <Card.Text>
              <Form onSubmit={ this.handleSubmit }>
                <Form.Group controlId="description">
                  <Form.Label>Descrição:</Form.Label>
                  <Form.Control type="text" placeholder="Descrição da Tarefa" value={ this.state.description }
                                name="description" onChange={ this.handleChange } required/>
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Tarefa Completa" value={ this.state.complete } name="complete"
                              onChange={ this.handleChange } checked={ this.state.complete }/>
                </Form.Group>

                <Button variant="primary" type="submit" className="float-right">
                  <FontAwesomeIcon icon={ faSave }/> Salvar
                </Button>
              </Form>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    )
  }

}

export default EditToDo
