import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#fafafa] flex flex-col justify-center items-center p-4'>

        <div className='flex flex-col mx-auto max-w-[600px] w-full pb-4'>
          <div className='text-center '>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-black'>
              Contact
            </p>
            <p className='text-black py-4'>
              Submit the form below or<br></br>
              send me an email - daichi16daichi04@icloud.com
            </p>
          </div>
        </div>
        <form method='POST' action="https://getform.io/f/72a4c774-1bbe-4286-88f8-77f9a100c4ad" className='flex flex-col mx-auto max-w-[600px] w-full'>

            <input className='p-2 border-2 rounded-md' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 border-2 rounded-md' type="email" placeholder='Email' name='email' />
            <textarea className='p-2 border-2 rounded-md' name="message" rows="10" placeholder='Message'></textarea>
            <button className='bg-pink-600 border-pink-600 text-white font-bold text-xl px-10 border-2 rounded-md hover:bg-white hover:text-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>
              Send
            </button>
        </form>
    </div>
  )
}

export default Contact