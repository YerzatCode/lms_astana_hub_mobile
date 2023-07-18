import { IcPlus } from '@/assets/js'
import Layout from '@/components/layout/layout'
import SupportTicket from '@/components/support/ticket'
import styles from '@/styles/support.module.scss'
import { useRouter } from 'next/router'

export default function Support() {
	const { push } = useRouter()
	return (
		<Layout title={'Поддержка'}>
			<div className={styles.support}>
				<div className={styles.support_title}>
					<h4>Мои обращения</h4>
					<button className='btn' onClick={() => push('/support/send')}>
						{' '}
						Новый тикет <IcPlus />
					</button>
				</div>
				<SupportTicket />
			</div>
		</Layout>
	)
}
