import { useState } from 'react'
import './App.css'
import Child from './components/Child'
import Child2 from './components/Child2'
import Child3 from './components/Child3'
import StyledChild from './components/StyledChild'
import StyledChild2 from './components/StyledChild2'
import Emotion from './components/Emotion'
import love from './assets/images/양갱이.jpg'

function App() {
  const styles = {
    backgroundColor: 'blue',
    color: '#fff',
    fontSize: '30px',
    padding: '10px',
  }
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 style={styles}>Inline Style</h1>
      <button className='btn'>app button</button>
      <Child />
      <Child2 />
      <Child3 />
      <hr/>
      <StyledChild />
      <StyledChild2 />
      <Emotion />
      <hr />
      <div>
        <button className ='bg-transparent'>테일윈드</button>
      </div>
      <img src={love} alt='내사랑' className='img600'/>
      <div className='img2'></div>
      <div style={{width:'300px', height:'300px', 
        background: `url(${love}) center/cover`}}></div>
        <p>
          양갱이귀여워장모치와와인줄알았는데잡종이었던양갱이귀여워
        </p>
    </>
  )
}

export default App
