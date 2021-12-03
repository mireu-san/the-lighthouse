import React from 'react'

import { StyledIndex, HomePicture, HomeTitle, HomeDescription,  } from '../styles/index.styled'
import profilePhoto from '../images/profile.jpg'

import Contact from './Contact'
import About from './About'
import Skills from './Skills'
import Work from './Work'

import '../styles/HomePage.css'



const HomePage = () => {  
    return (
    <StyledIndex>
        <div className="home__profile">
            <div className="home__profile__container">
                <div className="home__profile__containerLeft">
                    <HomePicture img src={profilePhoto} alt="profile" />
                    <h2 id="name">Jongwan Kim</h2>
                    <h3 id="name__subtitle">Frontend Web Developer Enthusiast</h3>
                        <i class="fas fa-envelope fa-lg fa-fw"></i>
                        <i class="fab fa-github fa-lg fa-fw"></i>
                        <i class="fab fa-linkedin fa-lg fa-fw"></i>
                        <i class="fas fa-id-card fa-lg fa-fw"></i>
                </div>
            
                <div className="home__profile__containerRight">
                    <div className="home__container" alt="acecombat" id="home">

                    <HomeTitle><h2>Biography</h2></HomeTitle>
                        <HomeDescription>
                            <p>Greetings, this is Jongwan Kim👋</p>
                            <p>안녕하세요, 제 이름은 김 종완이라고 하며 현재는 프론트엔드 웹개발을 하고 있습니다. 오스트레일리아 퀸즐랜드 공과대학에서 경제학사 과정을 졸업한 뒤, 군 복무를 하면서 취미로만 여겨 왔던 IT지식을 본격적으로 활용해서 여가 시간마다 웹개발을 해보던 것이 시작이었습니다. 여유가 생기면 구라제거기 같은 프로그램이나 타인에게 도움이 되는 온라인 서비스를 구축 해 보고 싶다고 생각하던 중, 제대 이후 얼마안가 코로나 봉쇄가 이어짐과 동시에 '미래를 생각한다면 지금이다'는 판단하에 본격적으로 웹개발을 독학하면서 현재에 이르게 되었습니다.</p> 
                            <div className="home__interest">
                                <h3>Interest</h3>
                                <li>프론트엔드 웹개발</li>
                                <li>Google Fireworks</li>
                                <li>MaterialUI, Fontawesome</li>
                            </div>

                            <div className="home__hobby">
                                <h3>Hobby</h3>
                                <li>조립식 컴퓨터에서 이어져 온 컴덕질</li>
                                <li>NAS(Network Attached Storage) 구축을 통한 홈 백업 및 공유 스토리지 시스템 구축</li>
                                <li>삶의 질 개선(status: global)</li>
                                <li>Google 에서 추천하는 개발자 뉴스 구독</li>
                            </div>
                            <div className="home__award">
                                <h3>History</h3>
                                    <li>Self-taught frontend web developer</li>
                                    <p>2020. 03 ~ present</p>
                                    <li>Self-taught backend web developer</li>
                                    <p>2020. 07 ~ 2021. 02</p>
                                    <li>BA Ecoonmics, Queensland University of Technology</li>
                                    <p>Graduated July, 2017</p>
                            </div>
                            <div className="home__quote">
                                <h3>Note</h3>
                                <li>어떤 사건의 이야기만 안다면, 그 어떤 무형의 것도 시각적으로 표현해 낼 자신이 있습니다.</li>
                            </div>
                        </HomeDescription>
                    </div>
                </div>
            </div>
        </div>

        <Skills />
        <About />
        <Work />
        <Contact />
    </StyledIndex>
    )
}

export default HomePage;