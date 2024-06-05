import { getBytes } from 'firebase/storage'
import { invitationDataRef } from './firebase'
import { InvitationUserData } from './types/user'

export const getUsersData = async (): Promise<Record<string, InvitationUserData>> => {
    try {
        const strData = await getBytes(invitationDataRef).then(buffer => Buffer.from(buffer).toString('utf-8'))
        return JSON.parse(strData)
    } catch (error) {
        console.error('Error getting users data', error)
        return {}
    }
}
