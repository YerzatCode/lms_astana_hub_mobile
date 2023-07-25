import { IcBook, IcEdit, IcTool } from '@/assets/js/'

export const button = [
	{
		name: 'Куратор',
		href: '/cur',
		icon: <IcEdit />,
	},
	{
		name: 'Учительская',
		href: '/teacher',
		icon: <IcBook />,
	},
	{
		name: 'Админ',
		href: '/admin',
		icon: <IcTool />,
	},
]
