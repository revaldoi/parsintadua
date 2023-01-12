import Button from "./Button"
import { useState } from "react"

export default function Counter({nilai}) {
    const [hitung, setHitung] = useState(nilai)
      
    function handleClick() {
        setHitung((nilai) => nilai + 1);
    }


    return (
        <div>
            <h1>{hitung}</h1>
            <Button onClick={handleClick}>+ 1</Button>
        </div>
    )
}