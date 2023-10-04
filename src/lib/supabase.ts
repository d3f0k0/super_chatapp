import { createClient, type User } from '@supabase/supabase-js'
import { writable } from 'svelte/store';

const supabaseUrl = 'https://povvskurhdjcsywspuyt.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY

export const sb = createClient(supabaseUrl, supabaseKey)

const defaultStore = {
    user: null,
    msg: []
}

export type store = {
    user: User,
    msg: Msg[]
}

export type Msg = {
    id: number,
    text: string,
    username: string
}

export const store = writable(defaultStore)

sb.auth.onAuthStateChange((event, session) => {
    if (event == 'SIGNED_IN') {
      store.update((oldStore) => {
        return {
          ...oldStore,
          user: session.user
        }
      })
    } else if (event == 'SIGNED_OUT') {
      store.set(defaultStore)
    }
  })

  export default {
    login: async () =>{
      const {data, error} = await sb.auth.signInWithOAuth({
        provider: 'google',
      })
    },
    logout: async () => {
      await sb.auth.signOut()
    },
  }
