import { Link } from 'react-router-dom'
import './dashboard.scss'

function Dashboard() {
	return (
		<section className='dashboard'>
			<div className='dashboard__inner'>
				<div className='dashboard__content'>
					<div className='dashboard__item balance'>
						<div className='balance-bg'></div>
						<img
							src={`${process.env.PUBLIC_URL}/img/balance-coin.png`}
							alt='Иконка монеты'
							className='balance__img'
							width={'36'}
							height={'36'}
						/>
						<span className='balance__title'>Ваш баланс</span>
						<span className='balance__num'>300</span>
						<button type='button' className='dashboard__btn btn-reset'>
							Транзакции
						</button>
					</div>
					<div
						className='dashboard__item referral'
						style={{
							backgroundImage: 'url(/app/img/referral.png)',
						}}
					>
						<div className='referral__star'>
							<span>0</span>
							<svg
								height={'13'}
								width={'13'}
								fill={'none'}
								xmlns={'http://www.w3.org/2000/svg'}
								viewBox={'1 1 13 13'}
							>
								<path
									d='M5.29184 3.04481C6.05202 1.6816 6.43181 1 7 1C7.56819 1 7.94798 1.6816 8.70816 3.04481L8.90495 3.39761C9.12095 3.78521 9.22895 3.97901 9.39694 4.10681C9.56494 4.23461 9.77493 4.28201 10.1949 4.37681L10.5765 4.46321C12.0525 4.79741 12.7899 4.96421 12.9657 5.52881C13.1409 6.09282 12.6381 6.68142 11.6319 7.85802L11.3715 8.16222C11.0859 8.49642 10.9425 8.66382 10.8783 8.87022C10.8141 9.07722 10.8357 9.30042 10.8789 9.74623L10.9185 10.1524C11.0703 11.7226 11.1465 12.5074 10.6869 12.856C10.2273 13.2052 9.53614 12.8866 8.15497 12.2506L7.79678 12.0862C7.40439 11.905 7.20819 11.815 7 11.815C6.7918 11.815 6.59561 11.905 6.20262 12.0862L5.84563 12.2506C4.46386 12.8866 3.77268 13.2046 3.31369 12.8566C2.8535 12.5074 2.9297 11.7226 3.08149 10.1524L3.12109 9.74683C3.16429 9.30042 3.18589 9.07722 3.12109 8.87082C3.05749 8.66382 2.9141 8.49642 2.6285 8.16282L2.36811 7.85802C1.36193 6.68202 0.859144 6.09342 1.03434 5.52881C1.21014 4.96421 1.94812 4.79681 3.42408 4.46321L3.80567 4.37681C4.22506 4.28201 4.43446 4.23461 4.60306 4.10681C4.77105 3.97901 4.87905 3.78521 5.09504 3.39761L5.29184 3.04481Z'
									fill='#FFC82C'
								></path>
							</svg>
						</div>
						<div className='referral__level'>
							<span className='referral__level-span'>1</span>
							ур.
						</div>
						<div
							className='referral__wp'
							style={{
								backgroundImage: 'url(/app/img/referral_wp.jpg)',
							}}
						></div>
						<button type='button' className='dashboard__btn btn-reset'>
							Пригласить друзей
						</button>
					</div>
					<div className='dashboard__col'>
						<div className='dashboard__col-item rating'>
							<div className='rating__container'>
								<Link className='rating__link' to='/task'>
									<span className='rating__span'>Рейтинг Другого Дела</span>
									<img
										src={`${process.env.PUBLIC_URL}/img/cup.png`}
										alt='Иконка кубка'
										className='rating__img image'
										width={'30'}
										height={'30'}
									/>
								</Link>
							</div>
						</div>
						<div className='dashboard__col-item achievements'>
							<Link className='achievements__link' to='/task'>
								<div className='achievements__item'>
									<img
										src={`${process.env.PUBLIC_URL}/img/achievements-1.png`}
										alt='Достижения иконка'
										className='image'
										width={'48'}
										height={'48'}
									/>
								</div>
								<div className='achievements__item'>
									<img
										src={`${process.env.PUBLIC_URL}/img/achievements-2.png`}
										alt='Достижения иконка'
										className='image'
										width={'48'}
										height={'48'}
									/>
								</div>
								<div className='achievements__item'>
									<img
										src={`${process.env.PUBLIC_URL}/img/achievements-3.png`}
										alt='Достижения иконка'
										className='image'
										width={'48'}
										height={'48'}
									/>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Dashboard
