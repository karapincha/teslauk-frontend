import { useQuery } from '@apollo/client'
import { GET_CURRENT_USER } from '../../lib/graphql'

export const useLoggedInUser = () => {
  const { data, loading: isUserLoading, refetch: refetchUser } = useQuery(GET_CURRENT_USER)
  const { viewer } = data || {}

  return { user: viewer, refetchUser, isUserLoading }
}

export default useLoggedInUser
