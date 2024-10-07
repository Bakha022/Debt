import React, { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { v4 } from 'uuid'
import Layout from './components/Layout'
import Call from './pages/Call'
import Debit from './pages/Debit'
import Home from './pages/Home'
import Login from './pages/Login'
import Transactions from './pages/Transactions'

const App = () => {
	const [isLogin, setIsLogin] = useState(localStorage.getItem('isLogin'))
	const [show, setShow] = useState(false)
	const [validated, setValidated] = useState(false)
	const [selected, setSelected] = useState(null)
	const [search, setSearch] = useState('')
	const [debt, setDebt] = useState({
		firstName: '',
		lastName: '',
		phone: '+998',
		date: '',
		debt: '',
		status: 'Borrowing',
	})
	const [debts, setDebts] = useState(
		JSON.parse(localStorage.getItem('debts')) || []
	)

	useEffect(() => {
		localStorage.setItem('debts', JSON.stringify(debts))
	}, [debts])

	const handleClose = () => {
		setValidated(false)
		setShow(false)
	}
	const handleShow = () => {
		setValidated(false)
		setShow(true)
	}

	const handleChange = e => {
		setDebt({ ...debt, [e.target.id]: e.target.value })
	}

	let newDebts
	const handleSubmit = e => {
		e.preventDefault()

		if (e.currentTarget.checkValidity()) {
			if (selected === null) {	
				newDebts = [...debts, { ...debt, id: v4() }]
				setDebts(newDebts)
				toast.success('Added debt')
			} else {
				newDebts = debts.map(item => (debt.id === selected ? debt : item))
				setDebts(newDebts)
				toast.success('Updated debt')
			}
			handleClose()
			setDebt({
				firstName: '',
				lastName: '',
				phone: '+998',
				date: '',
				debt: '',
				status: 'Borrowing',
			})
			localStorage.setItem('debts', JSON.stringify(newDebts))

			setValidated(false)
		} else {
			setValidated(true)
			toast.error('Please fill!')
		}
	}

	const deleteDebt = id => {
		newDebts = debts.filter(debt => debt.id !== id)
		setDebts(newDebts)
	}

	const editDebt = id => {
		setSelected(id)
		const editDebt = debts.find(item => item.id == id)
		setDebt(editDebt)
		handleShow()
	}

	const openModal = () => {
		handleShow()
		setSelected(null)
		setDebt({
			firstName: '',
			lastName: '',
			phone: '+998',
			date: '',
			debt: '',
			status: 'Borrowing',
		})
	}

	const DebtProps = {
		debts,
		show,
		validated,
		debt,
		selected,
		search,
		setSearch,
		handleSubmit,
		handleClose,
		handleShow,
		handleChange,
		deleteDebt,
		editDebt,
		openModal,
		setDebt,
	}
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/login' element={<Login setIsLogin={setIsLogin} />} />
					<Route element={<Layout />}>
						<Route
							index
							element={
								isLogin ? <Home debts={debts} /> : <Navigate to={'/login'} />
							}
						/>
						<Route
							path='/debit'
							element={
								isLogin ? <Debit {...DebtProps} /> : <Navigate to={'/login'} />
							}
						/>
						<Route
							path='/transactions'
							element={isLogin ? <Transactions /> : <Navigate to={'/login'} />}
						/>
						<Route
							path='/call'
							element={isLogin ? <Call /> : <Navigate to={'/login'} />}
						/>
					</Route>
				</Routes>

				<ToastContainer />
			</BrowserRouter>
		</>
	)
}

export default App
