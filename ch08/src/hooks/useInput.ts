import { useState } from "react";

export default function useInput(innitialValue = ''){
  const [value,setValue] = useState(innitialValue);
  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

    }
    return{value,onChange}
}