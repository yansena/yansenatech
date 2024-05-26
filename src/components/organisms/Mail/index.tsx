'use client'

import { z } from 'zod'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { CircularProgress } from '@mui/material'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'

const inputContainerStyle =
  'flex w-full flex-row items-center border-b border-gray-600 py-2'
const inputLabelStyle = 'mr-2 text-xl font-semibold text-indigo-50'
const inputStyle =
  'h-[4vh] w-full rounded-lg bg-transparent p-2 placeholder-gray-500 text-gray-50 outline-none autofill:bg-blue-600'

const mailFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  content: z.string(),
})

type MailFormSchema = z.infer<typeof mailFormSchema>

function Mail() {
  const [loading, setLoading] = useState<boolean>(false)

  const t = useTranslations('Contact')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MailFormSchema>({
    resolver: zodResolver(mailFormSchema),
  })

  const onSubmit: SubmitHandler<MailFormSchema> = async (data) => {
    // e.preventDefault()
    fetch('/api/emails', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then()
      .catch()
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col overflow-hidden rounded-lg border border-gray-600 bg-gray-900/50 p-4 "
    >
      <motion.div
        className={inputContainerStyle}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <label htmlFor="name" className={inputLabelStyle}>
          {t('formName')}
        </label>
        <input
          {...register('name')}
          className={inputStyle}
          placeholder={t('formNameLabel')}
        />
      </motion.div>
      <motion.div
        className={inputContainerStyle}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <label htmlFor="email" className={inputLabelStyle}>
          {t('formEmail')}
        </label>
        <input
          {...register('email')}
          className={inputStyle}
          placeholder={t('formEmailLabel')}
        />
      </motion.div>
      <motion.div
        className={inputContainerStyle}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <label htmlFor="name" className={inputLabelStyle}>
          {t('formSubject')}
        </label>
        <input
          {...register('subject')}
          className={inputStyle}
          placeholder={t('formSubjectLabel')}
        />
      </motion.div>
      <motion.div
        className={inputContainerStyle}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <textarea
          className="text-secondary placeholder:text-medium-gray mb-6 mt-4 h-52 w-full resize-none rounded-xl bg-gray-500/30 p-6 text-base font-normal text-gray-300 outline-[0.5px] focus:outline focus:outline-gray-500 sm:h-80"
          {...register('content')}
          autoComplete="off"
          placeholder={t('formMessage')}
          required
        />
      </motion.div>
      {errors.name && <span>This field is required</span>}
      <div className="flex w-full flex-1 flex-row justify-end">
        <motion.button
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          type="submit"
          className="mt-4 rounded-md border-gray-400 bg-slate-600/50 p-4 font-bold text-indigo-50 hover:bg-slate-500/40 hover:text-gray-300"
        >
          {loading ? (
            <CircularProgress color="inherit" />
          ) : (
            `${t('formTitleButton')}`
          )}
        </motion.button>
      </div>
    </form>
  )
}

export default Mail
