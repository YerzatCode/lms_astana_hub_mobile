import { Down } from '@/assets/faq'
import styles from '@/styles/home.module.scss'

function Questions() {
	return (
		<div className={styles.questions}>
			<h5>Вопросы</h5>
			<div className={styles.down}>
				<Down />
			</div>
		</div>
	)
}

export default Questions
