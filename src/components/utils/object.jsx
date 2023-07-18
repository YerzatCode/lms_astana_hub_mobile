import Ava from '@/assets/png/Ava.png'
import styles from '@/styles/utils.module.scss'
import Image from 'next/image'

export default function ListObject({ name, last_message, message_num }) {
	return (
		<div className={styles.object_list}>
			<div className={styles.left}>
				<Image src={Ava} alt='' />
				<div>
					<text>{name}</text>
					<p>{last_message}</p>
				</div>
			</div>
			{message_num && <div className='btn'>{message_num}</div>}
		</div>
	)
}
