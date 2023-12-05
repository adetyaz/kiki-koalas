export const Marquee = ({ marqueeText }: { marqueeText: string }) => {
	return (
		<section className='bg-[#F8D467] py-4 min-w-[200vw] border-b border-black'>
			<div className='font-barricada text-5xl '>
				<p>{marqueeText}</p>
			</div>
		</section>
	)
}
