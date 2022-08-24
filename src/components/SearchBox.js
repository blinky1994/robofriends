import React from 'react'

const SearchBox = ({searchChange}) => {
	return (
		<div className='pa2 ma2'>
		<input 
		aria-label='Search Robots'
		className = 'br3-ns pa3 ba b--green bg-lightest-blue'
		type='search' 
		placeholder='search robots'
		onChange = {searchChange}
		/>

		</div>
	)
} 

export default SearchBox;