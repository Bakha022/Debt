import React from 'react'
import BankInfos from '../components/BankInfos'

const Call = () => {
	const BANKS = [
		{
			bankName: 'Milliy bank',
			phone: '(78)148-00-10',
		},
		{
			bankName: 'Sanoatqurilishbank',
			phone: '(71)200-43-43',
		},
		{
			bankName: 'Agrobank',
			phone: '1216',
		},
		{
			bankName: 'Mikrokreditbank',
			phone: '(71)207-46-52',
		},
		{
			bankName: 'Xalq banki',
			phone: '(71)210-20-02',
		},
		{
			bankName: 'Qushloqqurilishbank',
			phone: '(78)150-00-55',
		},
		{
			bankName: 'Turon bank',
			phone: '(95)144-60-00',
		},
		{
			bankName: 'Hamkorbank',
			phone: '1256',
		},
		{
			bankName: 'Asaka bank',
			phone: '1152',
		},
		{
			bankName: 'Ipoteka bank',
			phone: '(78)150-11-22',
		},
		{
			bankName: 'Orient Finans bank ',
			phone: '(71)200-88-99',
		},
	]
	return (
		<div className='container'>
			<div className='page'>
				{BANKS?.map((item, index) => (
					<BankInfos key={index} {...item} />
				))}
			</div>
		</div>
	)
}

export default Call
