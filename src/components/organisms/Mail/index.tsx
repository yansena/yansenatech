'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'

const inputContainerStyle =
  'flex w-full flex-row items-center border-b border-gray-600 py-2'
const inputLabelStyle = 'mr-2 text-xl font-semibold text-indigo-50'
const inputStyle =
  'h-[4vh] w-full rounded-lg bg-transparent p-2 placeholder-gray-500 text-gray-50 outline-none autofill:bg-blue-600'

const mailFormSchema = z.object({
  name: z.string(),
  subject: z.string(),
  content: z.string(),
})

type MailFormSchema = z.infer<typeof mailFormSchema>

function Mail() {
  const [data, setData] = useState<MailFormSchema | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MailFormSchema>({
    resolver: zodResolver(mailFormSchema),
  })

  const onSubmit: SubmitHandler<MailFormSchema> = async (data) => {
    console.log(data)
  }

  const sendEmail = async () => {
    setLoading(true)

    fetch('/api/emails', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log('🚀 ~ .then - Main - Index ~ res:', res)
        res.json()
      })
      .then((data) => {
        setData(data)
      })
      .catch((error) => {
        console.error('🚀 ~ .catch ~ error:', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col overflow-hidden rounded-lg border border-gray-600 bg-gray-900/50 p-4 "
    >
      <div className={inputContainerStyle}>
        <label htmlFor="name" className={inputLabelStyle}>
          Nome:
        </label>
        <input
          {...register('name')}
          className={inputStyle}
          placeholder="Seu nome"
        />
      </div>
      <div className={inputContainerStyle}>
        <label htmlFor="name" className={inputLabelStyle}>
          Assunto:
        </label>
        <input
          {...register('subject')}
          className={inputStyle}
          placeholder="Qual o assunto?"
        />
      </div>
      <div className={inputContainerStyle}>
        <textarea
          className="text-secondary placeholder:text-medium-gray mb-6 mt-4 h-52 w-full resize-none rounded-xl bg-gray-500/30 p-6 text-base font-normal text-gray-300 outline-[0.5px] focus:outline focus:outline-gray-500 sm:h-80"
          {...register('content')}
          autoComplete="off"
          placeholder="Escreva sua mensagem aqui..."
          required
        />
      </div>
      {errors.name && <span>This field is required</span>}
      <div className="flex w-full flex-1 flex-row justify-end">
        <button
          onClick={sendEmail}
          className="mt-4 rounded-md border-gray-400 bg-slate-600/50 p-4 font-bold text-indigo-50 hover:bg-slate-500/40 hover:text-gray-300"
        >
          {loading ? 'fasdas' : `Enviar`}
        </button>
      </div>
    </form>
  )
}

export default Mail