import React from 'react';

const App = () => {
  return (
    <main className="py-4 px-8">
      <div className="my-20 mx-auto w-full sm:w-9/12 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
        <div className="flex items-center" data-aos="fade-right">
          <h4 className="text-3xl font-medium">About Me</h4>
        </div>
        <ul className="list-disc" data-aos="fade-left">
          <li>안녕하세요! 주니어 프론트엔드 개발자 김제형입니다.</li>
          <li>
            오늘 보다 더 나은 사람이 되기 위해서 노력해왔습니다. 그러면서 자연스럽게 개발자의 매력에
            빠지게 되었습니다.
          </li>
          <li>성능 최적화에 대한 고민을 생활화합니다.</li>
          <li>Always 신기술이 아닌, Why 신기술이 저의 개발 철학입니다.</li>
          <li>클린코드를 작성하려고 노력합니다.</li>
        </ul>
      </div>
      <div className="my-20 w-full mx-auto sm:w-9/12" data-aos="fade-right">
        <h4 className="text-3xl font-medium">Skills</h4>
        <hr className="my-4" />
        <div className="grid gap-y-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
            <div className="flex items-center">
              <h5 className="text-2xl font-medium">FrontEnd</h5>
            </div>
            <ul className="list-disc">
              <li>HTML, CSS, JS</li>
              <li>React(Class, Hooks), React-Native, NextJS, Vue</li>
              <li>Typescript, Redux, Redux-Saga, Redux-Thunk, Vuex, SWR, Jest</li>
              <li>SASS, Styled Components, Material UI, Bootstrap, TailwindCSS</li>
              <li>SocketIO, D3.js, Chart.js, Firebase</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
            <div className="flex items-center">
              <h5 className="text-2xl font-medium">BackEnd</h5>
            </div>
            <ul className="list-disc">
              <li>NodeJS, ExpressJS</li>
              <li>MySQL, MongoDB</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
            <div className="flex items-center">
              <h5 className="text-2xl font-medium">DevOps</h5>
            </div>
            <ul className="list-disc">
              <li>AWS(EC2, S3, Amplify)</li>
              <li>Jenkins</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
            <div className="flex items-center">
              <h5 className="text-2xl font-medium">Collaboration & Tools</h5>
            </div>
            <ul className="list-disc">
              <li>Jira & Wiki Confluence, Notion</li>
              <li>Slack</li>
              <li>Git, Github</li>
              <li>Webstorm</li>
              <li>Figma, Zeplin</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="my-20 w-full mx-auto sm:w-9/12" data-aos="fade-right">
        <h4 className="text-3xl font-medium">Work Experience</h4>
        <hr className="my-4" />
        <div className="grid gap-y-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
            <div className="flex flex-col justify-center">
              <h5 className="text-2xl font-medium">비씨랩스 개발팀</h5>
              <h6 className="text-1xl font-medium">2020.12 ~ </h6>
              <h6 className="text-1xl font-medium">
                매매전략 오픈마켓플레이스 PlayV 웹서비스 개발
              </h6>
              <a
                href="https://playv.co"
                className="underline text-gray-300 hover:text-gray-500"
                target="_blank"
                rel="noreferrer"
              >
                https://playv.co
              </a>
            </div>
            <ul className="list-disc">
              <li>
                프로젝트 설명
                <ul>
                  <li>
                    바이낸스(Binance) 거래소 기반 가상 자산 투자 웹서비스 가상 자산 펀드 트레이더를
                    위한 가상 자산 트레이딩 서비스와 일반 투자자를 위한 가상 자산 펀드 상품 투자
                    오픈마켓플레이스 개발하고 운영함
                  </li>
                </ul>
              </li>
              <li>
                사용 기술
                <ul>
                  <li>React, Typescript, Redux, Redux-Saga, SWR</li>
                  <li>Websocket, D3.js, Chart.js</li>
                  <li>Material UI, Bootstrap</li>
                  <li>AWS Amplify</li>
                  <li>Jira, Confluence, Zeplin</li>
                </ul>
              </li>
              <li>
                성과
                <ul className="list-decimal ml-4">
                  <li>클로즈 베타 서비스 완료(2021.8 - 9월)</li>
                  <li>서비스 오픈 및 운영 (2021.11월 - 현재)</li>
                  <li>NFT 부산 2021, 스타트업 IR 대상 수상 (2021년 11월)</li>
                  <li>
                    PlayV Run 대회 성공적 운영
                    <a
                      href="https://static.playv.co/page/playv-run-main/index.html?utm_source=marketplaceplace-p[%E2%80%A6]e-popup&utm_id=marketplaceplace-popup-to-event-main-playv-run"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-300 hover:text-gray-500"
                    >
                      (참고)
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                주요 업무
                <ul className="list-decimal ml-4">
                  <li>참여인원 3명, 백엔드 2명, 프론트엔드 1명</li>
                  <li>회원 가입, SMS/OPT 인증 기능 개발</li>
                  <li>펀드 상품 조회 및 펀드 상품 구매/판매 기능 개발</li>
                  <li>
                    트레이더 터미널 개발
                    <ul className="list-disc ml-4">
                      <li>
                        바이낸스 마켓 실시간 자산 정보를 WebSocket 연동 및 TradingView 세부 기능
                        개발
                      </li>
                      <li>바이낸스 마켓 현물 주문 기능 개발</li>
                      <li>운용 펀드 자산 정보 조회 및 통계 차트 개발</li>
                    </ul>
                  </li>
                  <li>클로즈베타 이후, 웹프론트 반응형 웹으로 리뉴얼 개발</li>
                  <li>
                    웹서비스 운영
                    <ul className="list-disc ml-4">
                      <li>SEO 최적화</li>
                      <li>성능 최적화</li>
                      <li>i18n으로 국제화 작업</li>
                      <li>Sentry 기반 웹 프론트 이슈 트래킹 및 안정화</li>
                      <li>API 서버 연동 이슈 발생 시, Slack 알림 연동을 통한 빠른 이슈 대응</li>
                      <li>
                        Jenkins기반의 CI/CD 환경을 AWS Amplify 환경으로 이전을 통한 개발환경 개선
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="my-20 w-full mx-auto sm:w-9/12" data-aos="fade-right">
        <h4 className="text-3xl font-medium">Education</h4>
        <hr className="my-4" />
        <div className="grid gap-y-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
            <div className="flex flex-col justify-center">
              <h5 className="text-2xl font-medium">단국대학교 소프트웨어학과</h5>
              <h6 className="text-1xl font-medium">2014.03 ~ 2021.02</h6>
            </div>
            <ul className="list-disc">
              <li>학점: 3.89 (전공: 3.94)</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="my-20 w-full mx-auto sm:w-9/12" data-aos="fade-right">
        <h4 className="text-3xl font-medium">Contact</h4>
        <hr className="my-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
          <div className="flex flex-col gap-y-4">
            <a
              className="text-2xl font-medium underline hover:text-gray-300"
              href="https://github.com/Muscardinus94"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              className="text-2xl font-medium underline hover:text-gray-300"
              href="https://muscardinus.tistory.com/"
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </a>
            <a
              className="text-2xl font-medium underline hover:text-gray-300"
              href="https://courageous-gastonia-589.notion.site/24df0957b45141959c6fbe1d452ff422"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
