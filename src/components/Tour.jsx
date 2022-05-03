import React, { useState, useContext } from 'react'
import TourContext from '../context/TourContext'
const Tour = ({ tour }) => {
	const { deleteTour } = useContext(TourContext)
	const [isClicked, setIsClicked] = useState(false)
	const { id, name, info, image, price } = tour
	const handleClick = () => {
		isClicked ? setIsClicked(false) : setIsClicked(true)
	}

	return (
		<article className="single-tour">
			<img src={image} alt={name} />
			<footer>
				<div className="tour-info">
					<h4>{name}</h4>
					<h4 className="tour-price">{`$${price}`}</h4>
				</div>
				<p>
					{isClicked ? info : info.slice(0, 200)}
					<button onClick={handleClick}>
						{isClicked ? 'show less' : 'read more'}
					</button>
				</p>
				<button className="delete-btn" onClick={() => deleteTour(id)}>
					not interested
				</button>
			</footer>
		</article>
	)
}

export default Tour
