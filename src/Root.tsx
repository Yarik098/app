import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './pages/index'
import Prize from './pages/prize'
import Progress from './pages/progress'
import Task from './pages/task'
import './styles/main.scss'

function Root() {
	return (
		<div className='site-container'>
			<main className='main'>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Index />} />
						<Route path='/task' element={<Task />} />
						<Route path='/prize' element={<Prize />} />
						<Route path='/progress' element={<Progress />} />
					</Routes>
				</BrowserRouter>
			</main>
		</div>
	)
}

export default Root
