import styles from '@/styles/admin.module.scss'

export default function EduGroupModule() {
	const num = [...Array(20)]

	return (
		<div className={styles.edu}>
			<p>01.01.2023 - 01.01.2024</p>
			<h5>Группа №1</h5>
			<div className={styles.edu_list}>
				{num.map((item, index) => (
					<div key={index} className={styles.edu_list_user}></div>
				))}
			</div>
		</div>
	)
}
