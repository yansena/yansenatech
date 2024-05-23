'use client'
import React from 'react'
import { Box } from '@mui/material'
import { useRouter } from 'next/navigation'

export default function AccountMenu() {
  const router = useRouter()
  return (
    <React.Fragment>
      <Box className="flex flex-row items-center">
        <div className="flex flex-row gap-4">
          <div onClick={() => router.push('/about')}>Home</div>
          <div onClick={() => router.push('/about')}>About</div>
          <div onClick={() => router.push('/experience')}></div>
        </div>
      </Box>
    </React.Fragment>
  )
}
