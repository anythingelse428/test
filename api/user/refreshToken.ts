import { consola } from "consola"
import useAsyncQuery from "~/composables/useAsyncQuery"

export interface UserRefreshTokenResponse{
    access_token:string,
    username: string
    role: string
}
export default async function apiUserRefreshToken (refresh_token :string):Promise<UserRefreshTokenResponse> {
  return await useAsyncQuery(async ({ axios, path }) => {
    try {
      return await axios.post(path + '/user/RefreshToken', {
        tokenHash: refresh_token,
      })
    } catch (e) {
      consola.error('БОРОДА в рефреш апи ' + e)
    }
  })
}
