import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '봄옷 신상', '리액트 꿈나무']);
  let [좋아요, 좋아요변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false)
  let [title, setTitle] = useState(0)
  let [입력값, 입력값변경] = useState('')

  const writeHandler = () => {
    const 글추가 = [...글제목]
    글추가.unshift(입력값)
    글제목변경(글추가)
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>Saem's Blog</h4>
      </div>
      {
        글제목.map(function (a, i) {
          return (
            <div className='list' key={i}>
              <h4 onClick={() => {
                setModal(true)
                setTitle(i)
              }}>
                {글제목[i]}
                <span onClick={(e) => {
                  e.stopPropagation() // event 버블링 막는 메소드
                  let copy = [...좋아요]
                  copy[i] = copy[i] + 1
                  좋아요변경(copy)
                }}>👍</span> {좋아요[i]} </h4>
              <p>4월 14일 발행</p>
              <button onClick={() => {
                let 글삭제 = [...글제목]
                글삭제.splice(i, 1)
                글제목변경(글삭제)
              }}>삭제</button>
            </div>
          )
        })
      }

      <input type='text' onChange={(e) => {
        입력값변경(e.target.value)
      }} />
      <button onClick={writeHandler}>작성</button>

      {
        modal === true ? <Modal 글제목={글제목}
          글제목변경={글제목변경} title={title} /> : null
      }
    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
