// Your song data...
var first = [
    "그 사랑 얼마나",
    "기대",
    "기뻐하며 경배하세",
    "나 무엇과도 주님을",
    "나 주님의 기쁨되기 원하네",
    "나는 예배자",
    "나의 안에 거하라",
    "나의 죄를 씻기는",
    "내 마음에 주를 향한 사랑이",
    "내가 주인 삼은",
    "마음속에 근심있는 사람",
    "마음이 상한 자를",
    "먼저 그 나라와",
    "모든 이름 위에 뛰어난",
    "모든 이름 위에 뛰어난 이름",
    "보혈을 지나",
    "복의 근원 강림하사",
    "사랑은 여기 있으니",
    "세상의 유혹 시험이",
    "수많은 무리들 줄지어",
    "아 하나님의 은혜로",
    "아무것도 두려워 말라",
    "아무것도 두려워 말라",
    "아버지 당신의 마음이",
    "약할 때 강함 되시네",
    "예수 예수",
    "예수 우리 왕이여",
    "예수님의 누구신가",
    "완전하신 나의 주",
    "완전하신 나의 주",
    "전능하신 나의 주",
    "주 안에 있는 나에게",
    "주 은혜임을",
    "주가 보이신 생명의 길",
    "주님 다시 오실때까지",
    "주님 말씀하시면",
    "주의 음성을 내가 들으니",
    "주의 인자가 생명보다",
    "하나님은 너를 만드신 분",
    "하나님은 너를 지키시는 자",
    "하늘의 문을 여소서"
];
var middle = [
    "Becasue of you",
    "Everyday(제이어스)",
    "Mighty Generation",
    "Nothing is impossible",
    "Praise the Lord(드리머스)",
    "Take it all",
    "Wake",
    "그 누가 뭐래도",
    "기뻐하며 왕께",
    "나 기뻐하리",
    "나는 노래하네 | Sing |",
    "나는 아네",
    "나는 자유해",
    "나는 주만 높이리",
    "나는 주의 친구",
    "나의 가장 낮은 마음",
    "나의 왕 앞에서",
    "나의 죄를 씻기는",
    "내 모든 삶의 행동",
    "내 안에 부어 주소서",
    "내 진정 사모하는 + 좋으신 하나님",
    "내가 매일 기쁘게",
    "높이 계신 주님께",
    "마지막 날에",
    "마지막 날에",
    "많은 사람들",
    "멈출 수 없네",
    "무화과 나뭇잎이",
    "문들아 머리 들어라",
    "미라클 제너레이션",
    "변찮는 주님의 사랑과",
    "부흥 있으리라",
    "산과 시내와",
    "생명 주께 있네",
    "성령이여 임하소서",
    "세상의 유혹 시험이",
    "슬픈 마음 있는 사람",
    "승리하였네",
    "실로암",
    "아름다운 마음들이",
    "아름다운 마음들이",
    "여호수아 군대처럼",
    "예수 나의 첫 사랑",
    "예수 사랑하심은",
    "예수 열방의 소망",
    "예수 이름이 온땅에",
    "오직 예수",
    "온 세상 창조주",
    "우리 함께 기뻐해",
    "은밀한 곳 조용한 곳에",
    "은혜가 풍성한",
    "이 날은 주가 지으신 날",
    "인애하신 구세주여",
    "일어나라 주의 백성",
    "저 높은 하늘 위로",
    "저 성벽을 향해",
    "존귀 오 존귀하신 주",
    "좋으신 하나님",
    "주 예수 기뻐 찬양해",
    "주 이름 찬양",
    "주께서 전진해온다",
    "주는 나의 빛",
    "주님의 임재 앞에서",
    "주님의 임재 앞에서",
    "주와 같이 길 가는 것",
    "주의 나라가 비전인 세대",
    "주의 보혈 능력있도다",
    "주의 이름 높이며",
    "주의 자비가 내려와",
    "주의 친절한 팔에",
    "지금은 엘리야 때처럼",
    "찬양의 제사 드리며",
    "찬양하세",
    "천국은 마치",
    "춤추는 세대",
    "풀은 마르고",
    "하늘 위에 주님밖에"
];
var fourth = [
    "교회여 일어나라",
    "그럼에도 불구하고",
    "꽃들도",
    "나 주님의 기쁨",
    "나의 갈망",
    "나의 피난처 예수",
    "날 기억하소서",
    "날 향한 주의 뜻이라면",
    "내 한가지 소원 ",
    "내려놓음",
    "너는 크게 자유를 외치라",
    "마라나타",
    "모든 상황 속에서",
    "밀알",
    "보라 너희는",
    "부르신 곳에서",
    "비 준비하시니(예루살렘아 여호와를 찬송할지어)",
    "성령 하나님 나를 만지소서",
    "세상의 유혹 시험이",
    "소원(One Thing)",
    "송축해 내 영혼",
    "십자가",
    "십자가의 전달자",
    "아름다우신",
    "아버지 사랑 내가 노래해",
    "여호와께 돌아가자",
    "예수 나의 치료자",
    "예수 우리 왕이여",
    "예수의 피 밖에 없네",
    "오직 주의 사랑에 매여",
    "온땅의 주인",
    "우리 하나 되어",
    "우리 함께 기도해",
    "우리는 주의 움직이는 교회",
    "이제는 내가 없고",
    "주 발 앞에 무릎 꿇고",
    "주 안에 있는 나에게",
    "주 예수 나의 산 소망",
    "주 품에",
    "주께 가까이",
    "주님 다시 오실 때까지",
    "주의 보좌로 나아갈때에",
    "주의 손에 나의 손을 포개고",
    "죽임 당하신 어린양",
    "참 아름다워라",
    "천 번을 불러봐도",
    "천부여 의지 없어서",
    "하나님께서 세상을 사랑하사",
    "허무한 시절"
];

// Elements...
var outputElement = document.getElementById('output')
var selectedElement = document.getElementById('selectedSheetBox')
var randomButton = document.getElementById('randomButton')

// State...
var firstLine = ''
var middleLines = []
var fourthLine = ''
var selectedLines = []

// Event listeners...
randomButton.addEventListener('click', RandomOutput)

function RandomOutput () {
  const randomFirst = first[Math.floor(Math.random() * first.length)]

  let randomMiddle = [
    middle[Math.floor(Math.random() * middle.length)],
    middle[Math.floor(Math.random() * middle.length)]
  ]

  const randomFourth = fourth[Math.floor(Math.random() * fourth.length)]

  while (randomMiddle[0] === randomMiddle[1]) {
    randomMiddle = [
      middle[Math.floor(Math.random() * middle.length)],
      middle[Math.floor(Math.random() * middle.length)]
    ]
  }

  FirstLine(randomFirst)
  MiddleLines(randomMiddle)
  FourthLine(randomFourth)
}

function FirstLine (line) {
  firstLine = line
  updateOutput()
}

function MiddleLines (lines) {
  middleLines = lines
  updateOutput()
}

function FourthLine (line) {
  fourthLine = line
  updateOutput()
}

function updateOutput () {
  outputElement.innerHTML = ''

  var lines = [firstLine].concat(middleLines, fourthLine)

  lines.forEach(function (line) {
    var pElement = document.createElement('p')
    pElement.textContent = line

    pElement.addEventListener('dblclick', function () {
      doubleClickInsert(line)
    })

    outputElement.appendChild(pElement)
  })
}

function doubleClickInsert(line) {
    if (!selectedLines.includes(line)) {
        selectedLines.push(line);
        updateSelected();
    }
}

function doubleClickRemove(index) {
    selectedLines.splice(index, 1);
    updateSelected();
}

function updateSelected() {
    selectedElement.innerHTML = '';

    selectedLines.forEach(function (line, index) {
        var pElement = document.createElement('p');
        pElement.textContent = line + " ";

        var link = document.createElement('a');
        link.textContent = "[링크]";
        link.href = "https://www.google.com/search?q=" + encodeURIComponent(line + " 악보");
        link.target = "_blank";

        pElement.appendChild(link);

        pElement.addEventListener('dblclick', function () {
            doubleClickRemove(index);
        });

        selectedElement.appendChild(pElement);
    });
}
