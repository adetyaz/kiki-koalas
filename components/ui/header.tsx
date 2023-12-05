import Image from 'next/image'
import { Button } from './button'
import { Menu } from 'lucide-react'

const Header = () => {
	return (
		<div className='flex justify-between bg-[#F8D467] py-4 px-4 md:px-28'>
			<Image
				src='/images/logo.png'
				alt='logo'
				height={100}
				width={100}
				className='h-10 w-10'
			/>
			<nav>
				<ul className='flex gap-8'>
					<li>
						<Button className='bg-white h-12 w-12 rounded-full border border-b-4 border-black'>
							<Image
								src='/images/twitter-x.svg'
								alt='twitter logo'
								height={50}
								width={50}
							/>
						</Button>
					</li>
					<li>
						<Button className='bg-white h-12 w-12 rounded-full border border-b-4 border-black'>
							<Image
								src='/images/discord.svg'
								alt='discord logo'
								height={50}
								width={50}
							/>
						</Button>
					</li>
					<li>
						<Button className='btn bg-white text-black rounded-full'>
							<Menu color='black' /> Menu
						</Button>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Header
