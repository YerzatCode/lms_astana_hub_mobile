import { IcEdit } from '@/assets/js'
import styles from '@/styles/editor.module.scss'
import { useRouter } from 'next/router'

export default function CreateLessonModule() {
	const { push } = useRouter()
	return (
		<div className={styles.create_lesson_module}>
			<div>
				<h6>Название урока</h6>
				<p>Описание урока</p>
			</div>
			<button className='btn_border' onClick={() => push('/lesson/edit/:id')}>
				Редактировать <IcEdit />
			</button>
		</div>
	)
}
