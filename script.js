var dateString = "";
var charClass;
var jsonHexa = {};
var coreInfo = [];
let iconData;
let foundIdx;
const api_keys =
  "test_2785d54ef3df048746d128e9eddfa161b9c3b6b2dcc95833692f554efa53d830e1e63a06c989db87d9a7b82b19c139dc";
var ocid = "";
const url = "https://open.api.nexon.com/maplestory/";
//
// const button = document.getElementById("search_btn");
// button.addEventListener("click", function () {
//   getDate();
//   getOcid(document.getElementById("name").value);
//   document.getElementById("name").value = "";
// });

getDate();
getOcid("닌방");
function getDate() {
  var today = new Date();
  var year = today.getFullYear();
  var month = ("0" + (today.getMonth() + 1)).slice(-2);
  var day = ("0" + today.getDate()).slice(-2);
  dateString = "&date=" + year + "-" + month + "-" + (day - 1);
}

function getOcid(nickName) {
  var urlString = url + "v1/id?character_name=" + nickName;
  fetch(urlString, {
    headers: {
      "x-nxopen-api-key": api_keys,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      ocid = data.ocid;
      getClassName();
    });
  // .catch((error) => console.log(error));
}
function getClassName() {
  var urlString = url + "v1/character/basic?ocid=" + ocid + dateString;
  fetch(urlString, {
    headers: {
      "x-nxopen-api-key": api_keys,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      charClass = data.character_class;

      getHexaInfo();
    });
}

function getHexaInfo() {
  var urlString = url + "v1/character/hexamatrix?ocid=" + ocid + dateString;
  fetch(urlString, {
    headers: {
      "x-nxopen-api-key": api_keys,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      jsonHexa = data;
      // console.table(data.character_hexa_core_equipment);
      jsonHexa.character_hexa_core_equipment.forEach((data) => {
        var inputData = [
          data.hexa_core_name,
          data.hexa_core_level,
          data.hexa_core_type,
        ];
        coreInfo.push(inputData);
      });
      console.log(coreInfo);
      getSkillIcon();
    })
    .catch((error) => console.log(error));
}

function getSkillIcon() {
  const sortData = {
    0: [
      "히어로",
      "팔라딘",
      "다크나이트",
      "소울마스터",
      "미하일",
      "블래스터",
      "데몬슬레이어",
      "데몬어벤져",
      "아란",
      "카이저",
      "아델",
      "제로",
      "바이퍼",
      "캐논마스터",
      "스트라이커",
      "은월",
      "아크",
    ],
    1: [
      "비숍",
      "아크메이지(썬, 콜)",
      "아크메이지(불, 독)",
      "플레임위자드",
      "배틀메이지",
      "에반",
      "루미너스",
      "일리움",
      "라라",
      "키네시스",
    ],
    2: [
      "신궁",
      "패스파인더",
      "보우마스터",
      "윈드브레이커",
      "와일드헌터",
      "메르세데스",
      "카인",
      "메카닉",
      "엔젤릭버스터",
      "캡틴",
    ],
    3: [
      "듀얼블레이드",
      "섀도어",
      "나이트로드",
      "나이트워커",
      "제논",
      "팬텀",
      "카데나",
      "칼리",
      "호영",
    ],
  };
  for (let i = 0; i < 4; i++) {
    foundIdx = sortData[i].indexOf(charClass);
    if (foundIdx >= 0) {
      switch (i) {
        case 0:
          iconData = [
            {
              name: "히어로",
              skills: [
                {
                  core_name: "스피릿 칼리버",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPDKDPEMA.png",
                },
                {
                  core_name: "레이징 블로우 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPDKDPBMA.png",
                },
                {
                  core_name: "레이지 업라이징 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPDKDPBMC.png",
                },
                {
                  core_name: "소드 오브 버닝 소울 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBMA.png",
                },
                {
                  core_name: "콤보 인스팅트 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBMB.png",
                },
                {
                  core_name: "콤보 데스폴트 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBMC.png",
                },
                {
                  core_name: "소드 일루전 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBMD.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "팔라딘",
              skills: [
                {
                  core_name: "세이크리드 바스티온",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPDJDPEMA.png",
                },
                {
                  core_name: "블래스트 VI/디바인 저지먼트 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPDJDOBMB.png",
                },
                {
                  core_name: "디바인 차지 VI/디바인 스티그마 VI/폴링 저스티스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPDJDPBMD.png",
                },
                {
                  core_name: "홀리 유니티 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBME.png",
                },
                {
                  core_name: "블래스드 해머 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBMF.png",
                },
                {
                  core_name: "그랜드 크로스 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBMG.png",
                },
                {
                  core_name: "마이티 묠니르 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBMH.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "다크나이트",
              skills: [
                {
                  core_name: "데드 스페이스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPDIDPEMA.png",
                },
                {
                  core_name: "궁니르 디센트 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPDIDPBMA.png",
                },
                {
                  core_name: "다크 임페일 VI/다크 신서시스 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPDIDPBMB.png",
                },
                {
                  core_name: "다크 스피어 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBMI.png",
                },
                {
                  core_name: "비홀더 임팩트 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBMJ.png",
                },
                {
                  core_name: "피어스 사이클론 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBNA.png",
                },
                {
                  core_name: "다크니스 오라 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBNB.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "소울마스터",
              skills: [
                {
                  core_name: "아스트랄 블리츠",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFODKDPEMA.png",
                },
                {
                  core_name: "솔라 슬래시 VI/루나 디바이드 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFODKDPDMA.png",
                },
                {
                  core_name: "코스믹 샤워 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFODKDPBMC.png",
                },
                {
                  core_name: "코스모스 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBKA.png",
                },
                {
                  core_name: "엘리시온 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBKB.png",
                },
                {
                  core_name: "소울 이클립스 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBKC.png",
                },
                {
                  core_name: "플레어 슬래시 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBKD.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "미하일",
              skills: [
                {
                  core_name: "듀란달",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFKDKDPEMA.png",
                },
                {
                  core_name: "샤이닝 크로스 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFKDKDPBMA.png",
                },
                {
                  core_name: "로얄 가드 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFKDKDPBMC.png",
                },
                {
                  core_name: "로 아이아스 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAPC.png",
                },
                {
                  core_name: "클라우 솔라스 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAPD.png",
                },
                {
                  core_name: "소드 오브 소울 라이트 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAPE.png",
                },
                {
                  core_name: "라이트 오브 커리지 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAPF.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "블래스터",
              skills: [
                {
                  core_name: "파이널 디스트로이어",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFMFKDPEMA.png",
                },
                {
                  core_name: "매그넘 펀치 VI/더블 팡 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFMFKDPBMA.png",
                },
                {
                  core_name: "릴리즈 파일 벙커 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFMFKDPBMC.png",
                },
                {
                  core_name: "벙커 버스터 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAOI.png",
                },
                {
                  core_name: "발칸 펀치 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAOJ.png",
                },
                {
                  core_name: "버닝 브레이커 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAPA.png",
                },
                {
                  core_name: "애프터이미지 쇼크 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAPB.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "데몬슬레이어",
              skills: [
                {
                  core_name: "나이트메어",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFMDKDPEMA.png",
                },
                {
                  core_name: "데몬 임팩트 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFMDKDPBMA.png",
                },
                {
                  core_name: "데몬 슬래시 VI/데몬 익스플로젼 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFMDKDPBMC.png",
                },
                {
                  core_name: "데몬 어웨이크닝 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAME.png",
                },
                {
                  core_name: "요르문간드 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAMF.png",
                },
                {
                  core_name: "오르트로스 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAMG.png",
                },
                {
                  core_name: "데몬 베인 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAMH.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "데몬어벤져",
              skills: [
                {
                  core_name: "레퀴엠",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFMDJDPEMA.png",
                },
                {
                  core_name: "실드 체이싱 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFMDJDPBMA.png",
                },
                {
                  core_name: "익시드 : 엑스큐션 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFMDJDPBMC.png",
                },
                {
                  core_name: "데몬 프렌지 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAMI.png",
                },
                {
                  core_name: "블러드 피스트 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAMJ.png",
                },
                {
                  core_name: "디멘션 소드 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKANA.png",
                },
                {
                  core_name: "레버넌트 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKANB.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "아란",
              skills: [
                {
                  core_name: "아드레날린 서지",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFNDKDPEMA.png",
                },
                {
                  core_name: "비욘더 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFNDKDPBMA.png",
                },
                {
                  core_name: "부스트 엔드-헌터즈 타겟팅 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFNDKDPBME.png",
                },
                {
                  core_name: "인스톨 마하 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBEA.png",
                },
                {
                  core_name: "브랜디쉬 마하 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBEB.png",
                },
                {
                  core_name: "펜릴 크래시 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBEC.png",
                },
                {
                  core_name: "블리자드 템페스트 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBED.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "카이저",
              skills: [
                {
                  core_name: "마이트 오브 노바",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFJDKDPEMA.png",
                },
                {
                  core_name: "기가 슬래셔 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFJDKDPBMA.png",
                },
                {
                  core_name: "소드 스트라이크 VI/윌 오브 소드 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFJDKDPBMC.png",
                },
                {
                  core_name: "가디언 오브 노바 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAPG.png",
                },
                {
                  core_name: "윌 오브 소드 : 스트라이크 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAPH.png",
                },
                {
                  core_name: "드라코 슬래셔 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAPI.png",
                },
                {
                  core_name: "드래곤 블레이즈 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAPJ.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "아델",
              skills: [
                {
                  core_name: "마에스트로",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KEKDKDPEMA.png",
                },
                {
                  core_name: "디바이드 VI/샤드 VI/원더 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KEKDKDPBMA.png",
                },
                {
                  core_name: "오더 VI/트레드 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KEKDKDPBME.png",
                },
                {
                  core_name: "루인 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAKA.png",
                },
                {
                  core_name: "인피니트 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAKB.png",
                },
                {
                  core_name: "리스토어 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAKC.png",
                },
                {
                  core_name: "스톰 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAKD.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "제로",
              skills: [
                {
                  core_name: "크로노 트리거",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KEPDKDPEMA.png",
                },
                {
                  core_name: "윈드 커터 VI/기가 크래시 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KEPDKDPBNC.png",
                },
                {
                  core_name: "터닝 드라이브 VI/롤링 커브 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KEPDKDPBNE.png",
                },
                {
                  core_name: "리미트 브레이크 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAJC.png",
                },
                {
                  core_name: "조인트 어택 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAJD.png",
                },
                {
                  core_name: "쉐도우 플래시 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAJE.png",
                },
                {
                  core_name: "에고 웨폰 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAJF.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "바이퍼",
              skills: [
                {
                  core_name: "리버레이트 넵투누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPHKDPEMA.png",
                },
                {
                  core_name: "피스트 인레이지 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPHKDPBMA.png",
                },
                {
                  core_name:
                    "씨 서펜트 VI/씨 서펜트 인레이지VI/씨 서펜트 버스트VI/전함 노틸러스 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPHKDOBME.png",
                },
                {
                  core_name: "라이트닝 폼 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBII.png",
                },
                {
                  core_name: "서펜트 스크류 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBIJ.png",
                },
                {
                  core_name: "퓨리어스 차지 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBJA.png",
                },
                {
                  core_name: "하울링 피스트 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBJB.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "캐논슈터",
              skills: [
                {
                  core_name: "슈퍼 캐논 익스플로젼",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPHIDPEMA.png",
                },
                {
                  core_name: "캐논 버스터 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPHIDPBMA.png",
                },
                {
                  core_name:
                    "캐논 바주카 VI/미니 캐논볼 VI/마그네틱 앵커 VI/전함 노틸러스 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPHIDPBMB.png",
                },
                {
                  core_name: "빅 휴즈 기간틱 캐논볼 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBJG.png",
                },
                {
                  core_name: "ICBM 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBJH.png",
                },
                {
                  core_name: "스페셜 몽키 에스코트 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBJI.png",
                },
                {
                  core_name: "풀 메이커 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBJJ.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "스트라이커",
              skills: [
                {
                  core_name: "뇌명벽해파",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFOHKDPEMA.png",
                },
                {
                  core_name: "섬멸 VI/낙뢰",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFOHKDPBMA.png",
                },
                {
                  core_name: "벽력 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFOHKDPBMD.png",
                },
                {
                  core_name: "신뇌합일 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBLG.png",
                },
                {
                  core_name: "교아탄 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBLH.png",
                },
                {
                  core_name: "뇌신창격 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBLI.png",
                },
                {
                  core_name: "창뇌연격 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBLJ.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "은월",
              skills: [
                {
                  core_name: "호신강림",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFNHKDPEMA.png",
                },
                {
                  core_name: "귀참 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFNHKDPBMA.png",
                },
                {
                  core_name: "소혼 장막 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFNHKDPBMB.png",
                },
                {
                  core_name: "정령 집속 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBFG.png",
                },
                {
                  core_name: "귀문진 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBFH.png",
                },
                {
                  core_name: "진 귀참 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBFI.png",
                },
                {
                  core_name: "파쇄 연권 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBFJ.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "아크",
              skills: [
                {
                  core_name: "가장 오래된 심연",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KEKHKDPEMA.png",
                },
                {
                  core_name:
                    "플레인 차지드라이브 VI/스칼렛 차지드라이브 VI/거스트 차지드라이브 VI/어비스 차지드라이브 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KEKHKDPBMA.png",
                },
                {
                  core_name:
                    "지워지지 않는 상처 VI/채워지지 않는 굶주림 VI/걷잡을 수 없는 혼돈 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KEKHKDPBOB.png",
                },
                {
                  core_name: "근원의 기억 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKALC.png",
                },
                {
                  core_name: "인피니티 스펠 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKALD.png",
                },
                {
                  core_name: "새어 나오는 악몽/새어 나오는 흉몽 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKALE.png",
                },
                {
                  core_name: "영원히 굶주리는 짐승 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKALF.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
          ];
          break;
        case 1:
          iconData = [
            {
              name: "비숍",
              skills: [
                {
                  core_name: "홀리 어드밴트",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPAIDPEMA.png",
                },
                {
                  core_name: "엔젤레이 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPAIDPBMA.png",
                },
                {
                  core_name: "빅뱅 VI/트라이엄프 페더 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPAIDPBMC.png",
                },
                {
                  core_name: "프레이 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBOA.png",
                },
                {
                  core_name: "엔젤 오브 리브라 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBOB.png",
                },
                {
                  core_name: "피스메이커 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBOC.png",
                },
                {
                  core_name: "디바인 퍼니시먼트 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBOD.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "아크메이지(썬, 콜)",
              skills: [
                {
                  core_name: "프로즌 라이트닝",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPAJDPEMA.png",
                },
                {
                  core_name: "체인 라이트닝 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPAJDPBMA.png",
                },
                {
                  core_name: "프로즌 오브 VI/블리자드 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPAJDPBMC.png",
                },
                {
                  core_name: "아이스 에이지 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBNG.png",
                },
                {
                  core_name: "썬더 브레이크 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBNH.png",
                },
                {
                  core_name: "스피릿 오브 스노우 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBNI.png",
                },
                {
                  core_name: "주피터 썬더 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBNJ.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "아크메이지(불, 독)",
              skills: [
                {
                  core_name: "인페르날 베놈",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPAKDPEMA.png",
                },
                {
                  core_name: "플레임 스윕 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPAKDPBMA.png",
                },
                {
                  core_name: "플레임 헤이즈 VI/미스트 이럽션 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPAKDPBMD.png",
                },
                {
                  core_name: "도트 퍼니셔 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBNC.png",
                },
                {
                  core_name: "포이즌 노바 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBND.png",
                },
                {
                  core_name: "퓨리 오브 이프리트 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBNE.png",
                },
                {
                  core_name: "포이즌 체인 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBNF.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "플레임위자드",
              skills: [
                {
                  core_name: "이터니티",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFOAKDPEMA.png",
                },
                {
                  core_name: "오비탈 플레임 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFOAKDPBMA.png",
                },
                {
                  core_name: "블레이징 익스팅션 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFOAKDPBMH.png",
                },
                {
                  core_name: "블레이징 오비탈 플레임 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBKE.png",
                },
                {
                  core_name: "플레임 디스차지 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBKF.png",
                },
                {
                  core_name: "인피니티 플레임 서클 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBKG.png",
                },
                {
                  core_name: "샐리맨더 미스칩 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBKH.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "배틀메이지",
              skills: [
                {
                  core_name: "크림슨 팩텀",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFMAKDPEMA.png",
                },
                {
                  core_name: "데스 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFMAKDPBMA.png",
                },
                {
                  core_name: "피니쉬 블로우 VI/배틀킹 바 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFMAKDPBMB.png",
                },
                {
                  core_name: "유니온 오라 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKANC.png",
                },
                {
                  core_name: "블랙 매직 알터 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAND.png",
                },
                {
                  core_name: "그림 리퍼 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKANE.png",
                },
                {
                  core_name: "어비셜 라이트닝 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKANF.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "에반",
              skills: [
                {
                  core_name: "조디악 버스트",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFNAJHPEMA.png",
                },
                {
                  core_name: "서클 오브 마나 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFNAJHPBMA.png",
                },
                {
                  core_name:
                    "드래곤 스위프트 VI/서클 오브 썬더 VI/스위프트 오브 썬더 VI/스위프트 오브 윈드 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFNAJHPBMD.png",
                },
                {
                  core_name: "엘리멘탈 블래스트 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBEE.png",
                },
                {
                  core_name: "드래곤 브레이크 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBEF.png",
                },
                {
                  core_name: "조디악 레이 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBEG.png",
                },
                {
                  core_name: "스파이럴 오브 마나 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBEH.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "루미너스",
              skills: [
                {
                  core_name: "하모닉 패러독스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFNFKDPEMA.png",
                },
                {
                  core_name: "앱솔루트 킬 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFNFKDPBMA.png",
                },
                {
                  core_name: "라이트 리플렉션 VI/엔드리스 다크니스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFNFKDPBMB.png",
                },
                {
                  core_name: "진리의 문 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAMA.png",
                },
                {
                  core_name: "퍼니싱 리소네이터 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAMB.png",
                },
                {
                  core_name: "빛과 어둠의 세례 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAMC.png",
                },
                {
                  core_name: "리버레이션 오브 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAMD.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "일리움",
              skills: [
                {
                  core_name: "언리미티드 크리스탈",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KEKAKDPEMA.png",
                },
                {
                  core_name: "크래프트:자벨린 VI/글로리 윙:자벨린 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KEKAKDPBMA.png",
                },
                {
                  core_name:
                    "리액션:도미네이션 VI/리액션:디스트럭션 VI/글로리 윙:모탈 윙비트 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KEKAKDPBMI.png",
                },
                {
                  core_name: "크리스탈 이그니션 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAKE.png",
                },
                {
                  core_name: "그람홀더 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAKF.png",
                },
                {
                  core_name: "소울 오브 크리스탈 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAKG.png",
                },
                {
                  core_name: "크리스탈 게이트 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAKH.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "라라",
              skills: [
                {
                  core_name: "새록새록 꽃누리",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KEJAKDPEMA.png",
                },
                {
                  core_name: "정기 뿌리기 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KEJAKDPBMA.png",
                },
                {
                  core_name:
                    "용맥 분출 VI/분출 : 너울이는 강 VI/분출 : 돌개바람 VI/분출 : 해돋이 우물 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KEJAKDPBMB.png",
                },
                {
                  core_name: "큰 기지개 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKALG.png",
                },
                {
                  core_name: "해 강 산 바람 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKALH.png",
                },
                {
                  core_name: "용솟음치는 정기 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKALI.png",
                },
                {
                  core_name: "산등성이 굽이굽이 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKALJ.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "키네시스",
              skills: [
                {
                  core_name: "어나더 렐름",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KELAKDPEMA.png",
                },
                {
                  core_name: "얼티메이트-메테리얼 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KELAKDPBMA.png",
                },
                {
                  core_name: "싸이킥 그랩 VI/얼티메이트-싸이킥 샷 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KELAKDOBMB.png",
                },
                {
                  core_name: "싸이킥 토네이도 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAJG.png",
                },
                {
                  core_name: "얼티메이트-무빙 매터 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAJH.png",
                },
                {
                  core_name: "얼티메이트-싸이킥 불릿 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAJI.png",
                },
                {
                  core_name: "로 오브 그라비티 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAJJ.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
          ];
          break;
        case 2:
          iconData = [
            {
              name: "신궁",
              skills: [
                {
                  core_name: "파이널 에임",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPBJDPEMA.png",
                },
                {
                  core_name: "스나이핑 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPBJDPBMA.png",
                },
                {
                  core_name: "피어싱 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPBJDPBMF.png",
                },
                {
                  core_name: "트루 스나이핑 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBOI.png",
                },
                {
                  core_name: "스플릿 애로우 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBOJ.png",
                },
                {
                  core_name: "차지드 애로우 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBPA.png",
                },
                {
                  core_name: "리피팅 크로스보우 카트리지 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBPB.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "패스파인더",
              skills: [
                {
                  core_name: "포세이큰 렐릭",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPBIDPEMA.png",
                },
                {
                  core_name: "카디널 블래스트 VI/에디셔널 블래스트 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPBIDPBMA.png",
                },
                {
                  core_name: "카디널 디스차지 VI/에디셔널 디스차지 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPBIDPBME.png",
                },
                {
                  core_name: "얼티밋 블래스트 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBPC.png",
                },
                {
                  core_name: "레이븐 템페스트/이볼브 템페스트 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBPD.png",
                },
                {
                  core_name: "옵시디언 배리어 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBPE.png",
                },
                {
                  core_name: "렐릭 언바운드 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBPF.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "보우마스터",
              skills: [
                {
                  core_name: "어센던트 셰이드",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPBKDPEMA.png",
                },
                {
                  core_name: "폭풍의 시 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPBKDPBMA.png",
                },
                {
                  core_name: "애로우 플래터 VI/언카운터블 애로우 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPBKDPBMC.png",
                },
                {
                  core_name: "애로우 레인 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBOE.png",
                },
                {
                  core_name: "잔영의 시 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBOF.png",
                },
                {
                  core_name: "퀴버 풀버스트 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBOG.png",
                },
                {
                  core_name: "실루엣 미라주 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBOH.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "윈드브레이커",
              skills: [
                {
                  core_name: "미스트랄 스프링",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFOBKDPEMA.png",
                },
                {
                  core_name: "천공의 노래 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFOBKDPBMA.png",
                },
                {
                  core_name: "트라이플링 윔 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFOBKDPBMB.png",
                },
                {
                  core_name: "하울링 게일 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBKI.png",
                },
                {
                  core_name: "아이들 윔 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBKJ.png",
                },
                {
                  core_name: "윈드 월 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBLA.png",
                },
                {
                  core_name: "볼텍스 스피어 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBLB.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "와일드헌터",
              skills: [
                {
                  core_name: "네이쳐스 빌리프",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFMBKDPEMA.png",
                },
                {
                  core_name: "와일드 발칸 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFMBKDPBMA.png",
                },
                {
                  core_name:
                    "클로우 컷 VI/프로보크 VI/크로스 로드 VI/소닉 붐 VI/재규어 소울 VI/플래쉬 레인 VI/램피지 애즈 원 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFMBKDPBMG.png",
                },
                {
                  core_name: "재규어 스톰 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKANG.png",
                },
                {
                  core_name: "재규어 맥시멈 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKANH.png",
                },
                {
                  core_name: "와일드 그레네이드 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKANI.png",
                },
                {
                  core_name: "와일드 발칸 Type X 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKANJ.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "메르세데스",
              skills: [
                {
                  core_name: "언페이딩 글로리",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFNBKDPEMA.png",
                },
                {
                  core_name: "이슈타르의 링 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFNBKDPBMA.png",
                },
                {
                  core_name:
                    "리프 토네이도VI/레전드리 스피어 VI/래쓰 오브 엔릴VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFNBKDPBMH.png",
                },
                {
                  core_name: "엘리멘탈 고스트 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBEI.png",
                },
                {
                  core_name: "실피디아 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBEJ.png",
                },
                {
                  core_name: "이르칼라의 숨결 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBFA.png",
                },
                {
                  core_name: "로얄 나이츠 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBFB.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "카인",
              skills: [
                {
                  core_name: "어나일레이션",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFJBKDPEMA.png",
                },
                {
                  core_name: "폴링 더스트 VI/포이즌 니들 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFJBKDPBMA.png",
                },
                {
                  core_name:
                    "스트라이크 애로우 VI/스캐터링 샷 VI/테어링 나이프 VI/체인 시클 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFJBKDPBMH.png",
                },
                {
                  core_name: "드래곤 버스트 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAIA.png",
                },
                {
                  core_name: "페이탈 블리츠 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAIB.png",
                },
                {
                  core_name: "타나토스 디센트 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAIC.png",
                },
                {
                  core_name: "그립 오브 애거니 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAID.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "메카닉",
              skills: [
                {
                  core_name: "그라운드 제로",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFMHKDPEMA.png",
                },
                {
                  core_name: "매시브 파이어 : SPLASH-F VI/IRON-B VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFMHKDPBMA.png",
                },
                {
                  core_name: "호밍 미사일 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFMHKDPBMD.png",
                },
                {
                  core_name: "멀티플 옵션 : M-FL 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAOA.png",
                },
                {
                  core_name: "마이크로 미사일 컨테이너 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAOB.png",
                },
                {
                  core_name: "메탈아머 전탄발사 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAOC.png",
                },
                {
                  core_name: "메카 캐리어 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAOD.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "엔젤릭버스터",
              skills: [
                {
                  core_name: "그랜드 피날레",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFJHKDPEMA.png",
                },
                {
                  core_name: "트리니티 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFJHKDPBMA.png",
                },
                {
                  core_name: "소울 시커 VI/소울 시커 엑스퍼트 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFJHKDPBMB.png",
                },
                {
                  core_name: "에너지 버스트 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAII.png",
                },
                {
                  core_name: "스포트라이트 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAIJ.png",
                },
                {
                  core_name: "마스코트 패밀리어 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAJA.png",
                },
                {
                  core_name: "트리니티 퓨전 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAJB.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "캡틴",
              skills: [
                {
                  core_name: "드레드노트",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPHJDPEMA.png",
                },
                {
                  core_name: "래피드 파이어 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPHJDPBMA.png",
                },
                {
                  core_name: "배틀쉽 봄버 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPHJDPBMC.png",
                },
                {
                  core_name: "불릿 파티 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBJC.png",
                },
                {
                  core_name: "데드아이 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBJD.png",
                },
                {
                  core_name: "노틸러스 어썰트 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBJE.png",
                },
                {
                  core_name: "데스 트리거 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBJF.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
          ];
          break;
        case 3:
          iconData = [
            {
              name: "듀얼블레이드",
              skills: [
                {
                  core_name: "카르마 블레이드",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPGIBPEMA.png",
                },
                {
                  core_name: "팬텀 블로우 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPGIBPBMA.png",
                },
                {
                  core_name: "아수라 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPGIBPBMB.png",
                },
                {
                  core_name: "블레이드 스톰 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBIE.png",
                },
                {
                  core_name: "카르마 퓨리 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBIF.png",
                },
                {
                  core_name: "블레이드 토네이도 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBIG.png",
                },
                {
                  core_name: "헌티드 엣지 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBIH.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "섀도우",
              skills: [
                {
                  core_name: "일도양단",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPGJDPEMA.png",
                },
                {
                  core_name: "암살 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPGJDPBMA.png",
                },
                {
                  core_name: "메소 익스플로젼 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPGJDPBMG.png",
                },
                {
                  core_name: "쉐도우 어썰트 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBIA.png",
                },
                {
                  core_name: "절개 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBIB.png",
                },
                {
                  core_name: "소닉 블로우 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBIC.png",
                },
                {
                  core_name: "멸귀참영진 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBID.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "나이트워커",
              skills: [
                {
                  core_name: "사일런스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFOGKDPEMA.png",
                },
                {
                  core_name: "퀸터플 스로우 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFOGKDPBMA.png",
                },
                {
                  core_name: "쉐도우 배트 VI/래버너스 배트 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFOGKDPBME.png",
                },
                {
                  core_name: "쉐도우 스피어 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBLC.png",
                },
                {
                  core_name: "쉐도우 서번트 익스텐드 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBLD.png",
                },
                {
                  core_name: "쉐도우 바이트 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBLE.png",
                },
                {
                  core_name: "래피드 스로우 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBLF.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "나이트로드",
              skills: [
                {
                  core_name: "생사여탈",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPGKDPEMA.png",
                },
                {
                  core_name: "쿼드러플 스로우 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPGKDPBMA.png",
                },
                {
                  core_name: "마크 오브 어쌔신 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFPGKDPBMC.png",
                },
                {
                  core_name: "스프레드 스로우 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBPG.png",
                },
                {
                  core_name: "풍마수리검 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBPH.png",
                },
                {
                  core_name: "다크로드의 비전서 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBPI.png",
                },
                {
                  core_name: "스로우 블래스팅 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBPJ.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "제논",
              skills: [
                {
                  hexa_core_name: "아티피셜 에볼루션",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFMEKDPEMA.png",
                },
                {
                  hexa_core_name: "퍼지롭 매스커레이드 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFMEKDPBMA.png",
                },
                {
                  hexa_core_name: "트라이앵글 포메이션 VI/홀로그램 그래피티 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFMEKDPBMH.png",
                },
                {
                  hexa_core_name: "메가 스매셔 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAOE.png",
                },
                {
                  hexa_core_name: "오버로드 모드 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAOF.png",
                },
                {
                  hexa_core_name: "홀로그램 그래피티 : 융합 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAOG.png",
                },
                {
                  hexa_core_name: "포톤 레이 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAOH.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "팬텀",
              skills: [
                {
                  core_name: "디파잉 페이트",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFNGKDPEMA.png",
                },
                {
                  core_name: "템페스트 오브 카드 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFNGKDPBMA.png",
                },
                {
                  core_name: "얼티밋 드라이브 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFNGKDPBMB.png",
                },
                {
                  core_name: "조커 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBFC.png",
                },
                {
                  core_name: "블랙잭 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBFD.png",
                },
                {
                  core_name: "마크 오브 팬텀 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBFE.png",
                },
                {
                  core_name: "리프트 브레이크 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKBFF.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "카데나",
              skills: [
                {
                  core_name: "체인아츠:매서커",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFJGKDPEMA.png",
                },
                {
                  core_name: "체인아츠:스트로크 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFJGKDPBMA.png",
                },
                {
                  core_name: "웨폰 버라이어티 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KFJGKDPBME.png",
                },
                {
                  core_name: "체인아츠:퓨리 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAIE.png",
                },
                {
                  core_name: "A.D 오드넌스 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAIF.png",
                },
                {
                  core_name: "체인아츠:메일스트롬 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAIG.png",
                },
                {
                  core_name: "웨폰 버라이어티 피날레 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAIH.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "칼리",
              skills: [
                {
                  core_name: "헥스 : 샌드스톰",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KEKGKDPEMA.png",
                },
                {
                  core_name: "아츠 : 플러리 VI/아츠 : 크레센텀 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KEKGKDPBMA.png",
                },
                {
                  core_name:
                    "보이드 러쉬 VI/보이드 블리츠 VI/헥스 : 차크람 스플릿 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KEKGKDPBMD.png",
                },
                {
                  core_name: "헥스 : 판데모니움 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAKI.png",
                },
                {
                  core_name: "보이드 버스트 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAKJ.png",
                },
                {
                  core_name: "아츠 : 아스트라 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKALA.png",
                },
                {
                  core_name: "레조네이트 : 얼티메이텀 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKALB.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
            {
              name: "호영",
              skills: [
                {
                  core_name: "선기 : 파천황",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KEJGKDPEMA.png",
                },
                {
                  core_name: "멸화염 : 천 VI/지진쇄 : 지 VI/금고봉 : 인 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KEJGKDPBOJ.png",
                },
                {
                  core_name: "파초풍 : 천 VI/토파류 : 지 VI/여의선 : 인 VI",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KEJGKDPBPF.png",
                },
                {
                  core_name: "선기 : 극대 분신난무 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAEA.png",
                },
                {
                  core_name: "권술 : 산령소환 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAEB.png",
                },
                {
                  core_name: "선기 : 강림 괴력난신 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAEC.png",
                },
                {
                  core_name: "선기 : 천지인 환영 강화",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHKAED.png",
                },
                {
                  core_name: "솔 야누스",
                  skill_icon:
                    "https://open.api.nexon.com/static/maplestory/SkillIcon/KAPCLHPBMA.png",
                },
              ],
            },
          ];
          break;
        default:
          break;
      }
      break;
    }
  }

  console.log(foundIdx);
  for (let i = 0; i < coreInfo.length; i++) {
    for (let j = 0; j < 8; j++) {
      if (iconData[foundIdx].skills[j].core_name === coreInfo[i][0]) {
        coreInfo[i].push(iconData[foundIdx].skills[j].skill_icon);
        // console.log(coreInfo[i]);
      }
    }
  }
}
