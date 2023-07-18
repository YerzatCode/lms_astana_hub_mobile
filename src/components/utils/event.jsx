import { IcCalendar } from '@/assets/js'
import styles from '@/styles/utils.module.scss'

export default function EventList() {
	const event = [
		{
			title: 'Название урока',
			time: '01.06',
		},
		{
			title: 'Название урока',
			time: '01.06',
		},
		{
			title: 'Название урока',
			time: '01.06',
		},
	]
	return (
		<div className={styles.event}>
			<h6>Предстоящие события</h6>
			<ul>
				{event.map((item, index) => (
					<li key={index}>
						<IcCalendar />
						<div>
							<text>{item.title}</text>
							<p>{item.time}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
