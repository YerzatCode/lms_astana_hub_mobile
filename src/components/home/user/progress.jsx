import styles from '@/styles/home.module.scss'

function Progress() {
	return (
		<div className={styles.progress_container}>
			<div className={styles.progress}>
				<h4>Режим</h4>
				<div className={styles.progress_box}></div>
			</div>
			<div className={styles.progress}>
				<h4>Режим</h4>
				<div className={styles.progress_box}></div>
			</div>
		</div>
	)
}

export default Progress
