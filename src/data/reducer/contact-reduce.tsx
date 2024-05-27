import { a } from 'vitest/dist/suite-IbNSsUWN.js'
import { ContactContextProps, FormDataProps } from '../context/contact'

interface ActionsProps {
  SENDEMAIL: 'SENDEMAIL'
  SETFORMDATA: 'SETFORMDATA'
  CHANGELOADING: 'CHANGELOADING'
}

interface PayloadProps {
  data: FormDataProps
  loading: boolean
}

interface ContactAction {
  type: ActionsProps
  payload: PayloadProps
}
