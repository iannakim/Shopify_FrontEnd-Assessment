import React from 'react' 

function Search(props) {
    const handleResult = (evt) => {
        props.movieSearchResults(evt.target.value)
    }

    return (
        <div>
            <input type='text'
                name='search'
                className='search'
                value={props.searchTerm}
                onChange={handleResult}
            />
        </div>
    )
}

export default Search 