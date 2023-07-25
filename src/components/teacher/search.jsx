import styles from '@/styles/teacher.module.scss'

export default function TeacherSearchUser() {
	return (
		<div className={styles.teacher_search}>
			<h5>Найти студента</h5>
			<div>
				<input placeholder='Email' />
				<input placeholder='ФИО' />
				<input placeholder='Телефон' />
				<button>Найти</button>
			</div>
		</div>
	)
}
