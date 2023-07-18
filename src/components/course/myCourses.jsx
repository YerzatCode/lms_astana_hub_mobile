import styles from '@/styles/course.module.scss'
import CourseModule from './course'

export default function MyCourses() {
	return (
		<div className={styles.all}>
			<h4>Мои курсы</h4>
			<div className={styles.courses}>
				<CourseModule />
				<CourseModule />
			</div>
		</div>
	)
}
