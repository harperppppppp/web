import './App.css'
import './test01/01-basic-types1.js'
import SimpleButton from './test01/SimpleButton'
import CustomButton from './test02/CustomButton.js'
import AlertBox from './test03/AlertBox.js'
import SelectBoxDemo from './test04/SelectBox.js'

function App() {
  return (
    <>
      <SimpleButton />
      <CustomButton label='저장하기' color='yellow' icon={true}/>
      <AlertBox message='데이터를 불러왔습니다' status='loading'/>
      <SelectBoxDemo />
    </>
  )
}

export default App