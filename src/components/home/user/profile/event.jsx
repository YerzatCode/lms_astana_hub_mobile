import { Calendar } from '@/assets/sidebar'
import styles from '@/styles/home.module.scss'

function EventBar() {
	const event = [
		{
			name: 'Название урока',
			time: '01.06',
		},
		{
			name: 'Название урока',
			time: '01.06',
		},
		{
			name: 'Название урока',
			time: '01.06',
		},
	]
	return (
		<div className={styles.event}>
			<h6>Предстоящие события</h6>
			{event.map((item, index) => (
				<div className={styles.list} key={index}>
					<Calendar />
					<div className={styles.title}>
						<text>{item.name}</text>
						<p>{item.time}</p>
					</div>
				</div>
			))}
		</div>
	)
}

export default EventBar
