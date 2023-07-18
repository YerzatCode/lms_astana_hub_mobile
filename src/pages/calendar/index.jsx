import CalendarGrid from '@/components/calendar/grid'
import CalendarHeader from '@/components/calendar/header'
import Layout from '@/components/layout/layout'
import EventList from '@/components/utils/event'
import moment from 'moment'
import { useState } from 'react'

export default function Calendar() {
	const [today, setToday] = useState(moment())
	const startDay = today.clone().startOf('month').startOf('week')

	const prevHandler = () => {
		setToday((prev) => prev.clone().subtract(1, 'month'))
	}
	const todayHandler = () => {
		setToday(moment())
	}
	const nextHandler = () => {
		setToday((prev) => prev.clone().add(1, 'month'))
	}
	return (
		<Layout title={'Календарь'}>
			<CalendarHeader
				today={today}
				prevHandler={prevHandler}
				todayHandler={todayHandler}
				nextHandler={nextHandler}
			/>
			<div className='content'>
				<div className='basic'>
					<CalendarGrid startDay={startDay} today={today} />
				</div>
				<div className='add_panel'>
					<EventList />
				</div>
			</div>
		</Layout>
	)
}
