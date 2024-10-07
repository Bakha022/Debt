import React from 'react'
import HomeInformer from '../components/HomeInformer'

const Home = ({ debts }) => {
	return (
		<div className='container'>
			<div className='page'>
				<div className='row'>
					<div className='col-6'>
						<img className='w-100' src='/value.png' alt='image' />
					</div>
					<div className='col-6'>
						<img className='w-100' src='/Chart.png' alt='image' />
					</div>
				</div>
				<hr />
				<HomeInformer debts={debts} />
			</div>
		</div>
	)
}

export default Home
