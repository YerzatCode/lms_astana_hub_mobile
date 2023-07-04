import styles from '@/styles/home.module.scss'

function Score() {
	const array = [1.2, 1.4, 6.3, 6.4, 1.2, 4.4]
	return (
		<div className={styles.score}>
			{array.map((item, index) => (
				<div key={index} className={styles.one}>
					<text>{item}</text>
					<p>Балл</p>
				</div>
			))}
		</div>
	)
}

export default Score
