import React from 'react'
import { Alert } from 'react-bootstrap'
import { PiBankFill } from 'react-icons/pi'

const BankInfos = ({ bankName, phone }) => {
	return (
		<Alert
			variant='info'
			className='d-flex align-items-center gap-5 justify-content-between'
		>
			<div className='d-flex gap-3 align-items-center'>
				<PiBankFill fontSize={26} />
				<h3>{bankName}</h3>
			</div>
			<a href={`tel:${phone}`}>{phone}</a>
		</Alert>
	)
}

export default BankInfos
