import { IcCalendar, IcChat, IcCourses, IcHome, IcSheild } from '@/assets/js'

export const routes = [
	{
		name: 'Мое обучение',
		href: '/',
		icon: <IcHome />,
	},
	{
		name: 'Курсы',
		href: '/courses',
		icon: <IcCourses />,
	},
	{
		name: 'Календарь',
		href: '/calendar',
		icon: <IcCalendar />,
	},
	{
		name: 'Сообщения',
		href: '/message',
		icon: <IcChat />,
	},
	{
		name: 'Поддержка',
		href: '/support',
		icon: <IcSheild />,
	},
]
