import React from 'react' 
import { Grid, Button, Loader } from 'semantic-ui-react';

function SearchResult(props) {

    const handleClick = (movie) => {
        props.updateNominationList(movie)
    }

    const checkForDuplicates = (movie) => {
        return !!props.nominationList.find(mv => mv.imdbID === movie.imdbID)
    }

    let MovieResults = props.resultArray.map(movie => {
        return <div key={movie.Title + movie.Poster}>
                    <div class="grid-container">
                        <div class="imageHolder">
                            <img src={movie.Poster !== "N/A" ? movie.Poster : './assets/image_placeholder.jpeg'}
                                alt={movie.Title} />
                        </div>
                        <div class="infoHolder">
                            <p>{movie.Title} <em>({movie.Year})</em></p>
                            <Button variant="primary"
                                    disabled = {props.disabledButton ? true : checkForDuplicates(movie)}
                                    onClick = {() => handleClick(movie)} >
                                    Nominate
                            </Button>
                        </div>
                    </div>    
                </div>
    })
    
    return (
    <div>
        {props.loading ? (<Loader active size='big' inline='centered'/>) : props.loading }
        <Grid doubling columns={3} id='NewGrid'> {MovieResults}</Grid>  
    </div> 
    )
}


export default SearchResult