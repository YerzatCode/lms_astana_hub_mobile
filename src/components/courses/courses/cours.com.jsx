import { Clock, FileIcon, LinkIcon, Video } from '@/assets/courses/infoBar'
import { Ava } from '@/assets/navbar'
import styles from '@/styles/courses.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/router'

function CourseCom() {
	const { push } = useRouter()
	return (
		<div className={styles.course}>
			<Image src={Ava} className={styles.image} />
			<div>
				<h5>Название курса</h5>
				<ul>
					<li>
						<Image src={Clock} alt='' />
						<text>2 месяца</text>
					</li>
					<li>
						<Image src={Video} alt='' />
						<text>16 уроков</text>
					</li>
					<li>
						<Image src={FileIcon} alt=' ' />
						<text>24 материала</text>
					</li>
				</ul>
			</div>
			<div className={styles.title}>
				<text>Описание курса Описание курса</text>
				<text>Описание курса Описание курса</text>
			</div>
			<button onClick={() => push('/courses/:id')}>
				Подробнее <Image src={LinkIcon} alt='' />
			</button>
		</div>
	)
}

export default CourseCom
