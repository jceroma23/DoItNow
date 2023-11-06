import { Center } from "@chakra-ui/react"
import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { verifyRoute } from "../util/APIroute"
import axios from "axios";


const VerifyPage = () => {
  const navigate = useNavigate()
  const { userId, EmailToken } = useParams();

    useEffect(() => {

      const verifying = async () => {
        try {
          if (userId && EmailToken) {
           const responseData = await axios.post(verifyRoute, {
              userID: userId,
              emailToken: EmailToken
            })
            alert('Done Verifying the user. Redirecting to Login Page. And Please re-login')
            navigate('/')
          }
        } catch (error) {
          const { message } = error.response.data;
          console.log(message)
        }
      };
      verifying();


    }, [])

  return (
    <Center mt='10'>
        Please Wait While Verifying.
    </Center>
  )
}

export default VerifyPage
