import  {useState} from 'react'

const useCounter = () => {
    const [count,setcount]=useState(0)
    function increment(){
        setcount(count+1)
    }
    function decrement(){
        setcount(count-1)
    }
    return [count,increment,decrement]
}

export default useCounter
