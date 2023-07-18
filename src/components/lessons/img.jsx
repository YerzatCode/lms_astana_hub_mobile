import styles from '@/styles/course.module.scss'
import Image from 'next/image'

export default function LessonsImg() {
	const price = false
	return (
		<div className={styles.lessons_img}>
			<Image src={''} alt='' />
			{!price && (
				<>
					<h6>100.000 тенге</h6>
					<button className='btn'>Записаться на курс</button>
				</>
			)}
		</div>
	)
}
