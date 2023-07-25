import { IcLink, IcStar, IcStarFilled } from '@/assets/js'
import Ava from '@/assets/png/Ava.png'
import styles from '@/styles/teacher.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function TeacherUserList() {
	const star = [1, 1, 1, 0, 0]
	const { push } = useRouter()
	return (
		<div className={styles.curse_group_user}>
			<Image src={Ava} width={36} height={36} alt='ava' />
			<text>test@test.ru</text>
			<text>Test Test Test</text>
			<text>+77077077070</text>
			<text>Active</text>
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
			<button
				className='btn_border_active'
				onClick={() => push('/profile/:id')}>
				Перейти
				<IcLink />
			</button>
		</div>
	)
}
