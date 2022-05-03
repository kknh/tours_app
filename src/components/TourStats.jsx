import React, { useContext } from 'react'
import TourContext from '../context/TourContext'
function TourStats() {
	const { tours } = useContext(TourContext)
	return <div>{`${tours.length} tours available`}</div>
}

export default TourStats
