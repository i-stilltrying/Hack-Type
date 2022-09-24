import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

const c=5


function App() {

  const [sourceCode, setsourceCode] = useState("");
  const [content, setContent] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    containerRef.current.focus();


    fetch('code.txt')
      .then((res) => res.text())
      .then((text) => setsourceCode(text));
  }, [])

  const runScript = () => {
    setCurrentIndex(currentIndex+c)
   setContent( sourceCode.substring(0,currentIndex))


  }
  const removeMessage = () => { window.location.reload(false)

  }

  const handleKeyDown = (e) => {
    if (e.key != 'Escape') runScript()
    else removeMessage()
  };




  return (<>
    <div className="container" onKeyDown={handleKeyDown} tabIndex={0} ref={containerRef}>

      <div id="source">
{content}
      </div>

    </div></>
  );
}

export default App;
