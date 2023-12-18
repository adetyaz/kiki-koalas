import Image from 'next/image'
import { Button } from '../../ui/button'

export const Dedication = () => {
	return (
		<section className='grid grid-cols-2 gap-x-16 p-8 md:py-40 md:px-48  bg-[#CAF2FF] border-b border-black'>
			<Image
				src='/images/dialog-koala.png'
				alt='dialog koala'
				height={300}
				width={300}
				className='place-self-end'
			/>
			<div className='basis-2/5'>
				<h2 className='text-5xl font-barricada mb-8'>Pixel-by-pixel</h2>
				<p>
					Our 3D art is a testament to craftsmanship and dedication. We didn't
					rely on artificial intelligence; instead, every pixel was meticulously
					hand-drawn with care and precision, one cursor click at a time.
				</p>
				<p>
					Countless hours were poured into crafting each detail, ensuring that
					every Kiki Koala in the Kiki Kollective capture the labour of love.
				</p>
				<Button className='mt-4 btn bg-white text-black rounded-full'>
					Learn ABOUT THE ART
				</Button>
			</div>
		</section>
	)
}
