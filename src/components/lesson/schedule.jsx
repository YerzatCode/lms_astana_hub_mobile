import { IcCircle, IcCircleFilled } from '@/assets/js'
import styles from '@/styles/course.module.scss'

export default function LessonSchedule() {
	const task = [
		{
			completed: true,
			num: 1,
			name: 'Название урока',
		},
		{
			completed: false,
			num: 2,
			name: 'Название урока',
		},
		{
			completed: false,
			num: 3,
			name: 'Название урока',
		},
	]
	return (
		<div className={styles.lesson_schedule}>
			<h6>Расписание</h6>
			{task.map((item) => (
				<div key={item.num} className={styles.list}>
					{item.completed ? <IcCircleFilled /> : <IcCircle />}
					<div>
						<p>Урок №{item.num}</p>
						<text>{item.name}</text>
					</div>
				</div>
			))}
		</div>
	)
}
