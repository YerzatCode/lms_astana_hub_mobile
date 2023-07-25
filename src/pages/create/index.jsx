import CreateHead from '@/components/create/head'
import CreateUploadImg from '@/components/create/img'
import CreateLeftContent from '@/components/create/left'
import CreateLessonModule from '@/components/create/lessonModule'
import Layout from '@/components/layout/layout'
import BackButton from '@/components/task/back'
import styles from '@/styles/editor.module.scss'
import { useRouter } from 'next/router'
import Scrollbars from 'react-custom-scrollbars-2'

export default function CreatePage() {
	const { push } = useRouter()
	return (
		<Layout title={'Создать курс'}>
			<Scrollbars>
				<div className='container'>
					<div>
						<BackButton />
					</div>
					<div className={styles.create}>
						<CreateHead />
						<div className={styles.create_content}>
							<CreateLeftContent />
							<CreateUploadImg />
						</div>
						<div className={styles.create_lesson}>
							<h4>Уроки</h4>
							<CreateLessonModule />
							<div>
								<button className='btn' onClick={() => push('/create/lesson')}>
									Добавить уроки
								</button>
							</div>{' '}
						</div>
					</div>
				</div>
			</Scrollbars>
		</Layout>
	)
}
