import styles from '@/styles/course.module.scss'

export default function LessonTitle() {
	return (
		<div className={styles.lesson_title}>
			<h6>Название урока</h6>
			<p>Описание урока</p>
		</div>
	)
}
