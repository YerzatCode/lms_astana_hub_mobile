import styles from '@/styles/courses.module.scss'
import CourseCom from './courses/cours.com'

function CoursesPage() {
	return (
		<div className={styles.courses}>
			<h4>Все курсы</h4>
			<div className={styles.courses_container}>
				<CourseCom />
				<CourseCom />
				<CourseCom />
				<CourseCom />
			</div>
		</div>
	)
}

export default CoursesPage
