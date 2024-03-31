import { CircleUserRound, Headset } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import './header.scss'

function Header() {
	const location = useLocation()
	return (
		<header className='header'>
			<div className='header__inner'>
				<nav className='header__menu'>
					<ul className='header__list list-reset'>
						<li className='header__item'>
							<Link
								className={`header__link ${
									location.pathname === '/' ? 'active-link' : ''
								}`}
								to='/'
							>
								<span>Главная</span>
							</Link>
						</li>
						<li className='header__item'>
							<Link
								className={`header__link ${
									location.pathname === '/task' ? 'active-link' : ''
								}`}
								to='/task'
							>
								<span>Задания</span>
							</Link>
						</li>
						<li className='header__item'>
							<Link
								className={`header__link ${
									location.pathname === '/prize' ? 'active-link' : ''
								}`}
								to='/prize'
							>
								<span>Призы</span>
							</Link>
						</li>
						<li className='header__item'>
							<Link
								className={`header__link ${
									location.pathname === '/progress' ? 'active-link' : ''
								}`}
								to='/progress'
							>
								<span>Успехи</span>
							</Link>
						</li>
					</ul>
					<div className='header__content'>
						<button type='button' className='btn-reset header__btn'>
							<Headset
								color='var(--accent-color)'
								strokeWidth={'2px'}
								size={'20px'}
							/>
						</button>
						<button type='button' className='btn-reset header__btn'>
							<CircleUserRound
								color='var(--accent-color)'
								strokeWidth={'2px'}
								size={'20px'}
							/>
							<span>Профиль</span>
						</button>
					</div>
				</nav>
			</div>
		</header>
	)
}

export default Header
