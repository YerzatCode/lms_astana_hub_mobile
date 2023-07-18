import { IcChat } from '@/assets/js'
import Layout from '@/components/layout/layout'
import LessonAdd from '@/components/lesson/add'
import LessonSchedule from '@/components/lesson/schedule'
import LessonTasks from '@/components/lesson/tasks'
import LessonTitle from '@/components/lesson/title'
import styles from '@/styles/course.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Scrollbars from 'react-custom-scrollbars-2'

export default function Lesson() {
	const role = 'user'
	const { push } = useRouter()
	return (
		<Layout title={'Названия урока | Урок'}>
			<div className='content'>
				<div className='basic'>
					<Scrollbars>
						<div className={styles.lesson}>
							<h4>Название урока</h4>
							<Image src={''} alt='' />
							<LessonTitle />
							<LessonTasks />
							<LessonTasks />
						</div>
					</Scrollbars>
				</div>
				<div className='add_panel'>
					<LessonSchedule />
					<LessonAdd />
					<button className='btn' onClick={() => push('/message')}>
						Чат с преподавателем
						<IcChat />
					</button>
				</div>
			</div>
		</Layout>
	)
}
