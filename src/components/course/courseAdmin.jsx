import { IcClock, IcEdit, IcFile, IcLink, IcVideo } from '@/assets/js'
import styles from '@/styles/course.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function CourseAdminModule() {
	const { push, pathname } = useRouter()
	return (
		<div className={styles.course}>
			<Image src={''} alt='' />
			<h5>Название курса</h5>
			<ul>
				<li>
					<IcClock />
					<text> 2 месяца</text>
				</li>
				<li>
					<IcVideo />
					<text> 16 уроков</text>
				</li>
				<li>
					<IcFile />
					<text> 24 материала</text>
				</li>
			</ul>
			<text className={styles.description}>
				Описание курса Описание курса Описание курса Описание курса
			</text>
			{pathname == '/curator' ? (
				<button
					className='btn'
					onClick={() => {
						push('/teacher')
					}}>
					Посмотреть <IcLink />
				</button>
			) : (
				<button
					className='btn'
					onClick={() => {
						push('/courses/edit/:id')
					}}>
					Редактировать <IcEdit />
				</button>
			)}
		</div>
	)
}
