import Image from 'next/image'
import { Button } from '../ui/button'

export const Collectible = () => {
	return (
		<section className='bg-[#D7F6CB] grid grid-cols-2 p-8 md:p-20 gap-x-12 border-b border-black'>
			<div className='place-self-end px-16'>
				<svg
					width='41'
					height='41'
					viewBox='0 0 41 41'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M36.0764 4.01528L21.974 20.3935M7.87153 36.7717L21.974 20.3935M21.974 20.3935L40.1543 20.0737M21.974 20.3935L0.160425 20.9354M21.974 20.3935L36.9377 34.9952M21.974 20.3935L5.92864 7.23402M21.974 20.3935L21.4599 0.160829M21.974 20.3935L21.3787 40.4875'
						stroke='#252525'
						stroke-width='4'
					/>
				</svg>
				<h2 className='font-barricada text-4xl'>A tangible kollectible</h2>
				<p className='my-8'>
					At Kiki Koalas, we believe in making your NFT ownership experience
					truly tangible. When you own a Kiki Koala, you unlock access to 3D
					files for endless creative possibilities.
				</p>
				<Button className='btn bg-white text-black rounded-full'>
					3d library
				</Button>
			</div>
			<div>
				<Image
					src='/images/white-koala.png'
					alt='whote koala'
					height={300}
					width={300}
				/>
				<Button className='btn bg-white rounded-full block mx-auto'>
					<svg
						width='40'
						height='25'
						viewBox='0 0 40 25'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M20 0C8.6 0 0 4.3 0 10C0 14.9 6.38 18.76 15.42 19.76L14.58 20.58C14.3925 20.7659 14.2438 20.9871 14.1422 21.2309C14.0407 21.4746 13.9884 21.736 13.9884 22C13.9884 22.264 14.0407 22.5254 14.1422 22.7692C14.2438 23.0129 14.3925 23.2341 14.58 23.42C14.7659 23.6075 14.9871 23.7562 15.2308 23.8578C15.4746 23.9593 15.736 24.0116 16 24.0116C16.264 24.0116 16.5254 23.9593 16.7692 23.8578C17.0129 23.7562 17.2341 23.6075 17.42 23.42L21.42 19.42C21.6021 19.2298 21.7448 19.0055 21.84 18.76C22.04 18.2731 22.04 17.7269 21.84 17.24C21.7448 16.9945 21.6021 16.7702 21.42 16.58L17.42 12.58C17.0434 12.2034 16.5326 11.9918 16 11.9918C15.4674 11.9918 14.9566 12.2034 14.58 12.58C14.2034 12.9566 13.9918 13.4674 13.9918 14C13.9918 14.5326 14.2034 15.0434 14.58 15.42L14.82 15.64C8 14.68 4 12 4 10C4 7.56 10.24 4 20 4C29.76 4 36 7.56 36 10C36 11.66 33.1 14 27.58 15.2C27.3187 15.2501 27.0701 15.3517 26.8486 15.4991C26.6271 15.6464 26.4372 15.8365 26.2901 16.0581C26.1429 16.2797 26.0415 16.5285 25.9917 16.7898C25.9419 17.0512 25.9447 17.3198 26 17.58C26.0546 17.8377 26.1596 18.082 26.3089 18.299C26.4582 18.516 26.6489 18.7014 26.87 18.8445C27.0912 18.9876 27.3384 19.0856 27.5975 19.1329C27.8567 19.1801 28.1226 19.1758 28.38 19.12C35.68 17.52 40 14.12 40 10C40 4.3 31.4 0 20 0Z'
							fill='#252525'
						/>
					</svg>
				</Button>
			</div>
		</section>
	)
}
