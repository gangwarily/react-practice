import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from "./components/search_bar"

//const API_KEY = "AIzaSyDlxqJ1JRVncXZho6b0oNNC2eVExRfWEHk";

const App = () => {
    return (<div>
               <SearchBar/>
            </div>);
};

ReactDOM.render(<App/>, document.querySelector('.container'));