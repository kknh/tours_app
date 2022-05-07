const tourReducer = (state, action) => {
	switch (action.type) {
		case 'GET_TOURS':
			return {
				...state,
				tours: action.payload,
				isLoading: false,
			}
		case 'DELETE_TOUR':
			const { tours, id } = action.payload
			return {
				...state,
				tours: tours.filter((tour) => tour.id !== id),
			}
		default:
			return state
	}
}

export default tourReducer
