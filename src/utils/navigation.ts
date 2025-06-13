import { useRouter, useParams as nextUseParams } from 'next/navigation'

export default function useNavigate() {
  const router = useRouter()
  return (url) => router.push(url)
}

export const useParams = () => nextUseParams()
