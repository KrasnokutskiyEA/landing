'use client'

import React, { useEffect, useState } from 'react'
import { useFormState } from 'react-dom'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail'
import SubmitBtn from './submit-btn'
import toast from 'react-hot-toast'

export default function Contact(): React.ReactElement {
  const { ref } = useSectionInView('Contact', '#contact')
  const [formState, setFormState] = useState({ isError: false, message: '' })
  const [state, formAction] = useFormState(sendEmail, formState)

  function resetFormState(): void {
    setFormState({ isError: false, message: '' })
  }

  useEffect(() => {
    if (state.isError || state.message !== '') {
      state.isError ? toast.error(state.message) : toast.success(state.message)
    }
    resetFormState()
  }, [state])

  return (
    <motion.section
      id='contact'
      ref={ref}
      className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1
      }}
      viewport={{
        once: true
      }}
    >
      <SectionHeading>Contact us</SectionHeading>

      <p className='text-gray-700 -mt-6 dark:text-white/80'>
        Please contact me directly at{' '}
        <a className='underline' href='mailto:KrasnokutskiyEA@yandex.ru'>
          KrasnokutskiyEA@yandex.ru
        </a>{' '}
        or through this form.
      </p>

      <form
        className='mt-10 flex flex-col dark:text-black'
        action={formAction}
      >
        <input
          className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          name='senderEmail'
          type='email'
          required
          maxLength={500}
          placeholder='Your email'
        />
        <textarea
          className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          name='message'
          placeholder='Your message'
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  )
}
