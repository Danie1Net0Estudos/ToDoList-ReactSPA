import React, { Component } from 'react';

import { Button, ButtonGroup, Card, Container, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'

import TodoService from '../../../Services/ToDoService';

class ListToDo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      toDoList: []
    }

    this.createToDoItem = this.createToDoItem.bind(this);
  }

  componentDidMount() {
    this.getToDoList();
  }

  getToDoList() {
    TodoService.all().then(toDoList => this.setState({ toDoList: toDoList.data }))
  }

  createToDoItem() {
    this.props.history.push('/tarefas/novo');
  }

  editToDoItem(id) {
    this.props.history.push(`/tarefas/${ id }/editar`);
  }

  deleteToDoItem(id) {
    Swal.fire({
      title: 'Você tem certeza?',
      text: "Ao deletar a tarefa, esta ação será irreversível!",
      icon: 'question',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        TodoService.delete(id).then(() => {
          this.getToDoList();
          Swal.fire('Tarefa deleteda com sucesso!', '', 'success');
        });
      }
    })
  }

  render() {
    return (
      <Container className="pt-3 pb-5">
        <Card className="mb-5">
          <Card.Header className="d-flex bd-highlight">
            <span className="ml-1 bd-highlight align-self-center">Lista de Tarefas</span>

            <Button className="bd-highlight ml-auto" variant="success" onClick={ this.createToDoItem }>
              <FontAwesomeIcon icon={ faPlus }/>
            </Button>
          </Card.Header>

          <Card.Body>
            <Card.Text>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Descrição</th>
                    <th>Completa</th>
                    <th>Ações</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    this.state.toDoList.map(toDoItem =>
                      <tr key={ toDoItem.id }>
                        <td>{ toDoItem.description }</td>
                        <td>{ toDoItem.complete ? 'Sim' : 'Não' }</td>
                        <td>
                          <ButtonGroup aria-label="Basic example">
                            <Button onClick={ () => this.editToDoItem(toDoItem.id) } variant="primary">
                              <FontAwesomeIcon icon={ faEdit }/>
                            </Button>

                            <Button onClick={ () => this.deleteToDoItem(toDoItem.id) } variant="danger">
                              <FontAwesomeIcon icon={ faTrash }/>
                            </Button>
                          </ButtonGroup>
                        </td>
                      </tr>
                    )
                  }
                </tbody>
              </Table>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    );
  }

}

export default ListToDo;
