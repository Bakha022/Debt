import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
const HomeInformer = ({ debts }) => {
	let borrowingArr = debts.filter(
		item => item.status.toLowerCase() === 'borrowing'
	)

	let lendingArr = debts.filter(item => item.status.toLowerCase() === 'lending')

	let sum_1 = 0,
		sum_2 = 0

	for (let i = 0; i < borrowingArr.length; i++) {
		sum_1 += +borrowingArr[i].debt
	}

	for (let i = 0; i < lendingArr.length; i++) {
		sum_2 += +lendingArr[i].debt
	}
	return (
		<>
			<Row className='gap-3'>
				<Col className='alert text-center alert-danger'>
					<h5>Browwing</h5>
					<p>Count: {borrowingArr?.length || 0} debts</p>
					<p>Total Amount: {sum_1}</p>
				</Col>
				<Col className='alert text-center alert-info'>
					<h5>Lending</h5>
					<p>Count: {lendingArr?.length || 0} debts</p>
					<p>Total Amount: {sum_2}</p>
				</Col>
			</Row>
		</>
	)
}

export default HomeInformer
