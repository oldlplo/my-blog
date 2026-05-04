import './App.css'
import { useState } from 'react'
function App() {
  /* 1. 상태 관리 로직
    '응원수'를 실시간으로 업데이트하고 화면에 반영하기 위해 useState 사용
    useState는 변수의 값이 변할 때마다 React가 UI를 자동으로 다시 그려주도록(= 리렌더링) 만든다.*/
  const [count, setCount] = useState(0); 
  return (
    <div className="container">
      {/* 2. 페이지 헤더 : 블로그 제목 표시 */}
      <header className="header">
        <h1>@oldlpo의 블로그</h1>
      </header>
      {/* 3. 메인 콘텐츠 : 사용자의 이미지와 자기소개 글이 적힌 본문 영역 */}
    <main className="main">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqVd96Tqs1g94nmWekCqEnqVPWl3ATsN1mdC639VCFuLVAW1p7glGg_Ydflc-R7vTSjvvqvLFpfZogMaQu1PniSTs8vRyq998RjGPH_GQT&s=10"
        alt="블로그 메인 이미지"
        className="main-image"/>
      <div className='text'>
        <p> 
          안녕하세요. 저는 전북대학교 소프트웨어공학과에 2학년으로 재학중인 조성은입니다<br></br>
          이번주는 과제 지옥에서 살았습니다<br></br>
          그래도 벚꽃은 봤습니다<br></br>
          매일 꽃구경만 다니고 싶어요<br></br>
          제가 왜 6전공을 했을까요? 저는 감자인데 교수님은 왜 감자한테 과제를 시키는 거죠?<br></br>
        </p>
        {/* 4. 방문자와 상호작용 및 상태 변경 기능 
          방문자의 클릭 이벤트(응원버튼)를 감지해 알림을 띄우고 카운트 상태를 1 증가시킴*/}
        <p>현재 응원 수: {count}번</p>
        <p>
          <button onClick={() => {alert('응원 감사합니다!'); setCount(count + 1);}}>응원!</button>
        </p>
      </div>
    </main>
    </div>
  )
}

export default App