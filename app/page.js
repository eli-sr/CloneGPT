import Image from 'next/image'
import Header from './components/Header'
import ChatBar from './components/ChatBar'

export default function Home () {
  return (
    <div className='flex flex-col grow'>
      <Header />
      <main className='flex items-center justify-center grow'>
        <div className='flex flex-col w-full h-full lg:max-w-2xl xl:max-w-3xl'>
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
          <ChatBar />
        </div>
      </main>
    </div>
  )
}
