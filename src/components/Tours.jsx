import React, { useContext } from 'react'
import Loading from '../shared/Loading'
import TourContext from '../context/TourContext'
import Tour from './Tour'
const Tours = () => {
	const { tours, isLoading } = useContext(TourContext)

	const tourElements = tours?.map((tour) => {
		return <Tour key={tour.id} tour={tour} />
	})

	return (
		<div>
			{isLoading ? (
				<Loading />
			) : tours.length > 0 ? (
				tourElements
			) : (
				<p>There are currently no available tours</p>
			)}
		</div>
	)
}

export default Tours
