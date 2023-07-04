import styles from '@/styles/home.module.scss'
import Scrollbars from 'react-custom-scrollbars-2'
import Ads from './Ads'
import FAQ from './FAQ'
import MobileHomeUser from './mobile.home'
import EventBar from './profile/event'
import ProfileCard from './profile/profile.card'
import Progress from './progress'

function HomeUser() {
	return (
		<div className={styles.user_home}>
			<div className={styles.scroll}>
				<Scrollbars autoHide>
					<div className={styles.info}>
						<div>
							<h5>Привет, Никита 👋</h5>
							<h6>Пойдем учиться</h6>
						</div>

						<Progress />

						<Ads />
						<FAQ />
					</div>
				</Scrollbars>
			</div>
			<div className={styles.info_mob}>
				<h5>Привет, Никита 👋</h5>
				<h6>Пойдем учиться</h6>
			</div>
			<div className={styles.profile}>
				<ProfileCard />
				<EventBar />
			</div>
			<MobileHomeUser />
		</div>
	)
}

export default HomeUser
