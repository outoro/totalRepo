import React from "react";
import { Link } from "react-router-dom";

const DB = [
  {
    id: 1,
    title: "바람의 향기",
    lng: "Scent of Wind",
    genre: "가족/아동 · 여행/로드무비 · 인권/노동/사회",
    director: "하디 모하게흐",
    note: "세상이 너무 삭막하고, 인간이 너무 무섭다고 느껴질 때가 있다. 매일 접하는 뉴스의 많은 부분이 그렇다. 인간의 선의가 아직 남아 있는지 의심스러운 세태 속에서 <바람의 향기>는 사람에 대한 믿음을 확인시켜 주는 영화다. 이란의 외딴 시골 마을, 하반신 장애가 있는 남자가 전신 마비 상태의 아들을 간호하며 살고 있다. 어느 날, 전기가 끊겨 전력 담당자가 이곳을 찾는다. 고장 난 부품을 교체하기 위해 백방으로 알아보며 이 마을 저 마을 다닌다. 압바스 키아로스타미의 영화적 전통을 이어받은 <바람의 향기>는 느리고 조용하지만 진한 여운을 남기는 영화다. 등장인물들은 장애를 지닌 사람들이거나, 장애물에 걸려 어찌할 바를 모르는 사람들이다. 그럴 때마다 그들은 서로를 외면하지 않고 작은 도움의 손길을 내민다. 심지어 하반신 장애를 지닌 남자는 가던 길을 멈추고 돌아와 바늘귀에 실을 꿰지 못해 애먹는 노인을 돕는다. 누군가를 돕는 장면만으로 영화는 잊을 수 없는 풍경들을 만들어낸다. 연인을 만나러 가는 시각 장애인을 위해 만들어 준 꽃다발이, 마침내 그들의 만남을 통해 전달되는 장면은 이 영화가 시가 되는 순간이다. <아야즈의 통곡>으로 2015년 부산국제영화제 뉴커런츠상을 수상한 하디 모하게흐 감독의 네 번째 영화로 감독이 직접 주연을 맡았다. 숱한 영화가 세상의 비참에 주목하는 동안 그 비참을 이겨내는 인간의 따뜻한 마음을 전하는, 귀한 작품이다. (남동철)",
    tit: "한국영화의 오늘",
    nation: "Iran",
    year: "2022",
    time: "90min",
    format: "DCP",
  },
  {
    id: 20,
    title: "한 남자",
    lng: "A Man",
    genre:
      "리메이크/원작있음 · 범죄/폭력 · 사랑/연애/로맨스 · 심리/미스터리/서스펜스/스릴러 · 인권/노동/사회",
    director: "이시카와 케이",
    note: "2018년 요미우리문학상을 받은 히라노 게이치로의 동명 소설을 영화로 옮겼다. 츠마부키 사토시, 안도 사쿠라, 구보타 마사타카 등이 출연하며 <우행록: 어리석은 자의 기록>(2016)으로 주목받은 이시카와 케이 감독이 연출했다. 이혼하고 아이와 함께 고향에 내려와 살던 리에(안도 사쿠라)는 다이스케(구보타 마사타카)라는 남자를 만나 사랑을 빠진다. 성실하고 착한 남편과 아이도 낳고 행복한 생활을 하던 어느 날, 다이스케가 사고로 세상을 떠난다. 장례를 치르는 중에 다이스케의 형이라는 사람이 찾아와 죽은 남편의 사진을 보며 이 사람은 내 동생 다이스케가 아니라고 말한다. 남편이 다이스케가 아니라면 누구인가? 리에는 변호사 키도(츠마부키 사토시)에게 남편이 누구였는지 알아봐달라고 부탁한다. 내가 알던 사람이 한 순간 정체를 알 수 없는 사람으로 바뀔 때 우리의 이성과 감정은 어떤 반응을 보이는가? 사람의 정체성에 대해 묻는 <한 남자>는 키도를 재일교포로 설정하면서 질문의 수위를 정치적인 문제로 확장한다. 아내의 가족은 아직도 남편인 키도가 한국인의 피를 갖고 있다는 사실에 거부감을 드러낸다. 키도는 사실에 접근해가면서 자신의 정체성에 대한 물음과도 대면한다. 자신의 과거를 지우고 싶은 욕망과 나를 나로 만드는 정체성에 대한 진지한 질문을 미스터리 속에 충실히 담아냈다. (남동철)",
    tit: "폐막작",
    nation: "Japan",
    year: "2022",
    time: "123min",
    format: "DCP",
  },
];

const Open = () => {
  return (
    <div className="open">
      <div className="container">
        {DB.map((it, idx) => (
          <div className="card">
            <Link to={"/detail/" + it.id}>
              <div className="card">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "../images/program__0" +
                    it.id +
                    ".jpg"
                  }
                  alt=""
                />
                <div className="textbox">
                  <span className="tit">{it.tit}</span>
                  <span className="title">{it.title}</span>
                  <span className="director">{it.director}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Open;
