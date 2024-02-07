export default function ChatBar () {
  return (
    <div className='flex flex-col items-center justify-center px-4'>
      <div className='flex w-full p-4 border border-gray-500 rounded-2xl'>
        <input
          type='text'
          placeholder='Message ChatGPT...'
          className='bg-transparent outline-none grow'
          autoFocus
        />
      </div>
      <span className='p-2 text-xs text-gray-300'>ChatGPT can make mistakes. Consider checking important information.</span>
    </div>
  )
}
