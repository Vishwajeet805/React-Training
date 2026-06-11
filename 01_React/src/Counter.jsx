import { useState } from "react";

function useCounter(data=0){
    const [count, setCount] = useState(data)
    const inc=()=>setCount(count+1)
    const dec=()=>setCount(count-1)
    const reset=()=>setCount(0)
    return {count,inc,dec,reset}
}
export default useCounter