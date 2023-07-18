import styles from '@/styles/home.module.scss'

function ProgressBox() {
	return (
		<div className={styles.progress}>
			<h4>Режим</h4>
			<div className={styles.box}></div>
		</div>
	)
}

export default ProgressBox
