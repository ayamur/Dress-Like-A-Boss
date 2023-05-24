import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import * as quizService from '../../services/quizService'

const QuizResults = (props) => {
  const { results } = useParams()
  const [result, setResult] = useState(null)

  useEffect(() => {
    const fetchResult = async () => {
      const data = await quizService.show(results)
      setResult(data)
    }
    fetchResult()
  }, [results])

  return (
    <>
      <main>
        <div className='quizResults'>
          <img src='/icons/Food.png' alt='' />
          <h4>Quiz Results:</h4>
          {/* <h4>{quiz?.result?.toUpperCase()}</h4> */}
        </div>
      </main>
    </>
  )
}

export default QuizResults