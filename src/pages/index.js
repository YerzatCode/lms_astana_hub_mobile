import AdsBanner from '@/components/home/ads/ads'
import FAQ from '@/components/home/faq/faq.jsx'
import ProfileCard from '@/components/home/profile/profile'
import ProgressBox from '@/components/home/progress/progress'
import Layout from '@/components/layout/layout'
import EventList from '@/components/utils/event'
import styles from '@/styles/home.module.scss'
import Scrollbars from 'react-custom-scrollbars-2'

export default function Home() {
	return (
		<>
			<Layout title={' Привет Никита | Профиль '}>
				<div className='content'>
					<Scrollbars>
						<div className='basic'>
							<div>
								<h5>Привет, Никита 👋</h5>
								<h6>Пойдем учиться</h6>
							</div>
							<div className={styles.dio}>
								<ProgressBox />
								<ProgressBox />
							</div>
							<AdsBanner />
							<FAQ />
						</div>
					</Scrollbars>
					<div className='add_panel'>
						<ProfileCard />
						<EventList />
					</div>
				</div>
			</Layout>
		</>
	)
}
