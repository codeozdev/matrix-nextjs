export default function Contact() {
  return (
    <div className='w-full h-[calc(100vh-74px)] sm:h-[calc(100vh-77px)] sm:pb-32 flex'>
      <form className='flex flex-col items-center justify-center gap-5 w-full  h-full'>
        <h1>Contact</h1>
        <input type='text' placeholder='Email' />
        <input type='text' placeholder='Name' />
        <textarea
          rows='5'
          placeholder='Text Area'
          className='resize-none outline-0 sm:font-bold placeholder-green-600 p-1 sm:p-3 border text-gray-700 sm:w-1/4'
        />
        <button className='py-2 sm:py-4 rounded-lg sm:font-bold bg-green-600 w-fit mx-auto px-10 hover:bg-red-600'>
          Send
        </button>
      </form>
    </div>
  )
}
