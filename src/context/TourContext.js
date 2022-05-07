import React, { createContext, useReducer, useEffect } from 'react'
import tourReducer from './tourReducer'

const TourContext = createContext()

export function TourContextProvider({ children }) {
	const url = 'https://course-api.com/react-tours-project'

	const initialState = {
		tours: [],
		isLoading: true,
	}

	const [state, dispatch] = useReducer(tourReducer, initialState)

	const fetchTours = async () => {
		const response = await fetch(url)
		const data = await response.json()
		dispatch({
			type: 'GET_TOURS',
			payload: data,
		})
	}

	const deleteTour = (id) => {
		dispatch({
			type: 'DELETE_TOUR',
			payload: {
				tours: state.tours,
				id,
			},
		})
	}

	useEffect(() => {
		fetchTours()
	}, [])

	return (
		<TourContext.Provider
			value={{
				tours: state.tours,
				deleteTour,
				isLoading: state.isLoading,
			}}
		>
			{children}
		</TourContext.Provider>
	)
}

export default TourContext
