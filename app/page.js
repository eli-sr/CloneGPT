import Image from 'next/image'

export default function Home () {
  return (
    <div className='flex flex-col items-center justify-center grow'>
      <figure className='p-2 mb-4 bg-white rounded-full'>
        <Image
          src='https://www.svgrepo.com/show/306500/openai.svg'
          width={30}
          height={30}
          alt='OpenAI logo'
        />
      </figure>
      <span className='text-2xl font-semibold'>How can I help you today?</span>
    </div>
  )
}
