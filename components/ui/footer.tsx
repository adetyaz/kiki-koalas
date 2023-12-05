import Image from 'next/image'
import { Button } from './button'
import Link from 'next/link'

export const Footer = () => {
	return (
		<footer className='flex justify-between items-start bg-[#F8D467] py-4 px-4 md:px-28'>
			<div>
				<div className='flex gap-4'>
					<Image
						src='/images/logo.png'
						alt='logo'
						height={100}
						width={100}
						className='h-10 w-10'
					/>
					<h3 className='font-barricada text-3xl text-black'>kiki koalas</h3>
				</div>

				<div className='my-4 w-2/4'>
					<p>
						Kick back with 3,333 Kiki Koalas, as we create an ecosystem that
						forms a community beyond pixels.
					</p>
				</div>
				<nav>
					<ul className='flex gap-8'>
						<li>
							<Link href='/'>Home</Link>
						</li>
						<li>
							<Link href='/'>Art</Link>
						</li>
						<li>
							<Link href='/'>Team</Link>
						</li>
						<li>
							<Link href='/'>FAQs</Link>
						</li>
					</ul>
				</nav>
				<nav>
					<ul className='flex gap-8'>
						<li>
							<Link href='/'>Privacy policy</Link>
						</li>
						<li>
							<Link href='/'>Terms of service</Link>
						</li>
					</ul>
				</nav>
			</div>
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
				</ul>
			</nav>
		</footer>
	)
}
