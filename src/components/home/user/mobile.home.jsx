import styles from '@/styles/home.module.scss'
import Ads from './Ads'
import FAQ from './FAQ'
import Progress from './progress'

function MobileHomeUser() {
	return (
		<>
			<div className={styles.info_mob}>
				<Progress />

				<Ads />
				<FAQ />
			</div>
		</>
	)
}

export default MobileHomeUser
