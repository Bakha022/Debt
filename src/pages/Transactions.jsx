import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Alert from 'react-bootstrap/Alert';

const Transactions = () => {
	const [dollar, setDollar] = useState(100)
	const sum = (dollar * 12774).toLocaleString().split(',').join(' ')

	return (
		<div className='container'>
			<div className='page'>
				<h4>USD to UZS</h4>
				<InputGroup className='mb-3 w-25'>
					<Form.Control
						value={dollar}
						onChange={e => setDollar(+e.target.value)}
					/>
				</InputGroup>
				<Alert className='w-25 py-2'>{sum} UZS</Alert>
			</div>
		</div>
	)
}

export default Transactions
