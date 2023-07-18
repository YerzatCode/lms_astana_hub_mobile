import { RightArrow } from '@/assets/js'
import Accardion from '@/components/utils/accardion'
import styles from '@/styles/course.module.scss'
import { useRouter } from 'next/router'

export default function LessonsProgram() {
	const price = false
	const { push } = useRouter()
	return (
		<div className={styles.lessons_program}>
			<h4>Программа курса</h4>
			<Accardion
				title={'Название модуля'}
				number={'1'}
				text={
					<>
						<text>Описание модуля </text> <text>Описание модуля </text>
					</>
				}>
				<ul>
					<li>
						<div>
							<h6>Название Урока</h6>
							<p>Описание урока</p>
						</div>
						{!price && (
							<button
								className='btn'
								onClick={() => push('/courses/lesson/:id')}>
								Перейти
								<RightArrow />
							</button>
						)}
					</li>
					<li>
						<div>
							<h6>Название Урока</h6>
							<p>Описание урока</p>
						</div>
						{!price && (
							<button
								className='btn'
								onClick={() => push('/courses/lesson/:id')}>
								Перейти
								<RightArrow />
							</button>
						)}
					</li>
				</ul>
			</Accardion>
		</div>
	)
}
