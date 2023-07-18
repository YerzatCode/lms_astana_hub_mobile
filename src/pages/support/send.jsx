import Layout from '@/components/layout/layout'
import SupportBack from '@/components/support/back'
import SupportSendBox from '@/components/support/send'

export default function SupportSend() {
	return (
		<Layout title={'Отправит'}>
			<div className='container'>
				<SupportBack />
				<SupportSendBox />
			</div>
		</Layout>
	)
}
