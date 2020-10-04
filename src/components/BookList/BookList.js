import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './BookList.css';

class BookList extends Component{
    constructor(){
        super();
        this.refElement = React.createRef();
    }

    render(){
        const {books} = this.props;
        return(
            <div className="BookList">
                <h1>Books list</h1>
                <form className="searchForm">
                    <input placeholder="Search..." ref={this.refElement}></input>
                    <button>Search</button>
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Avatar</th>
                            <th>Tittle</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((item, index)=>(
                            <tr key={index}>
                                <td>{index}</td>
                                <td><img className="avatar" src={item.url}></img></td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                            </tr>
                        ))}
                    </tbody>
                    
                </table>
                
            </div>
            
            
        );
    }
    componentDidMount(){
        this.refElement.current.focus();
    }
}



BookList.propTypes = {
    book : PropTypes.shape({
        url:PropTypes.string,
        title:PropTypes.string,
        description:PropTypes.string
    })
}
export default BookList;