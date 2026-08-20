import Layout from './Layout.jsx'

function App() {
  return (
    <>
    {/*  */}
    <Layout />
      <section
        style={{color: 'red', backgroundColor: '#000'}}
        ><h2>hello react</h2></section>
      <h3>result :{10+20}</h3>
      <h3>{10>20 ? '참':'거짓'}</h3>
      <h4>{10<20 && <span>참일걸?</span>}</h4>
    </>
  )
}

export default App
