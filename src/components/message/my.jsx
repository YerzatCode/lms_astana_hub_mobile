import styles from '@/styles/message.module.scss'

export default function MyMessage() {
	return (
		<div className={styles.message_my}>
			<text>Как ты </text>
			<p>23:00</p>
		</div>
	)
}
