import React, {Component} from 'react';
import '../css/Note.css';
import PropTypes from 'prop-types';




const GENERIC_NOTE_IMAGEURL = "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg";
const GENERIC_NOTE_TITLE = "New Note Title", GENERIC_NOTE_BODY = "Description", GENERIC_NOTE_YEAR = "Year", GENERIC_NOTE_GENRE ="Genre", GENERIC_NOTE_WATCHED ="Watched";
class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
        imageurl: GENERIC_NOTE_IMAGEURL,
        title: GENERIC_NOTE_TITLE,
        body: GENERIC_NOTE_BODY,
        year: GENERIC_NOTE_YEAR,
        genre: GENERIC_NOTE_GENRE,
        watched:GENERIC_NOTE_WATCHED,
        editMode: false
      };
  }
  
  handleEdit() {
    this.setState({
      editMode: true
    });
  }

  handleSave() {
    this.setState({
    imageurl: this.refs.imageContent.value,
    title: this.refs.titleContent.value,
    body: this.refs.bodyContent.value,
    year: this.refs.yearContent.value,
    genre: this.refs.genreContent.value,
    watched: this.refs.watchedContent.value,
    editMode: false
    });
  }
  handleDelete() {
    this.props.deleteHandler(this.props.id);
  }
 render() {
        let imageElement, titleElement, bodyElement,yearElement,genreElement, watchedElement, buttonArea;
        if (this.state.editMode) {
        
          imageElement = <input type="text" ref="imageContent" defaultValue ="Image link here"/>;
          titleElement = <textarea ref="titleContent" className="title-textarea" defaultValue={this.state.title}></textarea>;
          bodyElement = <textarea ref="bodyContent" className="body-textarea" defaultValue={this.state.body}></textarea>;
          yearElement = <textarea ref="yearContent" className="year-textarea" defaultValue={this.state.year}></textarea>;
          genreElement = <textarea ref="genreContent" className="genre-textarea" defaultValue={this.state.genre}></textarea>;
          watchedElement = <select ref="watchedContent" className="watched-textarea" defaultValue={this.state.watched}> 
          <option value="watched">Watched</option>
          <option value="unwatched">Unwatched</option>
        </select>;
          buttonArea = <div><button className="btn btn-primary" onClick={this.handleSave.bind(this)}>Save</button></div>;
        } else {
          imageElement = <img src={this.state.imageurl} height="150px" width="200px"/>;
          titleElement = <h5>{this.state.title}</h5>;
          bodyElement = <p>{this.state.body}</p>;
          yearElement = <p>{this.state.year}</p>;
          genreElement = <p>{this.state.genre}</p>;
          watchedElement= <p>{this.state.watched}</p>
          buttonArea = <div><button className="btn btn-info" onClick={this.handleEdit.bind(this)}>Edit</button><button className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Delete</button></div>;
          
        }
    
        return (
          
          <div className="col-sm-6">
            <div className="card card-view">
              <div className="card-body">
                {imageElement}
                {titleElement}
                {bodyElement}
                {yearElement}
                {genreElement}
                {watchedElement}
                {buttonArea}
              </div>
            </div>
          </div>
        )
    }   
};
	
Note.defaultProps = {
    imageurl:"Image link here",
    title: "A cool title",
    body: "A cool movie",
    year:"0000",
    genre:"cool",
    watched:"watched"

  };
   
  Note.propTypes = {
    imageurl: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    year: PropTypes.string,
    genre: PropTypes.string,
    watched:PropTypes.string
  };
export default Note;