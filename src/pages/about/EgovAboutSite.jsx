import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { default as EgovLeftNav } from "components/leftmenu/EgovLeftNavAbout";
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaJava } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
function EgovAboutSite() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const iconSize = windowWidth <= 800 ? 50 : 80;
  return (
    <div className="container">
      <div className="c_wrap">
        {/* <!-- Location --> */}
        <div className="location">
          <ul>
            <li>
              <Link to="" className="home">
                Home
              </Link>
            </li>
            <li>
              <Link to="">사이트 소개</Link>
            </li>
            <li>소개</li>
          </ul>
        </div>
        {/* <!--// Location --> */}

        <div className="layout">
          {/* <!-- Navigation --> */}
          <EgovLeftNav></EgovLeftNav>
          {/* <!--// Navigation --> */}

          <div className="contents SITE_INTRO" id="contents">
            {/* <!-- 본문 --> */}

            <h1 className="tit_3">사이트 소개</h1>

            <p className="txt_1">
              풀스택 개발자 이세란의 프로필과 프로젝트 수행이력,
              <br />
              그리고 구현 가능 한 기술을 체험 할 수 있는 사이트 입니다.
            </p>

            <h2 className="tit_4">Hello, I'm GRIT Rans</h2>

            <h3 className="tit_5"></h3>

            <p className="msg_1">
              GRIT은 성장(Growth), 회복력(Resilience), 내재적 동기(Intrinsic
              Motivation), 끈기(Tenacity)의 앞글자를 따서 만든 단어로, 어떤 역경
              속에서도 포기 하지 않는 능력을 말합니다.
              <br />
              저는 GRIT 한 사람입니다.
              <br />
            </p>

            <div className="ds_1">
              <h4 className="t_1">Skills & Attributes</h4>
              <ul className="li_1">
                <li>
                  <AiOutlineJavaScript
                    style={{ width: `${iconSize}px`, height: "auto" }}
                    className="major_icon_js"
                  />
                  <br />
                </li>
                <li>
                  <FaJava
                    style={{ width: `${iconSize}px`, height: "auto" }}
                    className="major_icon"
                  />
                  <br />
                </li>
                <li>
                  <FaGithub
                    style={{ width: `${iconSize}px`, height: "auto" }}
                    className="major_icon"
                  />
                  <br />
                </li>
              </ul>
              <div className="bot">
                {/* <p className="t_3">front-end</p> */}
                <ul>
                  <li>
                    <span>HTML, CSS, JavaScript, React, Vue, TypeScript</span>
                  </li>
                  <li>
                    <span>
                      Java, Spring Boot, MyBatis
                      <br />
                      JPA, Apache Tomcat, Sql
                    </span>
                  </li>
                  <li>
                    <span>
                      Git, notion, jira
                      <br />
                      confluence, jenkins
                      <br />
                      docker
                    </span>
                  </li>
                </ul>

                {/* <p className="t_4">
                  전자정부표준프레임워크는 응용SW의 구성기반이 되며 응용SW실행
                  시 필요한 기본 기능을 제공하는 환경으로 정보시스템 구축 시
                  특정 대기업의 프레임워크로 구축·운영되어, 사업자 종속-비용증가
                  및 중소기업의 입찰제한 등의 폐단이 발생하는 것을 방지하기 위한
                  목적과 ‘전자정부 서비스의 품질향상 및 정보화 투자 효율성
                  향상’을 위해 개발 프레임워크 표준을 정립하고, 개발 프레임워크
                  표준 적용을 통한 응용 SW의 표준화 및 품질과 재사용성 향상을
                  목표로 한다.
                </p>
              </div>
              <p className="t_2">
                전자정부표준프레임워크
                <br />
                활용
              </p>
              <div className="bot">
                <h4 className="t_3">
                  전자정부표준프레임워크 구축 및 적용 요구
                </h4>
                <ul>
                  <li>
                    <span>
                      HTML, CSS, JavaScript,
                      <br />
                      React, Vue, TypeScript
                      <br />
                      변경 시 예산낭비
                    </span>
                  </li>
                  <li>
                    <span>
                      기관별/사업별 개별적인
                      <br />
                      정보화 사업추진으로 중복개발
                    </span>
                  </li>
                  <li>
                    <span>
                      표준화된 공통 개발기반 부재로
                      <br />
                      시스템간 상호 운용성 및<br />
                      재사용성 저하
                    </span>
                  </li>
                </ul> */}
                <h4 className="t_1">Employment History</h4>
                <div className="about_jobs">
                  <div className="job">
                    <img
                      src="/assets/images/jenix_logo.png"
                      alt="jenix"
                      className="job_logo"
                    />
                    <div className="job_description">
                      <p className="job_name">
                        <br />
                        si 파견 업무 수행
                      </p>
                      <p className="job_period">2023.09 ~ 2024.03</p>
                    </div>
                  </div>
                  <div className="job">
                    <img
                      src="/assets/images/ksomo_logo.png"
                      alt="kosmo"
                      className="job_logo"
                    />
                    <div className="job_description">
                      <p className="job_name">
                        <br />
                        si 파견 업무 수행
                      </p>
                      <p className="job_period">2022.04 ~ 2023.05</p>
                    </div>
                  </div>
                  <div className="job">
                    <img
                      src="/assets/images/JK_CO_qlemspt.png"
                      alt="CNB"
                      className="job_logo"
                    />
                    <div className="job_description">
                      <p className="job_name">
                        <br />
                        Oz-report, eform과 JavaScript를 이용한 전자서식 개발
                      </p>
                      <p className="job_period">2021.10 ~ 2022.01</p>
                    </div>
                  </div>
                  <div className="job">
                    <img
                      src="/assets/images/n_logo.png"
                      alt="acon"
                      className="job_logo"
                    />
                    <div className="job_description">
                      <p className="job_name">
                        <br />
                        Web 기반 프론트엔드 개발자 양성과정(NCS) 수료
                      </p>
                      <p class="job_period">2021.04.05 ~ 2022.09.13</p>
                    </div>
                  </div>
                </div>
                <h4 className="t_1">Work Experience</h4>

                <div>
                  <div>
                    <div>
                      <dl>
                        <dt>프로젝트명</dt>
                        <dd>CJ프레시웨이 FS 메뉴관리 시스템 개발</dd>
                        <dd>회사 홈페이지 마이그레이션</dd>
                      </dl>
                      <dl>
                        <dt>기간</dt>
                        <dd>2023-09-21 ~ 2023-12-10</dd>
                        <dd>2023-12-14 ~ 2024-01-18</dd>
                      </dl>
                      <dl>
                        <dt>기술스택</dt>
                        <dd>
                          java / spring / postgresql / react / redmine / git
                        </dd>
                        <dd>TypeScript / react / notion / git</dd>
                      </dl>
                      <dl>
                        <dt>담당업무</dt>
                        <dd>화면개발</dd>
                        <dd>화면개발</dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <br />
                <div className="board_view2">
                  <div className="info2">
                    <div className="right_col">
                      <dl>
                        <dt>프로젝트명</dt>
                        <dd>현대제철 전자상거래 플랫폼 구축</dd>
                        <dd>kt mbs 시스템 추가 개발</dd>
                      </dl>
                      <dl>
                        <dt>기간</dt>
                        <dd>2023-01-01 ~ 2023-04-01</dd>
                        <dd>2022-09-01 ~ 2022-12-01</dd>
                      </dl>
                      <dl>
                        <dt>기술스택</dt>
                        <dd>
                          Java / spirng / ustraframework / Tibero / tomcat /
                          jenkins / vue3 / vuetify / git / redmine
                        </dd>
                        <dd>
                          Java / tomcat / x-flatform / oracle / putty / spring /
                          jira
                        </dd>
                      </dl>
                      <dl>
                        <dt>담당업무</dt>
                        <dd>화면개발</dd>
                        <dd>화면개발</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="tit_5">성장과정</h3>
              <p className="msg_1">
                Rans’s pedia(위키피디아처럼 데이터를 수집하고 문제를 해결 하다.)
                <br />
                저는 언제나 문제가 생기면 그냥 넘기지 않고 해결 하는 것에 관심이
                많았습니다. 어렸을 때는 컴퓨터 게임을 하다가 게임이 계속 끊기는
                거에 의문을 가지고 갖은 검색을 통해 그래픽카드와 렘을 중고로
                구입해서 스스로 분해 후 교체하기도 했었고 친구들의 컴퓨터나
                전자기기들이 잘안될때 친구들도 저를 찾고, 제가 나서서 도와주기도
                합니다. 저는 실생활에서 발생하는 의문점을 그냥 지나치지 않고
                해결하려고 노력하며 저의 일뿐 아니라 다른 사람들 일도 도와주려고
                하며 개념을 배우는데도 언제나 적극적이었습니다. 이렇게 모아진
                데이터들은 사소한 거라 할지라도 제 인생에 많은 영향을 미쳤고
                삶의 방향성을 유지하는 근본이 되었습니다. 단기로 업무를 보조하고
                있는 곳에서 유독 반품이 많은 제품이 있었습니다. 왜 이 제품만
                반품이 많이 생길까 생각하다가, 어른들을 대상으로 하는 제품이고,
                상세설명이 모호 한 점, 제품의 특성상 사람들 마다 느끼는 차이가
                클 수 밖에 없다는 것이 문제라고 생각했습니다. 저는 업무를
                보조하는 입장이기 때문에 이런 고민은 안해도 되는 위치였지만,
                제가 맡은 일이기 때문에 제가 생각한 문제점을 얘기했고 그것이
                받아들여져서 자세한 설명을 추가했고, 반품이 줄어드는 효과를
                가져왔습니다. 이 일로 대표님의 신뢰를 얻어 처음엔 단기
                아르바이트였지만 지속적으로 일을 맡을 수 있게 되었습니다.
              </p>
              <h3 className="tit_5">성격의 장,단점</h3>
              <p className="msg_1">
                GRIT RANS(성장, 회복력, 동기, 끈기) <br />
                GRIT은 성장(Growth), 회복력(Resilience), 동기(Intrinsic
                Motivation), 끈기(Tenacity)의 앞글자를 따서 만든 단어로, 어떤
                역경 속에서도 포기 하지 않는 능력을 말합니다. 저는 GRIT 한
                사람입니다. 저는 살면서 어떤 일을 스스로 중도에 포기하거나
                마무리 못한 적이 없습니다. 결과가 항상 최상이였다고 말할 수는
                없지만 어떤 상황 속에서도 포기 하지 않고 노력했습니다. 전
                직장에서 갑작스런 팀원의 퇴사로 그 팀원의 업무를 제가 떠안게 된
                적이 있습니다. 인수인계도 제대로 이뤄지지 않았었고 제가 처음
                접해보는 업무라 아는 부분이 거의 없었습니다. 하지만 저에게
                맡겨진 일이라는 생각 하나로 전의 자료들을 비교, 대조하고, 검색을
                통해 정보를 습득하고, 스스로 인터넷 강의를 들으며 그 업무를 하기
                위해 노력했습니다. 노력을 통해 어느 정도 업무를 해낼 수 있게
                되었고, 그 결과로 이례적인 승진과 급여 인상의 혜택을 받을 수
                있었습니다. 반면에 너무 무리하게 하다 보니 체력적으로 어려울
                때가 있습니다. 이를 보완하기 위해 비타민 섭취, 산책을 통해
                체력을 보충하고 시간을 알맞게 배분하기 위해 노력하고 있습니다.
              </p>
              <h3 className="tit_5">입사동기와 포부</h3>
              <p className="msg_1">
                그동안 다양한 프로젝트 경험을 통해 직접 개발을 하며 적응하고
                성장했습니다. 분명 맞게 했다고 생각했는데 단순한 오타 같은
                실수부터, 예기치 못한 오류를 봤을때 당황하고 좌절했지만 디버깅을
                해가며 수정 했을 때의 즐거움도 알게 되었습니다. 계획을 세우고
                일정 내에 개발을 완료하고 그러기 위해선 꾸준한 소통이 필요
                하다는 것 또한 체감했습니다. 각기 다른 환경의 여러 프로젝트
                경험을 통해 기본적인 실무 경험은 갖췄다고 생각합니다. 하지만
                아직은 절대적인 실력이 부족 한 만큼 더 배우고 노력 할 것을 약속
                드립니다. 포기하지 않고 끝까지 해내는 점은 저의 최대 자산이기도
                합니다. 우선 제 몫을 할 수 있는 직원이 되겠습니다. 그리고 제
                몫을 어느 정도 하게 되면 일당백을 할 수 있는 직원이 되도록
                하겠습니다.
              </p>
            </div>

            {/* <!--// 본문 --> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EgovAboutSite;
