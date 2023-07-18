import styles from '@/styles/course.module.scss'

export default function LessonsTitle() {
	return (
		<div>
			<h2>Название курса</h2>
			<div className={styles.lesson_description}>
				<text>
					Описание курса описание курса описание курса описание курса описание
					курса описание курса описание курса описание курса описание курса
					описание курса
				</text>
			</div>
		</div>
	)
}
