import React, {Component} from 'react';
import ReactDOM, { render }  from 'react-dom';
import 'isomorphic-fetch';

class SearchBox extends Component{

    constructor(props) {
        super(props);
        this.doSearch = this.doSearch.bind(this);
    }

    doSearch(){
        var query=ReactDOM.findDOMNode(this.refs.searchInput).value;
        this.props.doSearch(query);
    }

    render(){
        return (
            <input className="form-control"
                type="text"
                ref="searchInput"
                placeholder="Search by name of the book"
                value={this.props.query}
                onChange={this.doSearch}
            />
        );
    }
}

class NoResults extends Component{

    constructor() {
        super();
        this.state= {
            noResults : 'No Results Found'
        };
    }
    render() {
        return(
            <div>
                <h3>{this.state.noResults}</h3>
            </div>
        );
    }
}

class DisplayBookTable extends Component{

    render(){

        var rows=[];
        this.props.data.forEach(function(book) {
            rows.push(<tr>
                <td>{book.bookName}</td>
                <td>{book.author}</td>
                <td>{book.price}</td>
            </tr>)
        });

        return(
            <table className="table table-bordered table-hover books-table">
                <thead className="thead-inverse">
                <tr>
                    <th>Book Name</th>
                    <th>Author</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

class InstantBox extends Component{

    constructor(props){
        super(props);
        this.state = {
            query:'',
            filteredBookData: this.props.data,
            sortBook: false,
            SortedBookList: [],
            showSort: true,
            hideMessage: true
        }
        this.doSearch = this.doSearch.bind(this);
        this.renderBookResults = this.renderBookResults.bind(this);
        this.sortBookList = this.sortBookList.bind(this);
    }

    doSearch(queryText){

        this.setState({
            showSort: false
        })

        var queryResult=[];
        this.props.data.forEach(function(book){
            if(book.bookName.toLowerCase().indexOf(queryText) !== -1){
                    queryResult.push(book);
            }
        });

        var onChangeSortList = queryResult.sort(function(a, b){
            return a.price-b.price
        });

        this.setState({
            query:queryText,
            filteredBookData: onChangeSortList
        })
    }

    sortData() {

        this.setState({
            showSort: false
        })
        var sortList = this.props.data.sort(function(a, b){
            return a.price-b.price
        });
        this.setState({
            SortedBookList: sortList
        })
    }

    sortBookList() {
        this.setState({
            sortBook: true
        })

        this.sortData();
    }

    renderBookResults() {
        if (this.state.query != '' && this.state.filteredBookData && this.state.filteredBookData.length != 0) {
            return (
                <div>
                    <DisplayBookTable data={this.state.filteredBookData}/>
                </div>
            );
        }
       if(this.state.filteredBookData.length == 0 && this.state.query != ''){

            this.setState ({
                hideMessage: false
            })

            return(
                <div className="no-results">
                    <NoResults />
                </div>
            );
        }
       if(this.state.sortBook){
           return(
               <div>
                   <DisplayBookTable data={this.state.SortedBookList}/>
               </div>

            )
        }
        else {
            return (
            <div>
                <DisplayBookTable data={this.props.data}/>
            </div>
            );
        }
    }

    render(){
        return (
            <div className="book-lists">
                <SearchBox query={this.state.query} doSearch={this.doSearch}/>
                <br/>
                { this.state.showSort ?
                    <button className="btn btn-primary" onClick={this.sortBookList}>SORT</button>: this.state.hideMessage ?
                    <h4>The sorted book list is availabe..</h4>: null
                }
                <br />
                {this.renderBookResults()}
            </div>
        );
    }
}

export default class FetchBookData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bookData: []
        };
    }

    loadJson() {
        fetch("./components/data.json")
            .then(response => response.json())
            .then(json => {
                this.setState({
                    bookData: json
                });
            });
    }

    componentDidMount() {
        this.loadJson();
    }

    render() {
        var books = this.state.bookData;
        return(
            <div>
                <InstantBox data={books}/>
            </div>
        );
    }
}




