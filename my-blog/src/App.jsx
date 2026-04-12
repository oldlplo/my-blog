import './App.css'
function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>@oldlpo의 블로그</h1>
      </header>

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
          제가 왜 6전공을 했을까요? 저는 감자인데 교수님은 왜 감자한테 과제를 시키는 거죠?<be></be>
        </p>
        <p>
          <button onClick={() => alert('응원 감사합니다!')}>응원!</button>
        </p>
      </div>
    </main>
    </div>
  )
}

export default App