import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'products',
		label: 'Products',
		path: '/products',
		icon: <HiOutlineCube />
	},
	{
		key: 'customers',
		label: 'customers',
		path: '/orders',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'Income',
		label: 'Income',
		path: '/customers',
		icon: <HiOutlineUsers />
	},
	{
		key: 'Promote',
		label: 'Promote',
		path: '/transactions',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'Help',
		label: 'Help',
		path: '/messages',
		icon: <HiOutlineQuestionMarkCircle />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
