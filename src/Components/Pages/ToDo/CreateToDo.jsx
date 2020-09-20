import React, { Component } from 'react'

import { Button, Card, Container, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faSave } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'

import ToDoService from '../../../Services/ToDoService'

class CreateToDo extends Component {

  constructor(props) {
    super(props)

    this.state = {
      description: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.back = this.back.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit(event) {
    ToDoService.create(this.state).then(() => {
      this.resetForm()
      Swal.fire('Tarefa cadastrada com sucesso!', '', 'success')
    })

    event.preventDefault()
  }

  resetForm() {
    this.setState({ description: '' })
  }

  back() {
    this.props.history.push('/tarefas')
  }

  render() {
    return (
      <Container className="pt-3">
        <Card>
          <Card.Header>
            <Button variant="light" onClick={ this.back }>
              <FontAwesomeIcon icon={ faArrowLeft }/>
            </Button>

            <span className="ml-1">Nova Tarefa</span>
          </Card.Header>

          <Card.Body>
            <Card.Text>
              <Form onSubmit={ this.handleSubmit }>
                <Form.Group controlId="description">
                  <Form.Label>Descrição:</Form.Label>
                  <Form.Control type="text" placeholder="Descrição da Tarefa" value={ this.state.description }
                                name="description" onChange={ this.handleChange } required/>
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

export default CreateToDo
