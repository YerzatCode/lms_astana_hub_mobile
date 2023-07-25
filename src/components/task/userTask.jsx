import { IcDone, IcLink, IcStar, IcStarFilled } from '@/assets/js'
import styles from '@/styles/course.module.scss'
import { useRouter } from 'next/router'

export default function UserTasks() {
	const star = [1, 1, 1, 0, 0]
	const failed = true
	const { push } = useRouter()
	return (
		<div className={styles.user_tasks}>
			<div>
				<p>Задание №1</p>
				<h5>Название задания</h5>
				{failed ? (
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
				) : (
					<text>Не проверено</text>
				)}
			</div>
			{failed ? (
				<button
					className='btn_border_active'
					onClick={() => push('/courses/lesson/task/:id')}>
					Смотреть
					<IcDone />
				</button>
			) : (
				<button className='btn_border'>
					Проверить
					<IcLink />
				</button>
			)}
		</div>
	)
}
