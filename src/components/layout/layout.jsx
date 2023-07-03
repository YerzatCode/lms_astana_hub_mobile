import SidebarMob from './mobile.sidebar'
import Navbar from './navbar'
import SideBar from './sidebar'

export default function Layout({ children }) {
	return (
		<>
			<div className='App'>
				<Navbar />

				<div className='container'>
					<SideBar />
					<SidebarMob />
					<main>{children}</main>
				</div>
			</div>
		</>
	)
}
