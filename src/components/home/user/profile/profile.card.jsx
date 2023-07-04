import { Ava, Edit } from '@/assets/navbar'
import styles from '@/styles/home.module.scss'
import Image from 'next/image'
import Score from './score'

function ProfileCard() {
	return (
		<div className={styles.profile_card}>
			<Image src={Ava} />
			<div>
				<h6>Никита</h6>
				<button className={styles.button}>
					<Edit />
				</button>
			</div>
			<Score />
		</div>
	)
}

export default ProfileCard
