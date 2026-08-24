import Login from "./Login";
import Logout from "./Logout";

export default function Layout(){
  const isLogin = false;
  const str = '7시간남음'
  const isActive = false;
  const test = !isLogin && <Logout />;
  return(
    <>
    <hr/>
    {isLogin ? <h1>환영합니다{str}</h1>:<h1>거짓{isLogin}</h1>}
    <div style = {{
      background: isActive ? 'blue' : 'yellow',
    }} className={`main ${isActive ? 'active':'inactive'}`}>
      {isLogin ? <Login /> : <Logout />}
    </div>
    <hr/>
    <div style = {{background:'pink'}}>
      {/* 여러개넣을경우 프레그먼트사용 */}
      {isLogin && (<><Login /><Login /></>)} 
      {test}
    </div>
    </>
  )
}