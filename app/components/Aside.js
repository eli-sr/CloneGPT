import { Button } from '@nextui-org/react'
import Image from 'next/image'

function NewChatButton () {
  return (
    <Button
      fullWidth
      variant='light'
      className='justify-start font-semibold text-white rounded-lg'
    >
      <figure className='p-1 bg-white rounded-full'>
        <Image
          src='https://www.svgrepo.com/show/306500/openai.svg'
          width={20}
          height={20}
          alt='OpenAI logo'
        />
      </figure>
      <span className='text-left grow'>New chat</span>
      ico
    </Button>
  )
}

export default function Aside () {
  return (
    <aside className='bg-black min-w-[260px] p-3'>
      <NewChatButton />
    </aside>
  )
}
