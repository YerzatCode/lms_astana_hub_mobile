import Ava from '@/assets/png/Ava.png'
import styles from '@/styles/message.module.scss'
import Image from 'next/image'
import Scrollbars from 'react-custom-scrollbars-2'
import AddMessage from './add'
import MyMessage from './my'

export default function MessageContent() {
	return (
		<>
			<div className={styles.message}>
				<div className={styles.message_address}>
					<Image src={Ava} alt='' />
					<div>
						<text>Женя</text>
						<p>Студент</p>
					</div>
				</div>
				<div className={styles.message_content}>
					<Scrollbars>
						<AddMessage />
						<MyMessage />
					</Scrollbars>
				</div>
				<input placeholder={'Написать сообщение..'}></input>
			</div>
		</>
	)
}
