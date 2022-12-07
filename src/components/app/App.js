
import {MainPage, OurCoffeePage, ForYourPleasurePage} from '../pages'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
	return (
		<Router>

			<main>
				<Routes>
					<Route path='/' element={<MainPage/>}/>
					<Route path='/our-coffee' element={<OurCoffeePage/>}/>
					<Route path='/for-your-pleasure' element={<ForYourPleasurePage/>}/>
				</Routes>
			</main>
		</Router>
	 )
}

export default App;
