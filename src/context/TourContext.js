import React, { createContext, useState, useEffect } from 'react'

const TourContext = createContext()

export function TourContextProvider({ children }) {
	const url = 'https://course-api.com/react-tours-project'

	const [isLoading, setIsLoading] = useState(true)

	const [tours, setTours] = useState([])

	const fetchTours = async () => {
		const response = await fetch(url)
		const data = await response.json()
		setTours(data)
		setIsLoading(false)
	}

	const deleteTour = (id) => {
		setTours(tours.filter((tour) => tour.id !== id))
	}

	useEffect(() => {
		fetchTours()
	}, [])

	return (
		<TourContext.Provider
			value={{
				tours,
				deleteTour,
				isLoading,
			}}
		>
			{children}
		</TourContext.Provider>
	)
}

export default TourContext
