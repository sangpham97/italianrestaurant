import axios from 'axios'
import { LoginStart, LoginSuccess, LoginFailure } from './AuthAction'

export const LoginAction = async ({ email, password }, dispatch) => {
  dispatch(LoginStart())
  try {
    const res = await axios.post('/api/auth/login', { email, password })
    dispatch(LoginSuccess(res.data))
  } catch (err) {
    dispatch(LoginFailure())
  }
}
