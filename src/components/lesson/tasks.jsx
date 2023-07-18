import { IcLink, IcStar, IcStarFilled } from '@/assets/js'
import styles from '@/styles/course.module.scss'
import { useRouter } from 'next/router'

export default function LessonTasks() {
	const star = [1, 1, 1, 0, 0]
	const { push } = useRouter()
	return (
		<div className={styles.lesson_tasks}>
			<div>
				<p>Задание №1</p>
				<h5>Название задания</h5>
				<ul>
					{star.map((i) =>
						i == 1 ? (
							<li>
								<IcStarFilled />
							</li>
						) : (
							<li>
								<IcStar />
							</li>
						)
					)}
				</ul>
			</div>
			<button
				className='btn_border'
				onClick={() => push('/courses/lesson/task/:id')}>
				Смотреть
				<IcLink />
			</button>
		</div>
	)
}
