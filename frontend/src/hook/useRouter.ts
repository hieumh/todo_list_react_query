import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom"

export default function useRouter() {
  const { pathname } = useLocation()
  const params = useParams()
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate()

  return {
    pathname,
    navigate,
    params,
    searchParams,
    setSearchParams,
  }
}
