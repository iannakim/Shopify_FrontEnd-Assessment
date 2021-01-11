import React from 'react' 
import { Icon } from 'semantic-ui-react';

function Search(props) {
    const handleResult = (evt) => {
        props.movieSearchResults(evt.target.value)
    }

    return (
        <form className='searchComponent' name='myForm'>
            <input type='text'
                name='search'
                className='searchBar'
                // value={props.searchTerm}
                onChange={handleResult}
                placeholder='Search movies'/>
            <Icon id='searchIcon' size='large' color='red' name='search'/>
        </form>
    )
}

export default Search 