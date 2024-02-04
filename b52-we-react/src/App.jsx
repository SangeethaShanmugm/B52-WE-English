import './App.css'
import { useState } from "React"
import Props_state from './Props_state'
import LifeCycleA from './classcomponent/LifeCycleA'

function App() {
  //JS starts

  // const color = 'skyblue'
  const [color, setColor] = useState('skyblue')
  const [colorList, setColorList] = useState(["orange", "crimson", "pink"]) //Array od Strings

  const [show, setShow] = useState(true)

  const styles = {
    backgroundColor: color
  }
  // true => block => visible
  // false => none => hide

  // const pStyle = {
  //   display: show ? "block" : "none"
  // }

  //JS Ends
  //JSX starts
  return (
    <>
      <LifeCycleA />
    </>
  )
  //JSX ends
}




function ColorBox({ color }) {
  const styles = {
    width: "172px",
    height: "20px",
    backgroundColor: color,
    marginLeft: "8%",
    marginTop: "10px"
  }
  return (
    <div style={styles}></div>
  )
}




function Counter() {

  // let like = 0
  const [like, setLike] = useState(0)


  console.log("current Like", like)
  return (
    <div>
      {/* camelCase */}
      <button onClick={() => {
        setLike(like + 1);
        console.log(like)
      }}>Like {like}</button>
    </div>
  )
}



export default App