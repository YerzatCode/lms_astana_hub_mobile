import { LeftArrow } from '@/assets/js'
import { useRouter } from 'next/router'

export default function BackButton() {
	const { back } = useRouter()

	return (
		<>
			<button className='btn_border_active' onClick={() => back()}>
				<LeftArrow />
				Назад
			</button>
		</>
	)
}
