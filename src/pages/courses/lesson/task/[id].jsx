import Layout from '@/components/layout/layout'
import BackButton from '@/components/task/back'
import TaskTitle from '@/components/task/title'
import TaskUpload from '@/components/task/upload'
import styles from '@/styles/course.module.scss'

export default function Task() {
	return (
		<Layout title={'Название задание | Урок'}>
			<div className='container'>
				<div className={styles.task}>
					<BackButton />

					<div className={styles.task_box}>
						<TaskTitle />
						<TaskUpload />
					</div>
				</div>
			</div>
		</Layout>
	)
}
