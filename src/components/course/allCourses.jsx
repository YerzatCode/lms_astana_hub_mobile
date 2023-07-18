import styles from '@/styles/course.module.scss'
import CourseModule from './course'

export default function AllCourses() {
	return (
		<div className={styles.all}>
			<h4>Все курсы</h4>
			<div className={styles.courses}>
				<CourseModule />
				<CourseModule />
				<CourseModule />
				<CourseModule />
			</div>
		</div>
	)
}
