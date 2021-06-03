import React, { Component } from 'react';
import Note from './Note';
import '../css/Board.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Navbar , Nav, Form, Button, NavDropdown, FormControl} from 'react-bootstrap';


class Board extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
  }
  // Board.js Board Component Class Function

  addNote() {
    let notes = this.state.notes;
    notes.push(
      {
        id: Date.now()
      }
    );
    this.setState(
      {
        notes
      }
    );
  }
  deleteNote(id) {
    let newNoteArr = this.state.notes;
    newNoteArr.map((note, index) => {
      if (id === note.id) {
        newNoteArr.splice(index, 1);
      }
    });
    this.setState(
      {
        notes: newNoteArr
      }
    );
  }

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#action1">Home</Nav.Link>
      <Nav.Link href="#action2">Link</Nav.Link>
      <NavDropdown title="Link" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#" disabled>
        Link
      </Nav.Link>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
{/*<Navbar bg="dark" variant="dark" sticky="top" height="7%vh" width="100%vw" >
          <Navbar.Brand href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa3Xs8hK0wBqbmRL9RTAdlnhvj3800Bd7G5w&usqp=CAU">App logo</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in or Create new account <a href="#login"></a>
            </Navbar.Text>
          </Navbar.Collapse>
    </Navbar>*/}
        <div className="toppart">
          <Jumbotron className="jumbotron">
          
            <h1>Hello, movies!</h1>
          </Jumbotron>
          <div className="div-board">
            <div className="row">
              { //<Note title="Brokeback Mountain" description="adaptation of Annie Proulx’s short story of the same name about the 20-year romance between Ennis (Ledger) and Jack (Gyllenhaal), two rough-edged cowboys who meet in the summer of 1963. The men are required, by the times and the expectations of those around them, to hide their love." year="2005" genre="Romatic"/>
              }

              {
                this.state.notes.map(note => {
                  return <Note key={note.id} id={note.id} deleteHandler={this.deleteNote.bind(this)} />
                })
              }
            </div>
          </div>
        </div>

        <Navbar bg="dark" variant="dark" fixed="bottom" height="7%vh" width="100%vw" >
          <div className="add">
            <button className="btn btn-success add-button" onClick={this.addNote.bind(this)}>Add</button>
          </div>
          <Navbar.Brand href="#home">My Movie Record</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              About Us <a href="#login"></a>
            </Navbar.Text>
          </Navbar.Collapse>

        </Navbar>
      </div>
    );
  }
}

export default Board;