import { axios } from '@/lib/axios'
import { defineStore } from 'pinia'

export type LoginMethod = 'password' | 'magic_link'

export type CheckResponse = {
  defaultLoginMethod: LoginMethod,
  email: string
}


export const useUserStore = defineStore('user', {
  persist: true,

  state: () => ({
    user: null,
    signupMail: '',
  }),

  actions: {
    check() {
      return axios.post('/v1/auth/check', { email: this.signupMail })
        .then(({ data }) => data as CheckResponse)
    },
    login(password: string, defaultToPassword: boolean) {
      return axios.post('/v1/auth/login', {
        email: this.signupMail,
        password,
        defaultToPassword,
      })
        .then(({ data }) => {
          // this.user = data
          return data
        })
    },

    /**
     * Start user register / signup flow
     */
    register(email: string) {
      return axios.post('/v1/auth/register', { email })
        .then(({ data }) => data as CheckResponse )
    },

    /**
     * Send magic link to user email, which can be used to login
     */
    sendMagicLink(email: string) {
      return axios.post('/v1/auth/magic_link', { email })
        .then(({ data }) => data)
    },

    /**
     * Login user with token from magic link
     */
    loginToken(token: string) {
      return axios
        .post('/v1/auth/token', { token })
        .then(({ data }) => {
          this.user = data
          return data
        })
    },

    // register(
    //   defaultLoginMethod: LoginMethod,
    //   password: string,
    //   password_repeat: string,
    // ) {
    //   return axios.post('/v1/auth/register', {
    //     email: this.signupMail,
    //     defaultLoginMethod,
    //     password,
    //     password_repeat,
    //   }).then(({ data }) => data)
    // },
  },
})
