import './header.modules.css'

export const Header = () => {
  return (
    <header class="header">
      <div class="width">
        <h1 class="to">준혁이에게 🎁</h1>

        <p>
          오빠 안녕, 우선은 32번째 생일 너무 축하해!<br />
          오늘은 벌써 3번째 함께하는 오빠의 생일이야 <br />
          세상이 나에게 아주 큰 선물을 준 날이지 ㅎㅎ
        </p>
        <p>
          생일을 맞아 오빠에게 좀 더 특별한 편지를 주고 싶더라구? <br />
          준혁이 덕분에 좀 더 나아진 코딩 실력과 요즘 물오른 나의 그림 실력을 결합해봤어 ㅎㅎ <br />

          <p className="sub">사실 예전에 작업했던 프로젝튼데 코드가 좀 개판이라 개선하면서(급하게해서 여전히 아쉽지만..) 내가 직접 그린 그림으로 의미있는 편지를 선물하고 싶었어 🎨</p>
        </p>
      </div>
    </header>
  )
}

export default Header