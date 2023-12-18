import Image from 'next/image'

export const ConnectSocials = () => {
	return (
		<section className='bg-white border-b border-black p-4 md:px-96 md:py-32'>
			<h2 className='text-5xl text-center font-barricada'>
				Supporting
				<span>
					<Image
						src='/images/grey-fur-2.png'
						alt='grey fur koala'
						height={50}
						width={50}
						className='inline-block'
					/>
				</span>
				with us
			</h2>
			<div className='flex justify-center gap-4'>
				<Image
					src='/images/twitter.png'
					alt='twitter'
					height={250}
					width={250}
				/>
				<Image
					src='/images/discord.png'
					alt='discord'
					height={250}
					width={250}
				/>
				<Image
					src='/images/telegram.png'
					alt='telegram'
					height={250}
					width={250}
				/>
			</div>
		</section>
	)
}
