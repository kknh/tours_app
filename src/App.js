import React from 'react'
import Tours from './components/Tours'
import Header from './components/Header'
import TourStats from './components/TourStats'
import { TourContextProvider } from './context/TourContext'

function App() {
	return (
		<TourContextProvider>
			<main>
				<section>
					<Header />
					<TourStats />
					<Tours />
				</section>
			</main>
		</TourContextProvider>
	)
}

export default App
