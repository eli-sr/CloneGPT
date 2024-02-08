'use client'

import { Button } from '@nextui-org/react'
import Image from 'next/image'
import chats from '../mocks/chats.json'
import { getPreviousTime } from '../util/functions'
import { useEffect, useState } from 'react'

function NewChatButton () {
  return (
    <div className='sticky top-0 z-10 mb-7'>
      <Button
        fullWidth
        variant='light'
        className='justify-start px-2 font-semibold text-white rounded-lg'
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
    </div>
  )
}

function ChatLink ({ chat }) {
  return (
    <Button
      fullWidth
      variant='light'
      className='px-2 text-white rounded-lg h-9'
    >
      <span className='overflow-hidden'>{chat.title}</span>
    </Button>
  )
}

function ChatTimeBlock ({ list, header }) {
  return (
    <>
      {list.length !== 0
        ? (
          <div className='mb-4'>
            <span className='pl-2 text-xs font-semibold text-white opacity-60'>{header}</span>
            <ul className='mt-1'>
              {list.map((chat) => {
                return <li key={chat.id}><ChatLink chat={chat} /></li>
              })}
            </ul>
          </div>
          )
        : null}
    </>
  )
}

function ChatList () {
  const [today, setToday] = useState([])
  const [yesterday, setYesterday] = useState([])
  const [week, setWeek] = useState([])
  const [month, setMonth] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const dateFun = {
      0: [],
      1: [],
      7: [],
      30: []
    }
    chats.forEach(chat => {
      const n = getPreviousTime(chat.date)
      dateFun[n].push(chat)
    })
    setToday(dateFun[0])
    setYesterday(dateFun[1])
    setWeek(dateFun[7])
    setMonth(dateFun[30])
    setLoading(false)
  }, [])

  return (
    <div>
      <ChatTimeBlock list={today} header='Today' />
      <ChatTimeBlock list={yesterday} header='Yesterday' />
      <ChatTimeBlock list={week} header='Previous 7 days' />
      <ChatTimeBlock list={month} header='Previous 30 days' />
    </div>
  )
}

function User () {
  return (
    <div className='p-3'>
      <Button
        fullWidth
        variant='light'
        className='justify-start px-2 text-white rounded-lg'
      >
        <figure className='p-1 bg-white rounded-full'>
          <Image
            src='https://www.svgrepo.com/show/306500/openai.svg'
            width={20}
            height={20}
            alt='OpenAI logo'
          />
        </figure>
        <span className='text-left'>User</span>
      </Button>
    </div>
  )
}

export default function Aside () {
  return (
    <aside className='bg-black min-w-[260px] w-[260px] h-full flex flex-col'>
      <div className='p-3 overflow-y-auto grow'>
        <NewChatButton />
        <ChatList />
      </div>
      <User />
    </aside>
  )
}
