import CreateUploadImg from '@/components/create/img'
import CreateLeftContent from '@/components/create/left'
import CreateLessonModule from '@/components/create/lessonModule'
import EditHead from '@/components/editor/head'
import Layout from '@/components/layout/layout'
import BackButton from '@/components/task/back'
import styles from '@/styles/editor.module.scss'
import { useRouter } from 'next/router'
import Scrollbars from 'react-custom-scrollbars-2'

export default function EditPage() {
	const { push } = useRouter()
	return (
		<Layout title={'Редактировать курс'}>
			<Scrollbars>
				<div className='container'>
					<div>
						<BackButton />
					</div>
					<div className={styles.create}>
						<EditHead />
						<div className={styles.create_content}>
							<CreateLeftContent />
							<CreateUploadImg />
						</div>
						<div className={styles.create_lesson}>
							<h4>Уроки</h4>
							<CreateLessonModule />
							<div>
								<button className='btn' onClick={() => push('/create/lesson/')}>
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
