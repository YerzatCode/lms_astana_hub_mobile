import Head from 'next/head'
import Navbar from './navbar/navbar'
import SideBar from './sidebar/sidebar'

export default function Layout({ children, title }) {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<div className='App'>
				<Navbar />
				<div className='layout_container'>
					<SideBar />
					{/* <SidebarMob /> */}
					<main>{children}</main>
				</div>
			</div>
		</>
	)
}
