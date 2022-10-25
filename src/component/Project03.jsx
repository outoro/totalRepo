import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { NavLink } from "react-router-dom";

const DB = [
  {
    id: 1,
    content: "Find\nGolden Snitch",
    info: "해리포터의 퀴디치 경기를 테마로 한 게임입니다. 골든 스위치 10개를 찾으면 게임 CLEAR ! \n( + 역동적으로 움직일 수 있도록 추가예정입니다.)",
    type: "메인페이지",
    work: "개인작업 100%",
    tools: "JavaScript / HTML5 / CSS / Figma",
    font: "Noto Sans KR",
    color: "#ff0",
  },
  {
    id: 2,
    content: "Card Maker",
    info: "추가예정입니다.",
    type: "메인페이지",
    work: "개인작업 100%",
    tools: "REACT / JavaScript / HTML5 / CSS / Figma",
    font: "Noto Sans KR",
    color: "#ff0",
  },
  {
    id: 3,
    content: "TODO LIST",
    info: "추가예정입니다.",
    type: "메인페이지",
    work: "개인작업 100%",
    tools: "REACT / JavaScript / HTML5 / CSS / Figma",
    font: "Noto Sans KR",
    color: "#ff0",
  },
];

const Project03 = () => {
  SwiperCore.use([Navigation]);
  return (
    <section className="Project toy" id="project">
      <header className="project-title">
        <h2>TOY PROJECT</h2>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                "navLink" + (isActive ? ".active" : "")
              }
              to="/portfolio-2022"
            >
              <span>REACT</span>
              01
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                "navLink" + (isActive ? ".active" : "")
              }
              to="/project02"
            >
              <span>JavaScript</span>
              02
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                "navLink" + (isActive ? ".active" : "")
              }
              to="/project03"
            >
              <span>TOY</span>
              03
            </NavLink>
          </li>
        </ul>
      </header>
      <Swiper
        // spaceBetween={50}
        // slidesPerView={1}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="project-swiper"
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
      >
        {DB.map((slide, idx) => (
          <SwiperSlide className="swiper_items">
            <div className="slide_content">
              <div className="left-box">
                <h3>{slide.content}</h3>
                <p className="info">{slide.info}</p>
                <p className="tools">{slide.tools}</p>
                <div>
                  <button>
                    <a
                      href={slide.site}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WebPage
                    </a>
                  </button>
                  <button>StyleGuide</button>
                </div>
              </div>
              <div className="right-box">
                <a
                  href="http://naver.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={process.env.PUBLIC_URL + "/assets/image/pf03_01.png"}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Project03;
