import React from 'react'
import './PageNotFound.css'
import { Link } from 'react-router-dom'
import emojiSad from '../../assets/images/emoji.png'


const PageNotFound = () => {
  return (
    <div className="notfound">
		<div className="notfound-404">
            <img src={emojiSad} />
			<h1>404</h1>
		</div>
		<h2>Oops! Page Not Found</h2>
		<p>Sorry but the page you are looking for does not exist!</p>
		<Link to="/" className="back-to-home">Back to homepage</Link>
	</div>
	
  )
}

export default PageNotFound