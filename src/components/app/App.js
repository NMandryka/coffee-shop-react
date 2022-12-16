
import {MainPage, OurCoffeePage, ForYourPleasurePage, Page404, SingleCoffeePage} from '../pages'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<main>
				<Routes>
					<Route path='/' element={<MainPage/>}/>
					<Route path='/our-coffee' element={<OurCoffeePage/>}/>
					<Route path='/for-your-pleasure' element={<ForYourPleasurePage/>}/>
					<Route path="our-coffee/:id" element={<SingleCoffeePage/>} />
					<Route path="*" element={<Page404/>}/>
				</Routes>
			</main>
		</Router>
	 )
}

export default App;
