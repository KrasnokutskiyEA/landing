'use server'

import React from 'react'
import { Resend } from 'resend'
import { validateString, getErrorMessage } from '@/lib/utils'
import ContactFormEmail from '@/email/contact-form-email'

const resend = new Resend(process.env.RESEND_API_KEY)

interface IEmail {
  isError: boolean
  message: string
}

export async function sendEmail (prevState: IEmail, formData: FormData): Promise<IEmail> {
  const senderEmail = formData.get('senderEmail')
  const message = formData.get('message')

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      isError: true,
      message: 'Invalid sender email'
    }
  }
  if (!validateString(message, 5000)) {
    return {
      isError: true,
      message: 'Invalid message'
    }
  }

  try {
    const resp = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'krasnokutskiyea@yandex.ru',
      subject: 'Message from contact form',
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message,
        senderEmail
      })
    })

    if (resp.error !== null) {
      return { isError: true, message: getErrorMessage(resp.error) }
    }
    return { isError: false, message: 'Email sent successfully!' }
  } catch (error: unknown) {
    return { isError: true, message: getErrorMessage(error) }
  }
}
