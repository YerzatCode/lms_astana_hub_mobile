import { IcEdit } from '@/assets/js'
import Ava from '@/assets/png/Ava.png'
import styles from '@/styles/home.module.scss'
import Image from 'next/image'

export default function ProfileCard() {
	const score = [4.1, 4.1, 4.2, 4.5, 3.3, 3.6]
	return (
		<div className={styles.profile}>
			<Image src={Ava} />
			<div>
				<h6>Никита</h6>
				<button className='btn_border'>
					<IcEdit />
				</button>
			</div>
			<ul className={styles.score}>
				{score.map((item, index) => (
					<li key={index}>
						<text>{item}</text>
						<p>Балл</p>
					</li>
				))}
			</ul>
		</div>
	)
}
