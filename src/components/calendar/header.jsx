import styles from '@/styles/calendar.module.scss'

function CalendarHeader({ todayHandler, nextHandler, prevHandler, today }) {
	const month = today.format('MMMM')
	const year = today.format('YYYY')
	return (
		<div className={styles.header}>
			<h1>{month}</h1>

			<button className='btn_border' onClick={prevHandler}>
				&lt;
			</button>
			<button className='btn_border' onClick={todayHandler}>
				today
			</button>
			<button className='btn_border' onClick={nextHandler}>
				&gt;
			</button>
		</div>
	)
}

export default CalendarHeader
