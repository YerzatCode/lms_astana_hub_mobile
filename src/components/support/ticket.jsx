import { IcClose, IcDone } from '@/assets/js'
import styles from '@/styles/support.module.scss'

export default function SupportTicket() {
	const ticket = [
		{
			date: '01.01.2023',
			title: 'Не отправляется ДЗ',
			completed: true,
		},
		{
			date: '01.01.2023',
			title: 'Не отправляется ДЗ',
			completed: true,
		},
		{
			date: '01.01.2023',
			title: 'Не отправляется ДЗ',
			completed: false,
		},
	]
	return (
		<>
			{ticket.map((item, index) => (
				<div className={styles.support_ticket} key={index}>
					<div>
						<p>{item.date}</p>
						<h5>{item.title}</h5>
					</div>
					<div className={styles.support_completed}>
						{' '}
						{item.completed ? (
							<IcDone stroke={'#50D177'} />
						) : (
							<IcClose stroke={'#FF0000'} />
						)}
					</div>
				</div>
			))}
		</>
	)
}
