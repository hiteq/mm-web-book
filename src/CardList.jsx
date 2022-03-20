import * as React from "react";
import { Card } from "./Card";
import { BrowserRouter as Router, Route } from "react-router-dom";

const List = ({ match, history }) => (
  <ul className="card-list">
    {cardData.map((card) => (
      <Card
        key={card.id}
        isSelected={match.params.id === card.id}
        history={history}
        {...card}
      />
    ))}
  </ul>
);

export const CardList = () => (
  <Router>
    <Route path={["/:id", "/"]} component={List} />
  </Router>
);

const cardData = [
  {
    id: "hannah-gave-the-letter",
    category: "",
    title: "Hannah gave the letter",
    pointOfInterest: 0,
    backgroundColor: "#814A0E",
    article: [
      `계획에도 없었고, 형식도 생소한 웹도록을 만들어야겠다고 마음먹은 이유는 
      전시가 끝나기 며칠 전, 이 전시를 통해 관객들과 나눴던 다양한 이야기들 때문이었다. 
      유독 이 전시는 내가 무심코 옷을 벗어버린 듯 부끄러웠고, 그래서인지 담담한 척 태연히 지내온 
      시간임에도 여전히 갈팡질팡 두리번거리고 있는 모습 그대로가 드러났다. 상태를 파악한 채로, 
      그러니까 제 발을 땅에 딛고, 저 먼 나의 이상을 이야기하는 것, 그것이 허상이라는 말도 
      빼놓지 않고 이야기하는 것은 큰 용기가 필요했다. 그래서 과장된 솔직함으로 나타낸 
      이 작업들, 〈물라쥬 멜랑콜리크〉는 늘 기쁘고 싶고, 때론 슬픔도 아름답다 느끼는 나를 닮아버렸다.
      <br />
      <br />
      전시가 끝이 나고, ‘프로젝트 스페이스 사루비아 다방’과
        ‘서울문화재단'의 지원으로 보다 전문적이고 다양한 시각의 비평과 리뷰를
        받게 되었고, 그 결과를 모두와 공유하기로 했다.
      <br />
      <br />
      정수정 작가는 작가의 작업 중의 심리, 작업을 대할 때의 표정까지
        살피며 매일매일 한 공간을 공유했던 작업실 메이트로서, ‘작가 자신’과 그가
        만들어낸 ‘전시_〈물라쥬 멜랑콜리크〉’를 동등한 인격체로 견주어 본 글을
        썼다.
      <br />
      <br />
      김남수 안무비평가는 ‘작가의 창작’ 방식에서의 나르시시즘적
        태도를 ‘조물주의 창조’와 연관지어 시학, 근대문학, 마블 속 캐릭터들을
        대입하여 분석하였다. 또한 작가의 작업에서 주요하게 등장하는 포도, 끈,
        보라색 등을 언어적, 신화적으로 해석하여 방대한 레퍼런스가 가득한 글을
        썼다.
      <br />
      <br />
      유한나 큐레이터는 〈물라쥬 멜랑콜리크〉뿐만 아니라 작가의
        그동안의 작업 세계에서 주저 없이 드러나는 여성성에 대하여 하나하나
        짚어보고, 작가이자 동시에 젊은 여성으로서 스스럼없이 보여주는 꾸밈, 장식
        등의 특정한 표현방식, ‘여성성’이 여성을 통해 드러나는 지점에 대해
        이야기했다.
      <br />
      <br />
      추성아 큐레이터는 한껏 화려하고 융단 같은 필체를 구사하며
        아름다운 것을 양껏 갖고 싶은 작가의, 또 현대인들의 허망한 욕망을
        극대화했다. 매일 돌을 굴려 올리면서 비비안 웨스트우드, 장 폴 고티에,
        빅토르 앤 롤프등의 아티스틱한 꾸뛰르 디자이너를 사랑하는 시지프스이자
        소시민인 작가, 그 만의 욕망에 가까이 가는 방식이었던, 오마주와 모조에
        대해.
      <br />
      <br />
      남선우 큐레이터는 작업과정에서 있었을 작가가 내린 무수한 선택과
        결단에 집중하며, 작가가 직관을 자유자재로 사용하기까지의 촘촘한
        준비과정을 분석하였고, 비로소 펼쳐지는 직관의 항연을 ‘즉흥으로 춘 춤의
        기록’, ‘유창하게 써 내려간 편지’로 비유하였다.
      <br />
      <br />
      한 달여간 생겼다 사라진 전시의 모습은 작가 이의록의 정직하고
        세밀한 사진으로 담았고, 사진으로는 담기지 않은 전시장의 소리와 그 무드는
        작가 김혜원의 면밀하고 따뜻한 영상으로 옮겼다. 특히 김혜원의 영상은 전시
        기록 영상임과 동시에 ‘아이가 바라본 〈물라쥬 멜랑콜리크〉’라는 해석이
        들어간 ‘아트 필름’이다.
      <br />
      <br />
      전시장에서 만나 직접적으로, 친필로 쓴 쪽지로, SNS에 올려진
        피드로 전해진 다양한 관객들의 피드백을 받으며, 〈물라쥬 멜랑콜리크〉를
        위한 어떤 갈무리가 필요하겠다 생각했고, 이렇게 2020년이 시작되는 시점에
        다시 소식을 보내게 되어 무척 기쁘다. 나는 여전히 갖고 싶은 것 한가득인
        욕망 가득한 사람이고, 미술 속에 살며, 우아한 사람이 되고 싶어 한다.
      <br />
      <br />
      <strong>
        <i>“Hannah gave the letter”</i>
      </strong>
       이 페이지를 연 모두에게 바친다.
      <br />
      <br />
      2020년 1월 1일
      <br />
      한나`
    ]
  },
  {
    id: "only-two-women",
    category: "Jung Soojung Painter / 정수정 회화작가",
    title:
      "Only Two Women - Hannah and Moulage Mélancolique / Only two women 한나와 물라쥬 멜랑콜리크",
    pointOfInterest: 150,
    backgroundColor: "#FA6779",
    article: [
      `
      Filled with flowing lines on a damp, rainy day, Moulage Mélancolique‘s interior seems to be situated on the fringes of emotion. It is a place where one person’s different voices exist in harmony, as she seeks to pin down incidents experienced in countless dreams before they vanish into mere memories. For the year 2019, the two of them existed together: the artist Hannah Woo, who poured everything into making Moulage Mélancolique live and breathe, and her muse, Moulage Mélancolique itself.<br/><br/>
      We descend a staircase and enter inside of Moulage Mélancolique. “Hello?” As the sunlight fades and it grows darker, we begin to hear the sound of rain in different layers. Alongside the rain is air, with several spoonsful of moisture added in. I found myself thinking of the artist gulping down a glass of water. “If you don’t make a gulping sound, you won’t get what happens next.” As I enter the interior space of Moulage Mélancolique’s heart, my view is blocked by the walls in front of me. We have no way of knowing where the sounds of rain start from, but there is somehow the illusion that the rain has always been falling here. I’m curious what world will present itself on the other side of the wooden partition that stands before me—but there’s a space I want to check out first. It’s a narrow corridor that the artist took pains to create. As someone who sees, senses, and connects deeply with space, Hannah Woo always casts a distant gaze. Her firm yet tender eyes caress the walls, reading the volume of the space. Once the air and the name change, the artist always says the same thing: “I just had a really pleasant thought.” Casting my eyes over the right, I take in a large painting propped up against the gallery wall. The narrow corridor does not offer much of a viewing distance, so I put my face up fairly close to look. Seated on the canvas with her paints and brush, the artist is not merely creating an image; she focuses on the existential materiality of the canvas, adding a bundle decoration as a gift to a particular object. “This,” she says, “is ultimately a painting rendered on the material that is canvas.” Having braided someone’s hair every day, the artist’s wrists are worn thin and slender. Her fabric ribbon decorations, braided like doughnuts, are situated throughout the gallery in lieu of the artist’s wrists, fulfilling their role of adjusting for the imbalance in force. In August of this year, the artist found herself trembling as she looked at a canvas large enough to take up her entire studio wall. She carried out her paints and wielded her brush as she danced to the rhythm of music. Standing before a large, white canvas, one might be expected to flinch at the psychological responsibility—yet the artist seems to treat her white canvas in an intimate way, like a pure object. The Hannah Woo I have observed is someone who enjoys the process of applying an innate aesthetic sense to her canvas, viewing this as a natural kind of ceremony. The resulting artwork, titled View Point of Conductor, represents the eyes of a conductor looking back at the orchestra’s perspective, and it also expresses the artist’s attitude toward painting.<br/><br/>
      View Point is not the only example; Duplex, a space created with walls, is given three-dimensional form as the artist plays the role of creator dividing the air and summoning the past into the present. The “heart” of Moulage Mélancolique, which you reach by walking into the gallery where the sounds of rain are heard, is a place that evokes the artist’s childhood. One day, Hannah Woo painted part of her studio wall in lemon and powder blue. The new colors altered the mood, but her free-flowing long and white fingers were slight yet confident. The magical colors seemed naturally internalized by the young Hannah Woo, as though she had transported over her mother’s palette.<br/><br/>
      They are something that forever cloaks the artist’s body, magic flickering from its fingertips. Located at the entrance to the Duplex space is Moulage Mélancolique, which the artist said she had been inspired to hand-make by an haute couture dress. She takes the privateness of the artwork—the exceedingly handmade, one-of-a-kind quality of haute couture—and the consuming desire and replaces it with stitch-by-stitch time, placing them deep within the innumerable folds. The glowing brilliance and the optical stage, which could only exist with Moulage Mélancolique as the work of the artist Hannah Woo, spent a month in pursuit of romance as it flowed between process and completion. A boundary between reality and non-reality created through the inclusion of the artist’s body and heart, Moulage Mélancolique is an exhibition that exhibits not only artistry, but Woo’s artistic attitude, along with the things that preoccupy her as a woman in contemporary society. The individual grapes have fallen away from their sweet-tasting bunch, rolling about here and there as they watch over their own shadows in the intense light. Meanwhile, the sounds of the falling rain continue nudging us into the joy of sadness, as if whispering, “This is such a beautiful, comfortable space. You can forget all about the practical role of the clock on the wall for a while.” Having extended a bundle of romantic moments to us—we who are constantly, restlessly moving on to the next cold step—the artist was there once again that day to check the water in the vase. All life force is momentary; like the shards of a broken bowl, it can never be put back the way it was. And so we focus all our strength as we remember how things were at the time. The month of time that Hannah Woo spent birthing and watching over her Moulage Mélancolique muse now exists damply in her heart like rainwater.<br/><br/>
      Hannah seems to spend some time concentrating on herself each night. Starting around midnight, her noisy meditation is purely a matter of Hannah and her way of playing—a form of support so that she can possess the world. She drinks wine or beer and writes or does the stitching she couldn’t finish in her studio, reflecting over the day and racing through the past and future. Tonight, too, she will sleep deeply and create a beautiful dream—for the sake of the muse she will soon find once again.<br/><br/>
      <hr/>
      비가 오는 촉촉한 날 유려한 곡선이 가득한 〈물라쥬 멜랑콜리크〉의 내면에는 감정의 끝자락이 있다. 
      이 곳은 무수한 꿈속에서 겪었던 사건들이 한낱 기억으로 사라지기 전에 붙잡아 놓아두고 싶었던, 
      한 사람의 여러 목소리가 하모니를 이루는 장소. 〈물라쥬 멜랑콜리크〉를 살아 숨 쉬도록 하기 위하여 
      모든 것을 쏟았던 한 사람, 작가 우한나와 이의 뮤즈인 〈물라쥬 멜랑콜리크〉는 
      2019년 한 해 동안 함께했다.
      <br />
      <br />
      우리는 〈물라쥬 멜랑콜리크〉의 내면으로 들어가는 계단을 걸어 내려가게 된다. 안녕? 햇볕은 사라지고 점차 어두워지면서 여려 겹의 빗소리가 들리기 시작한다. 빗소리와 함께 여러 스푼 수분 추가된 공기. 순간 물을 꿀꺽 꿀꺽 소리 내어 마시던 작가의 모습이 떠올랐다. “‘꿀꺽’ 소리를 내지 않으면 그 다음이 없을 것 같아.” 〈물라쥬 멜랑콜리크〉의 마음의 공간으로 들어가면 눈앞에 놓인 벽들로 인해 시야가 막히게 되는데 빗소리가 어디서부터 시작되는 것인지 우리는 알 수 없지만 왠지 이곳은 오래전부터 항상 비가 오고 있었을 것만 같은 착각을 하게 된다. 눈앞에 서있는 나무 벽 너머로 곧 어떤 세상이 펼쳐질지 궁금하지만 그전에 먼저 확인하고픈 공간이 있다. 작가가 의도적으로 만든 좁은 통로. 공간을 보고 느끼며 깊이 소통하는 사람인 우한나 작가는 항상 눈의 시선을 멀리 둔다. 단호하지만 다정한 눈동자는 벽을 쓰다듬고 공간의 부피를 읽는다. 공기와 이름이 바뀌는 순간, 작가는 항상 얘기한다. “나 되게 즐거운 생각이 떠올랐어.” 순간 오른쪽으로 시선을 돌리면 전시장 벽에 기대어 서있는 커다란 회화 작품을 감상하게 되는데 좁은 복도에서는 가시거리가 나오지 않으므로 상당히 가까이서 얼굴을 맞닿아 바라보게 된다. 물감, 붓질과 함께 캔버스 표면에 앉은 작가는 이미지를 구현하는 것에 머무르지 않고 캔버스의 존재적 물질성에 집중을 하여 ‘결국 이것은 캔버스라는 재료에 그려진 회화’이며 특정한 대상에게 주는 선물로서 묶음 장식을 첨가했다. 매일 누군가의 머리를 땋는 작가의 손목은 닳고 닳아 얇고 가늘어졌다. 꽈배기처럼 묶은 천 리본 장식들은 작가의 손목 대신 전시장 곳곳에 놓여있으면서 힘의 간극을 조절하는 주체로 자신의 책임을 다하고 있었다. 올해 8월, 작가는 작업실 벽 크기만 한 캔버스를 바라보며 설레했다. 색이 담긴 페인트 통을 가지고 와서 음악의 비트에 맞춰 춤을 추며 붓을 들었다. 하얗고 큰 캔버스 앞에서는 심리적 부담감에 움츠러들 법도 한데 작가는 백색의 캔버스를 순수한 대상처럼 친근해 하는 것 같았다. 내가 지켜본 우한나 작가는 본연의 심미적 감각을 캔버스에 입히는 과정 자체를 즐기고 자연스러운 의식의 거행으로 생각하는 사람이며 이로써 완성된 〈지휘자 시점〉은 오케스트라의 시선을 역(逆)으로 바라보는 리더의 눈이자 회화를 대하는 작가의 작가적 태도가 담긴 작품이다.
      <br />
      <br />
      〈지휘자 시점〉뿐만 아니라 벽을 세워 만든 공간 〈듀플렉스〉는 작가가 조물주로서 공기를 나누고 과거의 시간을 소환하여 입체적으로 구성했다. 빗소리가 들리는 전시장의 내부로 걸어서 들어가면 물라쥬 멜랑콜리크의 심장이기도 한 이 장소는 작가의 어린 시절을 환기한다. 어느 날 우한나 작가는 작업실의 벽 일부를 레몬색, 파우더블루 색으로 입혔다. 색을 칠하고 분위기를 바꾸는데 거침이 없는 하얗고 긴 손가락들은 가냘프면서도 확신이 있었다. 작가 어머니의 팔레트를 옮겨온 듯 어린 우한나작가가 자연스럽게 체화한 신비로운 색깔들. 이는 항상 작가의 몸을 휘감고 손끝에서 반짝반짝 마법을 부린다. 〈듀플렉스〉공간의 입구에 위치한 〈물라쥬 멜랑콜리크〉는 작가가 이미 오뜨 꾸뛰르 드레스로부터 영감을 받아 손수 제작하였다고 소개한 바 있다. ‘오뜨 꾸뛰르haute couture’의 지극히 핸드메이드적인, 이 세상에 하나밖에 없는 예술 작품의 프라이빗 함과 소비적 욕망을 한 땀 한 땀의 시간으로 대체하고 무수한 주름들 속 깊은 곳에 담았다. 반짝이는 화려함과 오직 〈물라쥬 멜랑콜리크〉의 내부에서 우한나 작가의 작품이란 이름으로 존재 가능한 광적인 무대는 과정과 완결의 사이에서 유영하며 한 달간 낭만을 쫓았다. 작가의 몸과 마음을 넣어 만든 비현실과 현실의 경계, 물라쥬 멜랑콜리크는 작품성 그뿐만 아니라 작가의 작가적 태도와 현대 사회의 여성으로서의 고민이 진솔하게 드러나는 전시였다. 달콤한 포도송이에서 떨어져 나간 낱낱의 알맹이들은 이리저리 뒹굴고 강한 빛으로 생긴 자신들의 그림자를 지킨다. 그리고 ‘아름답고 안락한 이 공간에서 벽걸이 시계의 실질적인 역할 따위는 잠시 잊어도 돼.’라고 속삭이는 듯 빗소리는 한없이 우리를 슬픔의 환희 속으로 내몬다. 매번 쉬어갈 틈 없이 바로 다음의 차가운 스텝을 향하는 우리들에게 낭만의 순간이 담긴 보따리를 내민 작가는 오늘도 꽃병 속의 물을 체크했다. 모든 생명력은 순간적이며 깨져버린 접시의 조각처럼 되돌릴 수 없기에 우리는 온 힘을 다해 당시의 상황을 기억하고 집중한다. ‘물라쥬 멜랑콜리크’라는 뮤즈를 탄생시키고 지켜온 한 달이라는 시간은 이제 빗물로 촉촉이 마음에 자리한다.
      <br />
      <br />
      한나는 매일 밤 자신에게 집중하며 시간을 보내는 것 같다. 자정 12시부터 시작되는 시끌시끌한 명상은 온전히 한나와 한나의 놀이이며 이 세상을 영유하기 위한 버팀목이다. 와인이나 맥주를 마시며 글을 쓰기도 하고 작업실에서 끝내지 못한 바느질을 하면서 오늘을 복습하고 과거와 미래를 뛰어다닌다. 한나는 이제 곧 다시 만나게 될 뮤즈를 위하여 오늘도 깊은 잠을 청하고 밤새 아름다운 꿈을 만든다.
      <br />
      <br />
      <img
        class="inner_img"
        src="images/only-two-women-img1.jpg"
        alt="작업실에서 작업을 하는 한나_ 사진 정수정 제공"
      />
      <cite>작업실에서 작업을 하는 한나_ 사진 정수정 제공</cite>
      <br />
      <br />
      <img
        class="inner_img"
        src="images/only-two-women-img2.jpg"
        alt="〈지휘자 시점〉작업 디테일_ 사진 이의록"
      />

      <cite>〈지휘자 시점〉 작업디테일_ 사진 이의록</cite>
      <br />
      <br />
      <img
        class="inner_img"
        src="images/only-two-women-img3.jpg"
        alt="작가의 어머니가 실제로 사용하던 물감과 미술 재료_ 사진 정수정 제공"
      />

      <cite>
        작가의 어머니가 실제로 사용하던 물감과 미술 재료_ 사진 정수정 제공
      </cite>
      <br />
      <br />
      <img
        class="inner_img"
        src="images/only-two-women-img4.jpg"
        alt="자고 있는 한나_ 사진 정수정 제공"
      />
      <cite>자고 있는 한나_ 사진 정수정 제공</cite>`
    ]
  },
  {
    id: "aions-space-time",
    category: "김남수 안무비평가",
    title: "아이온의 시공간",
    pointOfInterest: 220,
    backgroundColor: "#8F986D",
    article: [
      `우한나 작가의 이 전시 풍경 속에 감도는 것을 그리스적 기원을 가진 아이온[Aion]에 적셔서 보는 것은 어떨까. 시간과 관계가 있는 아이온 개념은 더 이상 근대라는 성가시게 발목을 잡는 적수에게 오랫동안 상대가 안되어 왔었지만, 그 근대의 시간 프로그램이 필연적으로 소멸되면서 굴종된 상태였던 아이온은 다시 한번 수면 위로 나타날 기회를 잡았다. 우한나 작가의 설치 미술과 시공간은 신적인 나르시시즘의 뉘앙스가 감돌고 있는데, 가령 오렌지톤과 퍼플톤 사이의 변증법 — 물론 퍼플톤으로 수렴된다는 설이 유력하지만 — 과 기분, 액체적 가변, “이것이지 않으면 안된다”는 그 순간의 정확한 기울기, “나는 신이다” 라는 니진스키류의 각성, 수력의 힘을 포함한 휴대용 구름처럼 응결된 사물화 등등 표현되어 있다. 이 표현적 세계는 신의 자기 전개처럼 인간의 역사라는 층위보다는 원형적 시간이라는 층위에서 일어난다.
      <br />
      <br />
      아이온은 이 원형적 시간을 상대하는 신격으로서 우주를 전부 포괄하려는 궤도나 원, 어떤 도상이나 상징, 또한 그것들의 복합적인 산물이 ‘무한히 긴 시간’을 뜻하는 동시에 ‘한 시대’이기도 하다. 시간의 신 아이온, 이 신격은 지금 우한나 작가에게 임하여 다시 한번 자기전개한 세계의 풍경을 드러내려 한다고 하면 지나칠까. 그러나 이러한 과대망상이야말로 본래 조물주였던, 플라톤식으로 말하면 티마이오스라는 공작신이었던 예술가의 지위, 위상, 스탠스가 뚜렷해진다면 어찌할 것인가. 그런 면에서 니체는 아이온처럼 생명의 진화 궤도는 공작될 수 있다고 믿었던 라마르크를 칭찬하면서 이렇게 덧붙였다. “참으로 적극적인 하나의 조형적 힘의 — 즉 변신의 힘 — 현존을 예감한다.”
      <br />
      <br />
      <blockquote>
        #1. “누군가가 저 중간세계의 예술가적 가상을 치워버렸다면, 사람들은 숲의
        신, 즉 디오니소스적 수행자의 지혜를 좇아야만 했을 것이다.”
        <br />
        <br />
        <br />
        _니체, 〈유고집〉 중에서
      </blockquote>
      <br />
      <br />
      우한나 작가의 아이온은 디오니소스로 서서히 밝혀진다. 전시장 심부에 절묘한 기울기의 모바일이 설치되고 그 아래로 작가가 만든 기이한 따뜻함과 형태의 사물이 놓여 있는데, 이는 포도이며 포도 이상의 사물인 동시에 포도를 매개로 한 디오니소스 축제까지도 암시된다. 디오니소스의 아이온적 시간은 죽음을 거치는 것으로서 그 죽음의 치열성은 재생의 약속보다 가혹한 것이다. 비극의 철저한 가시밭길, 육신의 갈가리 찢기는 고통은 감내키 어려운 것으로서 어쩌면 이 전시의 벽면에 가득한 표현주의적 오렌지톤 색채 중심의 퍼포머티브-구성에서 이를 감지할 수 있지 않은가. 작가 스스로 그 신지학적 느낌이 무의식과 연합하여 뿌려진 듯한 벽화의 파노라마적, 스펙트럼적 전개를 좋아하면서도 그 하이라이트에 자리잡은 레드톤은 스스로 두려워한다. 이 두려움은 마치 보르헤스의 단편에 나오는 에피소드, 즉 그림 속의 호랑이를 불러낸 환술사가 자신이 만든 호랑이 판타지에 스스로 무서움증을 느끼고, 그러자 호랑이가 그 환술사를 잡아먹었듯이 그 비슷한 사례로 보인다.
      <br />
      <br />
      그러나 이러한 흐름, 죽음본능 — 디오니소스의 죽음은 죽음 너머로의 비상과 재생을 포괄한다는 점에서 — 의 색채적 콤포지션, 그러면서 벽화가 자연스럽게 좌에서 우로 흐르는 가운데 콤포지션의 연장선상에서 커튼을 걷고 싶은 충동 아래로 죽음본능이 가져오는 약속된 선물, 즉 포도와 태양이 커튼 너머에 기다리고 있음을 관람객들 역시 향수하게 된다. 이는 굉장히 잘 짜여진 이미지-서사 플롯이며, 그 플롯이 보다 풍부한 스토리를 개방하는 뛰어난 한 사례로 보인다. 우한나 작가는 학창 시절 이창동 감독/교수로부터 <시학> 수업을 통해 한 문장으로 요약되는 서사의 맛을 배웠다고 하는데, 그 맛은 일종의 ‘시학적인 것의 음료’로부터 나오는 것이 아닐까. 자꾸만 포도를 강조하는 것에는 이 시학적인 것의 맛이라는 부분이 미학적으로 도드라져 나올 뿐만 아니라 이제 전시장 전체의 유체적이며 가변적인 풍경 속으로 범람하여 온통 전체가 퍼플톤의 할루시네이션처럼 화해간다. 이는 예민한 다른 평론가의 촉으로 전해진 풍문의 언어에서 비롯한 것이기도 하다.
      <br />
      <br />
      <br />
      <blockquote>
        #2. (...) 사람들은 담쟁이덩굴로 엮은 화환 그리고
        <br />
        떡갈나무 가지와 꽃이 만발한 메꽃 잎으로 장식한다.
        <br />
        한 처녀가 주신 바쿠스의 지팡이를 집어들고
        <br />
        바위를 치면, 샘물이 방울져 떨어진다.
        <br />
        한 처녀가 지팡이로 땅을 찌르면,
        <br />
        신은 포도주의 샘이 솟게 한다.
        <br />
        <br />
        <br />
        _디오니소스 축제의 송가 중에서
      </blockquote>
      <br />
      <br />
      자, 이제 우한나 작가라는 아이온적 신격은 서양으로 치면 최소한 15세기 이전의 시대착오를 범하는 신으로 보인다. 조물주적 성격은 음과 양, 좋은 것과 나쁜 것, 사랑과 증오, 성스러움과 속됨이 저 전시장에 보이는 수많은 매듭들, 이중의 새끼꼬기의 산물들, 마치 뱀들이 저마다의 생명적 기운을 이기지 못하고 꼴릴 대로 꼴려서 이중의 나선구조로 만들어지는 생명기호처럼 “꽃잎의 안짝과 바깥짝”(강신표)을 천연덕스럽게 보여주는 작업에서 적나라하다. 큰 캔버스 그림 위를 묶고 있는 매듭들은 그림을 근대적 양식으로부터 해방시켜 본래 서판 형식 — 즉 자신을 들여다보는 50개의 거울은 추악하지만, 100개의 거울은 새로운 참신함을 드러낸다는 짜라투스트라의 비전이 응축된 형식 — 의 권능으로 나아가고자 하는 것이 아닌가. 그것이 현실화되었다는 것은 지나치게 과대망상적 평가지만, 그러한 의지, 그러한 지향성은 서판 속에 아이온적 우주를 담고자 하는 것으로밖에 설명되지 않는다.
      <br />
      <br />
      우리에게는 이러한 우한나 작가의 시간적 잠수가 궁금하기 짝이 없는 법인데, 
      그는 르네상스도 아니고 바로크도 아닌, 그 둘 사이의 순간적인 섬광처럼 환해졌다가 
      문화의 지형 안쪽으로 단층화되어 잠복해버린 마니에리슴의 시대를 가리키는 것 같다. 
      벽에 그려진 이중새끼꼬기의 그림과 벽이 헝겊으로 그로테스크하게 제작된 이중새끼꼬기의 
      오브제 그리고 그 위치도 벽면뿐만 아니라 캔버스, 옷걸이, 천정 등등 온갖 공간적 차원의 
      활용이 주목할 만하다. 마니에리슴은 하나의 텅 빈 타블로[tableau] — 즉 우주의 축도판으로서의 테이블 — 위에 어떠한 사물들의 배치, 
      구성, 결합술에 의해 우주 자체가 포도송이처럼 응축되어 실재할 수 있다는 사상이며 사조이다. 이 발상은 동양에서는 ‘화엄’[華嚴] — “아주 작은 냉이꽃 한 송이” 속에 꽃밭이 들어 있고, 그 꽃밭은 우주 전체이다 라는 홀로그램적 발상의 개념 — 의 생각에서 충분히 연관될 수 있는데, 불행히도 화엄은 그 자체가 완성되어 있어서 인간의 손길과는 무관했다. 마니에리슴은 그 어원 속에 manu, 즉 “손”이 깃들어 있어서 인간의 손맛이 아니면, 우주는 나타나지 않는다는 기묘한 전제가 있다.
      <br />
      <br />
      <blockquote>
        #3. “표면의 분해를 통해 그것은 거의 추상적인 인상을 환기하는 것이다.
        볼록 거울로 인한 원근법의 왜곡 속에서, 화면의 전경에는 해부학적으로는
        물론 이해할 수 없는 거인증에 걸린 듯한 커다란 ‘손’이 차지하고 있다. 방은
        어지러울 정도로 경련 같은 움직임 속에 펼쳐져 있다.”
        <br />
        <br />
        <br />
        _구스타프 르네 호케, 〈미궁으로서의 세계〉 중에서
      </blockquote>

      <br />
      <br />
      우한나 작가의 아이온적 공작이 진행되는 손의 문제, 무엇인가를 조물하려고 할 때의 머리의 문제보다 어쩌면 이 커다랗게 인플레이션 되어버린 손의 지능, 손의 각성이 마니에리슴의 쟁점인 동시에 늘 발생하는 논란의 거처가 아닐까 싶다. 그럼에도 불구하고 “나는 신이다” 라고 선언하는 우한나 작가의 경우, 머리와 손은 단순히 호모사피엔스 타입으로 연대되어 있는 브리꼴라주 형식의 쓰임이 아니라 손 자체가 우주의 질감을 매만지면서 포도즙을 쥐어짜면서 동시에 저 아득한 돌연변이로부터 신적 권능을 행사하는 이단적인 엑스맨 ‘마그니토’처럼 모든 것을 자성화[磁性化]하면서 스스로 “손의 신”이 되어버리는 것이 아닐까.
      <br />
      <br />
      이는 다분히 관념적인 어조처럼 들릴지 모르지만, 우한나 작가의 경우 대단히 실재론적 설명이며 전시장 풍경 속으로 한 걸음씩 옮길 때마다 마니에리슴의 첩첩과 겹겹의 결합술적 풍경 내부의 비밀들이 마늘의 속껍질을 벗기듯이 하나씩 하나씩 나타난다. 우한나 작가는 마니에리스트로서 보기 드물게 색채의 본질에 극히 예민하기 짝이 없어서 작품들의 나열, 배치, 수순, 인접성에서 극한치를 달린다. 포도는 매달린 것의 색채와 떨어진 것의 색채가 다르며, 그 퍼플톤과 레드톤은 이미 포도의 명운, 그 짧은 일대기 속에 여며져 있다. 나란히, 동시에. 마치 두 개의 머리를 가진 새가 과거세의 붓다와 그의 숙적인 데바닷타라는 것처럼. 이 양가성의 운명을 받아들이는 것이 우한나 작가에게는 디오니소스의 죽음 형식이 깃든 한 가지 경우라고 할까. 즉 레드톤에 대한 본능적인 무서움, 뱀에 이끌리면서 고양이를 펫샵에서 사오는 우발성 같은 것.
      <br />
      <br />
      한편, 뱀 표피의 문양, 포도송이의 헝겊적 제작, 붓, 보드라운 털 소재의 깔개, 별과 초승달이 그려진 병, 레드에 가까운 퍼플처럼 보이는 색채의 천, 작가가 아끼는 스프레이 형태의 금속용기 그리고 재봉틀... 이러한 구성이 역시 보라색 커튼 곁의 바닥에 펼쳐져 있다. 마치 “나는 고통도 경험도 순환되는 이 세계가 증오스럽다.”(김유택, 소설 <보라색 커튼> 중에서) 라는 발언처럼 여기에는 모순적이며 역설적인, 서로 등질 수도 있는 사물들의 상성과 극성이 어울렁더울렁 하면서 섞여 있다. 아니, 섞여 있지도 분리되어 있지도 않다. 마니에리슴의 세계는 우한나 작가에게 아주 자연스러워서 그 우주적 구성은 무의식과 본능에 따른 가늠과 헤아림, 손의 문제로 귀결될 수도 있지만, 이미 나타난 후에는 그 자체가 다른 무엇도 아닌 ‘이것임’의 영역이다. 필연적인 느낌의 가변, 필연적인 느낌의 유체적 흐름, 필연적인 느낌의 마늘... 등등 디오니소스의 죽음 너머에는 다른 생의 한가운데가 있다는 것을 우한나 작가의 비의에는 조물주적 조형 세계를 초월하여 가르쳐준다.
      <br />
      <br />
      <blockquote>
        #4. (...) 삶을 환히 밝혀주는 붙붙는 표피여,
        <br />
        <br />
        <br />
        나는 부끄러워 눈물 흘렸다. 내 꿈은 나에게 입맞추어 주었다.
        <br />
        <br />
        <br />
        _장석, 시 〈풍경의 꿈 1〉 중에서
      </blockquote>
      <br />
      <br />
      <br />
      “마늘의 색깔을 아느냐” 라는 우한나 작가의 질문 속에는 마늘이 마치 온 우주를 다 담은 크리스탈처럼 그 안의 징후적 색채 감각이 홀로그래픽하게 유영하는 것처럼, 마치 꿈꾸거나 환각에 휩싸인 것처럼 아련한 데가 있다. 그 아련함은 부끄러움과 이웃인데, 전시장 안쪽에 자리한 어떤 일상적인 장소로 설치된 장면이 그러하다. 작가 자신이 쓰는 사물들과 거울, 시계, 꽃병 등이 놓여진 그 테이블은 마치 동굴 속으로 되돌아간 짜라투스트라가 꿈 속에서 어느 아이가 비추는 50개의 거울 속에 비친 자신의 모습에 소스라쳐 놀라면서 자신의 “나는 신이다” 라는 각성이 다시 한번 반성 속에서 순환하는 장면처럼 여겨진다. 여기서 부끄러움은 왜 신의 몫이어야 하는가.
      다시. 마늘색이 진짜 예쁘다는 것인데, 그 껍질들을 벗기면서 마지막 언저리에서 남은 껍질이란! 메이플스 옐로우, 나폴리 옐로우, 무슨 옐로우 등등이 복합적으로 감도는 그 선상은 아마도 하나의 문이 설치된 공간적 비유처럼 여겨지는 대목이 있다. 이 편에서 저 편으로 넘어가는 문지방이 있는 공간... 거기서 작가의 실존은 한 발은 이 편에 놓여 있고, 또 한 발은 저 편에 놓여 있어서 오도가도 못하는 걸림과 들림의 위치인 것. 그러한 살림살이, 그러한 형편의 내면이 고스란히 전시장의 풍경의 꿈으로 온전히 현상되고 있다고 느끼는 것일까. 그럴지 모른다. 그러나 그 마늘색은 육쪽 마늘의 전체상으로 생각되어야 하고, 문지방 위에서는 그 생각이 두 개의 발을 딛고 “뒤를 돌아보라” 라는 수행문으로 변주되어야 한다고 본다. 물론 동시에 “아래를 보라” 라는 것도 함께. 우리는 우한나 작가의 독특한 신격적 각성, 그 위상학적 작업 방식 그리고 융합의 신비를 함께 지켜보아야 할 것이다. 그는 부끄러움에도 불구하고 신임을 우리에게 천명했으니까.
      <br />
      <br />
      <img
        class="inner_img"
        src="images/aions-space-time-img1.jpg"
        alt="비오는 날의 기쁨, 2019_ 사진 이의록"
      />
      <cite>비오는 날의 기쁨, 2019_ 사진 이의록</cite>
      <br />
      <br />
      <img
        class="inner_img"
        src="images/aions-space-time-img2.jpg"
        alt="깔깔마녀, 2019_ 사진 이의록"
      />
      <cite>깔깔마녀, 2019_ 사진 이의록</cite>
      <br />
      <br />
      <img
        class="inner_img"
        src="images/aions-space-time-img3.jpg"
        alt="Bonita Vanité, 2019_ 사진 이의록"
      />
      <cite>Bonita Vanité, 2019_ 사진 이의록</cite>
      <br />
      <br />
      <img
        class="inner_img"
        src="images/aions-space-time-img4.jpg"
        alt="duplex의 구석_ 사진 이의록"
      />
      <cite>duplex의 구석_ 사진 이의록</cite>
      <br />
      <br />
      <img
        class="inner_img"
        src="images/aions-space-time-img5.jpg"
        alt="duplex와 한나_ 사진 이의록"
      />
      <cite>duplex와 한나_ 사진 이의록</cite>
      <br />
      <br />`
    ]
  },
  {
    id: "hannahs-room",
    category: "Hanna Yoo. Curator / 유한나 큐레이터",
    title: "Hannah’s Cabinet / 한나의 방",
    pointOfInterest: 0,
    backgroundColor: "#5DBCD2",
    article: [
      `
      As I rounded the corner and saw the mint green color of the “Moulage Mélancolique” sign, I found it to be very “Hannah Woo.” The signs are different with each exhibition, but they always feel like a welcoming “come on in.” As you return its greeting to yourself and head down the staircase, the scents and sounds of water that the artist has organized become gradually clearer. The smells, the sounds, and the landscape that unfolds all separate the exhibition, firmly but gently, from the outside world.<br/><br/>
As I entered the gallery, my view was obscured by a high wall. Perhaps there was something important inside, something she did not want to show right away? The artwork is not hung in an open space where it would be easy to see. This leaves the visitors having to do an exploratory campaign within the finely partitioned space, discovering each work in its turn.<br/><br/>
Passing through the narrow corridor on the right, I found Rainy Day Sadness, which seemed to be bedecked in a selection of a select few treasured accessories. It’s a very private space, the kind of space where you briefly come face-to-face with your own sadness amid a busily passing day-to-day life. As I continued walking along, reflecting on Woo’s intentions in opening up this sort of personal space to us, I found the steeply cut section of the Duplex wall to be quite hysterical. With one step, I could glimpse what was on the other side of the wall; with another step, it was once again obscured. Perhaps this was the hesitation of someone who has made up her mind to show her inner self—but still harbors qualms.<br/><br/>
I also agreed with the presentation of the wall drawing Stroke Performance, half-obscured by a curtain. A beckoning hand urges us to take the “trouble” to walk behind the emerald green silk curtain to see the most important part of the drawing. Only those willing to take those pains will discover the beautiful vintage bowl and small pendant placed there like gifts. It was like a sort of test: “I’m going to let you in on a valuable secret, but if you want to know it, you’re going to have to show your willingness to go along with the game.” Only when I passed by the mannequins and took a seat deep within Duplex did I finally have the leisure to slowly reflect on the exhibition.<br/><br/>
Where Hannah Woo previously communicated with the world through the characters she creates, this exhibition finds her shining a mirror on herself. Moulage Mélancolique is the heroine of Duplex— introduced as Woo’s “cabinet”—and it also seems to be an alter ego for the artist. It boasts the peacock-like silhouette of an haute couture dress, radiating a feminine energy throughout the space.<br/><br/>
Here we can find Woo’s many different women. 1) She spends each day in the same spot on the windowsill, facing all the world’s buffeting of her small frame. Each morning, before solemnly climbing up on the window, she does not neglect her routine of adjusting the fullness of the lace pleats on her clothing. 2) Fairies go to war against the world, unable to bear the sight of the endangered animals at the bottom of the capitalist ecosystem’s pyramid. In place of picket signs, they put together hand-crafted silk fabric signs; instead of uniforms, they wear silk robes. 3) Every time she passes by, there are whispers. “Good lord, look at how grotesque she is. Is she really such a mess?” But she is proud, and the world’s whispers are to her just another accessory making her life a bit more dramatic. 4) She trains herself once again today, dreaming of the day when her revenge comes to fruition.<br/><br/>
She masters martial arts, the ax, and the mace, a gratified smile coming to her lips when she images how good it will feel to bring him to his knees.1<br/><br/>
These different characters were presented in different exhibitions, but they are united into a single entity by their energy, their unswerving willingness to fight back against any order or anything. What do the characters signify to the artist? We might imagine they are a mirror reflecting her at this moment, helping her to expand her self within the world, helping her to grow to reach the next stage. To complete them, she must have pricked her fingers dozens of times undoing and mending her seams, but she must also have developed a strong attachment to them mentally through all those nights spent wrestling with them. A combination of the styles of three designers known for their original takes on femininity, Moulage Mélancolique stands as the most feminine of the characters Woo has presented to date.<br/><br/>
Hannah Woo’s work is well known for being “feminine” in various respects. Beyond her history of consistently creating female agents and the fact that she employs sewing, which is seen as a representative “women’s medium,” she also shows a prodigious command of visual forms that are regarded as “feminine,” in terms of color tones, textures, and motifs. If we look at the example of color, Woo opts not for solid colors, but lower-intensity powdery shades. Words like “baby” or the names of flowers or fruits can be put in front of the color’s name to refer to one of the soft tones that surround them: blue can become “baby blue,” “misty blue,” or “navy blue,” while yellow becomes “lemon yellow” or “pastel yellow.” Similarly, the Hannah Woo color palette includes “lilac” and “lavender” rather than “purple,” or “mind,” “turquoise,” and “olive” rather than “green.” The creamy color combinations may appear subdued, but they undergo a resplendent transformation as the artist brings them together with the luster of silk fabric. Maximalist that she is, Woo heightens the effect further with various additions: draping, pleating, lace, ribbons, knots, braiding, and stuffing. The result is something as gaudy and ornamental as a Rococo-era dress.<br/><br/>
With her creation of subjective female characters and her unique take on “feminine” crafts, Woo’s career makes for a rich topic of discussions in the context of feminist art. Yet one hesitates over the question of whether the visual forms used to represent femininity (feminine color tones, motifs, and so forth) can be interpreted in feminist terms. It encourages more questions than conclusions. Are the feminine methods of presentation that Woo so often uses more empowering for subjective female characters and the energy of women’s media? Or do they diminish that energy, making it more feminine—softer, in other words? Alternatively, perhaps there is no relationship between feminine presentation and a feminist message. As a simpler example, consider this: if Simone de Beauvoir’s book The Second Sex were published with a pink silk jacket, does that accentuate the radical content or moderate it? What effect does the cover’s form have on the communication of content to the reader?<br/><br/>
¹From 1 to 4, these are works from the following exhibitions: Today's weather is the same as my mood, 2019, 6th Amado Annualnale, Amado Art Space; Finding Your Fairy #1–#6, 2019, 2019 Seoul Focus: Northing Twice, Buk-Seoul Museum of Art; Maniacs on Popples, 2019, Come to Think of It, It’s a Good Thing Corpses Smell, Art Space Pool; 2X2, Hannah Woo x Mat-kkal: The revenge, it’s ma power, huh!, 2017, Audio Visual Pavilion.<br/><br/>
<br/>
Within the field of feminist art criticism, there has not been much analysis of femininity (apart from topics that have already undergone “feminist” scrutiny). As a result, the level of the debate still seems to be quite basic. In her creative activities, Hannah Woo regards this process of active exploration and appreciation of femininity as a key aesthetic stance. Among the different characteristics of femininity, one of the most pronounced is what we often call the “girlish” sensibility: the desire to make things “pretty” or “cute.” Consider some of the impulses. Is your wall white and empty? Make it pretty by tying silk strips into a ribbon. No pattern on the hangers? Hand-paint the entire body and hang various pleated strips from it. Woo brings out the feeling in her thick, vigorously twisted strips by dangling them in lush and ample ways. The same goes for the edge of the sectioned wall in Duplex: it can’t just be left as is. It would look half-hearted, even pathetic. And so Woo goes through the painstaking work of establishing volume through the use of mesh fabric. “I’m going to make you look pretty too,” she seems to be saying. She’s only satisfied when she has given it the same feeling as a ballerina’s tutu.<br/><br/>
The impulse to decorate something is rarely felt unless you have a strong affection for it. Since it is not a motif, one might disregard it as mere ornamentation—but it is by no means easy work. Like the artist spraying scent in the gallery each day to create a lingering fragrance, it requires the dedication to tend to every last detail, leaving nothing half-done. As we see with the fine brushstrokes that coat the hanger, it takes the devotion to explore her object in all its detail. The “feminine” energies that become infused through this ornamentation are not merely decorative—they help to heighten the artwork’s presence.<br/><br/>
Like the character designs, these feminine tastes are difficult to explain in any logical sense. It’s closer to the intuitive realm of “just because” and “I like it, that’s all”—like when you see something pretty, and your eyes reflexively go wide as you coo, “Oh, how beautiful!” It is, in a word, a personal sensibility, a naturally internalized taste. In an art criticism environment built from male language, femininity is disparaged as representing the periphery rather than the center, ornamentation rather than motif, private rather than public, emotional rather than logical. This is why the female artists of past generations have been hesitant or wary about using feminine methods of expression. Today’s artists, by contrast, give the sense of being much more forthright about incorporating feminine sensibility into their work. Hannah Woo’s approach of actively using “femininity as intuition” could be read along the same lines. While this welcome change has been in evidence, the cultural preconceptions surrounding femininity do not change so readily. Feminine qualities are still dismissed as “not serious”; even among feminists, they run the risk of being misinterpreted as “complacent.” Hannah Woo is keenly aware of this preexisting frame.<br/><br/>
So let us consider this question: when a woman works to keep her figure slim, is she complicit in the patriarchy? The standard of thinness was decided by the patriarchy, reducing women’s bodies to sexual objects. Women have the option of resisting society by rejecting that standard and following the standard of physical beauty that they set for themselves. At the same time, some women might simply prefer having a slim body, based on their own personal situation. There’s nothing inherently wrong with being slim—what’s wrong is a social structure that treats it as the only standard for beauty, to the exclusion of all others. So it might become a more critical question if we reword it to ask, “How can women interpret slimness and reappropriate it into their own language within the patriarchy?”<br/><br/>
<br/>
Along the same lines, if we ask how women might interpret femininity in a patriarchy, the answer could be “positively” or “negatively.” (Indeed, femininity is such a vast and complex concept that it shouldn’t be approached in terms of an “either-or” of affirmation or repudiation.) Femininity encompasses a vast array of different concepts that make up our world. If we accept the qualities denoted by “femininity” while critically filtering out the prejudices that have historically followed along so persistently with them, it might open up a broad range of possibilities for understanding women. To make the simplistic argument that “femininity is a product of patriarchy, and any stance that makes use of it is complacent” is to succumb to the fallacy of reverse discrimination.<br/><br/>
By now, we should be able to find an answer to the earlier question: the subjective choices made by a female artist who decides on her own to appreciate, interpret, and express femininity are quite similar to the characters that Hannah Woo has created.<br/><br/>
Moulage Mélancolique is an arena for a battle among legendary designers who have interpreted female beauty in different ways. For the artist, femininity is a private intuition, so we have to agree that Moulage Mélancolique—presented in Woo’s cabinet as a sculpture of her self—is a dress that embodies the ultimate in femininity.<br/><br/>
The exhibition is dynamic with emotions of sadness and joy, mixed in subtle ways. Woo refers to them with the word mélancolique. More precisely, mélancolique refers to a situation where different emotions or meanings either combine or exist together in an uncombined way, while moulage refers to the artistic approach of molding and shaping. The note that the artist leaves in Duplex describes her feelings of both joy and frustration at being fated to live as a consumer-producer in a market economy. Under such a system, we lack much more than we can ever possess; it is structured in such a way that the consumer always feels defeated, yet repeatedly experiences desire without release. As fellow consumers living in the contemporary era, the viewers can easily relate to this. As an artist, Hannah Woo is also a producer, and the frustration continues. The work of art is a source of inspiration to exhibit endless energy—but once the exhibition is over, it becomes an object of sadness, without so much as a place to properly store it.<br/><br/>
Vivienne Westwood, Jean Paul Gaultier, and Viktor&Rolf are all known from their gaudy Baroque aesthetic. Paying homage to them, Hannah Woo must have felt an exalted feeling of joy as she expressed her feminine fantasy with Westwood’s tartan check pattern and Gaultier’s bustier, voluminous lace skirt, and deep décolletage. But designer dresses are also products on the fashion market, and the mélancolique sentiment is also represented in the other side of the fantasy: the inability to actually afford such an expensive dress. Around the corner, the Nike sneakers seem to be a wake-up call: “Look, here I am—your realistic wish list.” The sewing machine that was used to make the dress, the source of these products that will ultimately be rendered pointless, is titled Bonita Vanité, a reference to the ephemeral beauty of life. The neckties in Moth flutter their lovely wings not as butterflies who will soon fly away, but as mere moths asleep on the wall.<br/><br/>
With the Moulage Mélancolique exhibition, I felt fortunate to be able to encounter Hannah Woo’s candor and hesitation, her honesty and regrets. Such is the nature of an exhibition that it lasts for a little over a month before disappearing; I find myself wondering whether that was what allowed her to summon the courage. Returning home from the exhibition, I took off the coat I had been wearing and put it back in my closet. For the next few days, my room wafted with the scent that Hannah Woo had sprayed each day in Duplex—the place that made into her “cabinet” for a month.<br/><br/>
<br/>
* The discussion of feminism and the artwork information are based on conversations with the artist. In some cases, the artist has been quoted verbatim.<br/><br/>
<hr/>
      코너를 돌자 곧 나타나는 ‘Moulage Mélancolique’ 사인의 민트색이 우한나스럽다고 생각했다. 매 전시마다 달리는 사인이지만, 유독 어서 들어오라는 환영의 인사처럼 느껴진다. 속으로 맞인사를 보내며 계단을 걸어 내려가면, 작가가 준비한 향과 물소리가 점점 또렷해진다. 향과 소리, 그리고 곧 펼쳐지는 광경이 바깥 세상과 전시를 부드럽고도 단호하게 분리한다.
      <br />
      <br />
      <br />
      전시장에 들어서자 높은 벽이 시야를 막는다. 바로 보여주고 싶지 않은 소중한 무언가가 있는 것일까? 작품은 탁 트인 공간에 보기 쉽게 걸려 있지 않다. 그래서 관람객은 잘게 쪼개놓은 공간에서 탐색전을 벌이며 작품을 하나하나 발견해나가야 한다.
      <br />
      <br />
      오른편의 좁은 통로를 지나면, 많지 않은 가짓수이지만 아끼는 소품들만으로 골라 꾸민 듯한 <비오는 날의 슬픔>을 만난다. 정신 없이 지나가는 일상에서 잠시나마 자신의 ‘슬픔’을 마주하는 곳인 것 같은, 아주 내밀한 공간. 그런 사적인 공간을 우리에게 오픈한 작가의 의도를 더듬어보며 걸음을 옮기면 가파르게 잘려진 듀플렉스 벽의 단면이 꽤 히스테릭하다. 한 발짝 옮기면 벽 너머가 슬쩍 보였다가, 또 한 발짝 옮기면 다시 가려진다. 속내를 보여주기로 마음 먹었으면서도 여전히 망설이는 이의 머뭇거림일까.
      <br />
      <br />
      그렇다면 월드로잉 <Stroke Performance>를 커튼에 반쯤 가린 연출도 수긍이 간다. 드로잉의 가장 중요한 부분을 보고 싶다면 에메랄드색 실크 커튼 뒤로 ‘수고스럽게’ 걸어오라는 손짓. 그 수고를 기꺼이 즐긴 이들만이 선물처럼 놓인 아름다운 빈티지 접시와 작은 팬던트를 발견할 수 있다. 내가 소중한 비밀을 꺼내놓을테니, 알고 싶으면 당신도 이 게임에 성의를 보이라는 일종의 테스트 같기도 하다. 마네퀸을 지나 듀플렉스 깊숙한 곳에 자리를 잡고 앉으면 그제서야 전시를 천천히 관조할 여유를 찾는다.
      <br />
      <br />
      자신이 만든 캐릭터를 통해 세상과 소통해온 우한나가 이번 전시에서는 거울을 스스로에게 비춘다. 자신의 방이라고 소개한 듀플렉스의 히로인이자 작가의 또 다른 자아(alter ego)로 보이는 <Moulage Mélancolique>는 공작새 같은 오뜨 꾸띄르 드레스의 실루엣을 한껏 뽐내며, 공간 전체에 여성적인 기운을 뿜어낸다.
      <br />
      <br />
      <br />
      <br />
      여기 우한나의 다양한 여성들이 있다. 〔1〕그녀는 크지 않은 체구임에도 매일 창틀 위 같은 자리에서 온 몸으로 세상의 풍파를 마주한다. 매일 아침 비장하게 창에 오르기 전 그녀는 옷에 달린 레이스 주름을 풍성하게 다듬는 루틴을 잊지 않는다. 〔2〕자본주의 생태계 피라미드에서 최하위에 위치한 동물들의 위기를 보다 못한 요정들이 지구로 출정을 나선다. 요정들은 피켓대신 실크수공예 패브릭 사인을, 단체복대신 실크 로브를 준비한다. 〔3〕그녀가 지나갈 때마다 ‘어머, 저 괴상망측한 여편네 좀 봐, 저 여자가 그렇게 난잡하다며?’하며 숙덕이는 뒷말이 무성하다. 당당한 그녀에게 세간의 수군거림은 그녀의 삶을 좀 더 드라마틱하게 만들어주는 액세서리일 뿐이다. 〔4〕오늘도 그녀는 보복에 성공하는 그 날만을 꿈꾸며 스스로를 단련하다. 무술, 도끼, 철퇴를 하나씩 마스터해가며 그 놈을 시원하게 쓰러뜨리는 상상을 할 때마다 입가에 회심의 미소가 걸린다.
      <br />
      <br />
      <br />
      <cite>
        〔1〕 〈오늘 날씨는 제 마음과 같네요〉, 2019, 《제6회
        아마도애뉴얼날레_목하진행중》, 아마도 예술공간
        <br />
        〔2〕 〈당신의 요정을 찾아 #1-#6〉, 2019, 《2019 서울포커스: 두 번의 똑
        같은 밤은 없다》, 서울시립 북서울미술관
        <br />
        〔3〕 〈Maniacs on Popples〉, 2019, 《사실, 시체가 냄새를 풍기는 것은
        장점이다》, 아트스페이스 풀
        <br />
        〔4〕 «2X2» 우한나 X 맛깔손 : The revenge, it’s ma power, huh!, 2017,
        시청각
      </cite>
      <br />
      <br />
      <br />
      다른 전시에서 발표한 서로 다른 캐릭터들이지만 기존 질서나 어떤 대상에 맞서기를 주저하지 않는 에너지가 그녀들을 하나의 존재로 묶어준다. 작가에게 이 캐릭터들은 어떤 의미일까? 세상 속에서 자아를 확장하도록 도와주는, 현재 모습을 비추는 거울이자 다음 단계로 성장할 수 있도록 돕는 존재들이라고 상상할 수 있다. 아마도 봉제선을 몇 번이나 튿어내고 다시 기우며, 바늘에 수십번씩 손가락을 찔리며 완성한 존재들일텐데, 그녀들과 씨름하며 보냈을 밤들만큼 심리적으로도 단단한 애착으로 맺어져 있을 터이다. 여성성에 대한 독창적인 해석으로 알려진 세 디자이너의 스타일을 결합한 <Moulage Mélancolique>는 이제껏 보아온 캐릭터들 가운데 가장 여성스럽다.
      <br />
      <br />
      익히 알려져 있듯 우한나의 작업은 다양한 면에서 여성적이다. 작가는 일관되게 여성 주체를 만들어온 이력과 여성적 매체의 대표격인 바느질을 사용한다는 점 외에도, ‘여성적’이라고 여겨지는 시각적 형식(컬러톤과 질감, 모티프들)을 능수능란하게 구사한다. 색을 예로 들자면, 원색보다는 그보다 채도가 낮은 파우더리한 색이 작가의 간택을 받는다. 색 이름 앞에 ‘베이비’나 꽃이름, 혹은 과일이름을 붙이면 그 주변의 부드러운 색을 가리키곤 한다. 이를테면 파랑의 경우 베이비블루나 미스티블루, 혹은 네이비블루, 노랑이라면 레몬색이나 파스텔 옐로우가 되겠다. 같은 식으로 보라보다는 라일락이나 라벤더, 초록보다는 민트, 터쿠아즈, 올리브그린이 우한나스러운 컬러 팔레트가 되겠다. 크리미한 컬러들의 조합은 차분할 것 같지만, 작가의 주선으로 실크 패브릭의 광택을 만나면 화려하게 변신한다. 맥시멀리스트 우한나는 여기에 드레이핑, 플리팅(주름 잡기), 레이스, 리본, 매듭, 브레이딩, 솜을 채워넣는 스터핑 등 다양한 방식으로 한껏 멋을 더해 로코코 시대 드레스처럼 화려하고 장식적인 결과물을 만들어낸다.
      <br />
      <br />
      주체적인 여성 캐릭터를 만들고, 공예라는 여성적 활동을 독특하게 해석하는 작가의 행보는 여성주의 미술의 맥락에서 풍부하게 논의할 수 있는 단골 주제이다. 그런데, 이어서 여성성을 표현한 시각 형식들(여성적인 컬러톤과 모티프 등)까지 여성주의적으로 해석할 수 있는지에 대해서는 잠시 멈칫하게 된다. 결론보다는 질문들이 뒤따른다. 우한나가 즐겨 쓰는 여성적인 연출법들은 주체적인 여성 캐릭터나 여성적 매체의 에너지를 더욱 강화(强化, empowering)하는가? 아니면, 그들의 에너지를 ‘여성스럽게,’ 다시 말해 부드럽게 누그러뜨리는가? 둘 중 어느 쪽도 아니라면, 여성주의적 메시지와 여성적 연출법은 서로 관계가 없는가? 조금 더 단순한 예를 떠올려본다. 시몬 드 보부아르가 쓴 <제 2의 성> 책에 분홍색 실크 표지를 입히면 내용의 급진성을 더욱 강조할까, 아니면 온건하게 완화할까? 표지의 형식은 책의 내용을 독자에게 전달하는 데 어떤 영향을 미치는가?
      <br />
      <br />
      <br />
      여성주의 미술 비평 내에서도 여성성(이미 ‘여성주의적’는 검증을 마친 주제가 아닌)에 대한 분석이 많지 않았고, 그래서 논의의 수준도 아직 꽤 단순한 상태인 듯 하다. 우한나의 경우, 창작 활동에 있어서 여성성을 적극적으로 탐색하고 향유하는 과정을 중요한 미적 태도로 여긴다. 여성성의 다양한 속성들 중에서도, 어떤 대상을 예쁘게, 귀엽게, 사랑스럽게 만들어주고 싶은, 흔히 말하는 소녀감성이 두드러진다. 이를테면 이런 충동들이다. 벽이 하얗게 비어있다면? 공단 끈을 겹겹이 감아 리본을 묶어 예쁘게 만들어준다. 원래 무늬가 없던 행거에는? 바디 전체에 꼼꼼하게 핸드페인팅을 하고, 땋은 끈들을 여러 갈래 걸어둔다. 굵고 시원시원하게 꼬은 끈들을 풍성하고 넉넉하게 늘어뜨려 느낌을 살린다. 듀플렉스의 잘려진 벽 끄트머리도 그대로 둘 수 없다. 그냥 놔두면 성의 없어 보이고, 괜스레 안쓰럽기까지 하니까. ‘너도 예쁘게 만들어줄게’ 하며 일명 ‘샤’천으로 볼륨을 잡는 까다로운 일을 굳이 벌이고 만다. 발레복 튀튀 같은 느낌을 가미하고 나서야 만족스럽다.
      <br />
      <br />
      무언가를 꾸미고 싶다는 충동은 대상을 아끼는 마음 없이는 좀처럼 일지 않는다. 주제가 아니기 때문에 장식에 불과하다고 무시할 수도 있지만, 실은 절대 쉬운 일이 아니다. 매일매일 전시장에 향수를 뿌려 향을 배이게 만들듯이, 작은 일이라도 허투루 넘기지 않고 챙기는 성실함이 필요하고, 행거 구석구석을 자잘한 붓질로 채우듯이, 대상을 꼼꼼히 살펴보는 정성이 들어간다. 꾸밈을 통해 불어넣어지는 이런 ‘여성적인’ 에너지들은 그래서 ‘단지’ 장식에 머물지 않고 작품의 존재감을 높이는 데 일조한다.

      <br />
      <br />
      한편, 이런 여성적인 취향은 캐릭터들을 기획할 때처럼 논리으로는 설명하기 어렵다. 예쁜 것들을 발견했을 때 반사적으로 눈이 동그랗게 커지면서 ‘예쁘다!’고 외치게 되는 것처럼 ‘그냥,’ ‘좋아서’ 일어나는 직관적인 영역에 가깝다. 말하자면 자연스럽게 체화된, 내밀한 감각이자 취향 것이다. 남성의 언어로 쌓아올려진 미술 비평에서 여성성은 중심이 아닌 주변, 그러므로 주제가 아닌 장식이고, 공적이기보다 사적이며, 논리적이기보다 감정적인 것으로 폄하되어왔다. 그래서 이전 세대의 여성 작가들은 여성적인 표현을 사용하는 데 머뭇거리고 경계하곤 했다. 그와 비교해 요즘 작가들은 여성적인 감수성을 작업에 끌어들이는데 더욱 솔직하다는 인상을 받는다. 우한나가 직관으로서의 여성성을 적극적으로 활용하는 태도도 이런 맥락에서 읽을 수 있을 것이다. 이러한 반가운 변화가 감지되는 동시에 여성성을 둘러싼 문화적인 편견은 쉽게 변하지 않는다. 여전히 여성적인 속성은 진지하지 않다고 치부되거나, 심지어 여성주의 진영에서도 안일하다고 오독될 위험을 안고 있기 때문에 우한나 역시 이러한 기존의 프레임을 첨예하게 의식하고 있다.
      <br />
      <br />
      <br />
      그렇다면 이렇게 질문을 던져보자. 마른 몸매를 갖기 위해 노력하는 여성은 가부장제에 부역하는 것인가? 마른 몸매는 가부장제가 여성의 몸을 성적 대상으로 축소하며 정한 기준이다. 여성은 이 기준을 거부하고 각자 스스로가 정한 아름다운 몸의 기준을 따르며 사회에 저항할 수 있다. 그런데 어떤 여성들은 각자 나름의 사정에 따라 마른 몸매를 선호할 수도 있다. 마른 몸 자체가 잘못된 것이 아니고, 그것만이 유일한 미의 기준인 것처럼 다른 기준을 소외시키는 사회 구조가 잘못되었기 때문이다. 따라서 ‘가부장제에서 여성은 마른 몸매를 어떻게 해석하고 스스로의 언어로 전유할 수 있는가?’라고 고쳐 써야만 보다 비판적인 질문이 될 수 있다.
      <br />
      <br />
      마찬가지로 가부장제에서 여성이 여성성을 어떻게 해석할 수 있는지를 묻는다면, 긍정할 수도 부정할 수도 있다는 것이 답변일 것이다. (사실 여성성은 무척 광범위하고 복잡한 개념이기 때문에 긍정/부정이라는 이분법적으로 접근할 문제는 아니다) 여성성은 이 세상을 구성하는 무수히 많은 개념들을 포함한다. 여성성이 가리키는 속성들 자체는 받아들이되, 역사적으로 그 속성들에 끈질기게 따라다니는 편견들을 비판적으로 걸러낸다면 여성성은 여성을 이해할 수 있는 드넓은 가능성을 열어줄 것이다. 그러니 여성성이 가부장제의 산물이기 때문에 이를 취하는 태도는 안일하다는 식의 단순한 논리를 편다면, 오히려 역소외의 오류에 빠지는 셈이다.
      <br />
      <br />
      <br />
      이제 이전 질문에 어느 정도 답을 찾을 수 있을 것 같다. 스스로 여성성을 향유하고, 해석하고, 표현하기로 선택한 여성 작가의 주체적인 선택들은 우한나가 만들어온 캐릭터들을 무척이나 닮아 있다.
      <br />
      <br />
      <br />
      <br />
      〈Moulage Mélancolique〉는 여성의 아름다움을 각기 다르게 해석한 전설적인 디자이너들의 각축장이다. 작가에게 여성성이 내밀한 직관이기에, 본인의 방에 자아의 한 조각으로 소개한 <Moulage Mélancolique>가 여성성의 극치를 표현한 드레스라는 점에 고개가 끄덕여진다.
      <br />
      <br />
      전시에는 슬픔과 기쁨이 미묘하게 뒤섞인 정서가 역동하고 있다. 작가는 이러한 정서를 ‘Mélancolique’이라고 부른다. 조금 더 자세하게 설명하자면, ‘Mélancolique’는 서로 다른 정서나 의미들이 결합되거나 혹은 결합되지 못한 채로 함께하는 상태, ‘Moulage’는 성형, 조형이라는 뜻으로 작가가 작업하는 방식을 가리킨다. 듀플렉스에 작가가 슬쩍 남긴 노트는 시장경제체제에서 소비자-생산자로서 숙명처럼 안고 살아가는 자신의 희열과 좌절에 대해 고백한다. 이 체제에서는 가질 수 있는 것보다 없는 것이 훨씬 많고, 그래서 소비자가 늘상 패배감을 달고 살도록, 그럼에도 불구하고 출구 없는 욕망을 반복하도록 구조화되어있다. 동시대를 살아가는 같은 소비자로서 관람객들도 쉽게 공감할 수 있는 정서일 것이다다. 생산자인 작가로서도 우한나의 좌절은 계속된다. 미술 작품은 무한한 에너지를 발휘하도록 하는 영감원인 동시에, 전시 후에는 보관할 장소조차 마땅치 않은, 슬픔의 존재로 둔갑한다.
      <br />
      <br />
      비비안 웨스트우드와 장 폴 고티에, 빅토르 앤 롤프는 화려한 바로크적인 미감으로 알려져 있다. 우한나는 이들에게 보내는 오마주로서 웨스트우드의 타탄체크와 고티에의 뷔스티에, 풍성한 레이스 치마, 깊게 파인 클리비지 라인 등으로 그녀가 가진 여성적 판타지를 표현하며 고양되는 듯한 기쁨을 느꼈을 것이다. 한편 디자이너들의 드레스는 패션시장에 나온 상품이기도 한데, 실제로 고가의 드레스를 구매할 수 없다는 판타지의 이면이 ‘Mélancolique’한 정서를 담고 있다. 코너를 돌면 나이키 운동화가 ‘이봐, 너의 현실적인 위시 리스트는 나야’ 라며 꿈에서 깨워주는 듯 하다. 드레스를 만들어준 도구이자 무용해질 결과물들의 원천인 재봉틀의 제목 <Bonita Vanité>는 덧없는 인생의 아름다움을 의미한다. <나방>의 넥타이들은 아름다운 날개를 펄럭이며 날아갈 나비가 아니라 벽에서 잠든 나방이 되는 데 그쳤다.
      <br />
      <br />
      <br />
      《Moulage Mélancolique》전에서 작가의 솔직함과 머뭇거림, 솔직함과 후회를 만날 수 있어 행운이라고 생각했다. 한 달 남짓 존재하다 사라지는 전시의 속성 덕분에 용기를 낼 수 있지 않았을까 생각해본다. 집에 돌아와 전시를 볼 때 입고 있던 코트를 장롱에 다시 넣어 놓았다. 작가가 듀플렉스, 그러니까 한 달여동안 자신의 방으로 삼았던 공간에 매일 뿌려두던 향수 향기가 며칠이 지나서까지 계속 내 방에 퍼져나갔다.
      <br />
      <br />
      <br />
      <br />
      <cite>
        * 여성성에 대한 논의, 작품 정보 등은 작가와의 대화에 기반해 작성했으며,
        일부 작가의 언어 그대로를 옮겼음을 밝힌다.
      </cite>
      <br />
      <br />

      <img
        class="inner_img"
        src="images/hannahs-room-img1.jpg"
        alt="얼깃설깃 컷팅된 벽에서 예민함이 느껴진다_사진 유한나 제공"
      />
      <cite>얼깃설깃 컷팅된 벽에서 예민함이 느껴진다_사진 유한나 제공</cite>
      <br />
      <br />
      <img
        class="inner_img"
        src="images/hannahs-room-img2.jpg"
        alt="우한나, Maniacs on Popples 부분, 2019_ 사진 홍철기"
      />
      <cite>우한나, 〈Maniacs on Popples〉 부분, 2019_ 사진 홍철기</cite>
      <br />
      <br />
      <img
        class="inner_img"
        src="images/hannahs-room-img3.jpg"
        alt="흰 벽에 어여쁘게 리본을 묶어주었다_사진 유한나 제공"
      />
      <cite>흰 벽에 어여쁘게 리본을 묶어주었다_사진 유한나 제공</cite>
      <br />
      <br />
      <img
        class="inner_img"
        src="images/hannahs-room-img4.jpg"
        alt="옛 남미 민속품 같은 느낌을 상상하며 그린 패턴이 행거를 뒤덮고 있다_사진 유한나 제공"
      />
      <cite>
        옛 남미 민속품 같은 느낌을 상상하며 그린 패턴이 행거를 뒤덮고 있다_사진
        유한나 제공
      </cite>
      <br />
      <br />
      <img
        class="inner_img"
        src="images/hannahs-room-img5.jpg"
        alt="층층이 얼깃설깃 보이도록 신경써서 컷팅한 후 볼륨을 잡아 완성한 주름_ 사진 이의록"
      />
      <cite>
        층층이 얼깃설깃 보이도록 신경써서 컷팅한 후 볼륨을 잡아 완성한 주름_사진
        이의록
      </cite>
      <br />
      <br />
      <img
        class="inner_img"
        src="images/hannahs-room-img6.jpg"
        alt="우한나 작가와 〈Moulage Mélancolique〉_ 사진 이의록"
      />
      <cite>우한나 작가와 〈Moulage Mélancolique〉_ 사진 이의록</cite>
      <br />
      <br />`
    ]
  },
  {
    id: "too-fast-to-live-too-young-to-die",
    category: "Sungah Serena Choo. Independent curator / 추성아 큐레이터",
    title:
      "Too Fast to Live, Too Young to Die: Her Rediscovered Homages and Knockoffs / Too Fast to Live, Too Young to Die : 그녀의 새삼스러운 오마주와 모조들",
    pointOfInterest: 70,
    backgroundColor: "#814A0E",
    article: [
      `
      Classic movements shimmer in the memory among the flashing lights. More than the languid woman’s vocals—which sound like something you would hear in the Carlyle or the Ritz, like the smell of old carpet underneath your feet—it is the noisy clicking of camera shutters that fill the runway of Viktor & Rolf’s 2017 spring/summer haute couture show. With their patchwork collages and the vivid polyurethane mesh representative of Viktor & Rolf, the dresses are avant-garde sculptures, boasting the brand’s signature exaggerated ruffles and elaborate detail. Where other ready-to-wear collections have moderated tempos, haute couture collections are heightened into theatrical, ostentatious devices, blurring the boundary of art and fashion to a dizzying degree. At the center of the runway is an enormous commissioned flower sculpture by Frank Bruggeman, resembling a late-Renaissance still-life of flowers—a sui generis painting genre in the Netherlands of the 17th century—expanded into a dreamlike reality. As in the paintings of Jan Brueghel I, these are flowers in their most attractive state, flowers that grow upward in defiance of proportion, epitomizing the extravagant collector’s item as a display of wealth, much like the romantic ruffles that ripple outward the higher up they are on the models’ bodies. With its attempt to preserve that most beautiful moment even after its time has passed, the flower sculpture might seem cynical, standing at the center of the runway in a fashion industry where one season’s items are quickly consumed and forgotten. Fading as they do over time, the flowers relate to a reality where we cannot satisfy our desire to possess worldly beauty, like the still-life vanitas paintings of Ambrosius Bosschaert I. With that ambivalent, contorted feeling somewhere in the gray area between candor and falsehood, we harbor that simple dream in the deepest reaches of our heart, pushing our Sisyphean rocks even today.<br/><br/>
      [Moulage Mélancolique: +Viktor & Rolf 2017s/s, 2019]<br/><br/>
      Zeus’s punishment of Sisyphus, whom he had Hermes send to the hills of the underworld to forever push his enormous rock up a slope, is like the anguish, absurdity, and loss that continue harshly visiting us in life, forcing us each to develop our own defense mechanisms. We must permit ourselves our rationalizations, our simplifications, our self-negations, our petty ploys and other defenses, or else it becomes too brutal for us to honestly face the world we desire. The material desire for things we cannot realistically have, and the sense of alienation that emerges when we are able to consume things through our present efforts, but the attendant spaces do not actually follow suit, stand to plunge our naïve and fragile hearts back into despair. If, in spite of it all, we see the rock start to tumble back down again just as Sisyphus reaches the summit and we imagine to ourselves, “Well, it must have been nice”—it may come from a life that leaves us wanting to cry, alternating between comedy and tragedy that we can only enjoy in that moment. Mythology ultimately strips the sense of balance from the object, triggering a malfunctioning of fiction and reality. If this was the uncontrollable perspective on the world seen before in the darkened city at Hannah Woo’s studio Chokchok Tumyeonggak, then perhaps now she is presenting a psychedelic recreation of her copies for a future that might never be reached.<br/><br/>
      Coarsely stitched by the creators’ hand, the pastel-toned masses of fabric become an Acne Studio Musubi shopping bag, a Maison Margiela 5ac mini bag, a Dries van Noten drape accessory. Perhaps it is way they
appear most elegant when simply held in the hand or their momentary embodiment of a sculptural object, but they emerge with the aesthetic of something that “belongs” to someone or something that has been “made.” [Bag with You, 2019] Treasured accessories are placed in the sad space of a rainy day, combined with a Louis Poulsen PH5 knockoff to reveal their hidden faces like embarrassing trophies. [Saturanus and Uranos, 2019] The real thing and the glorious face share curious echoes with the 21st century history of Louis Poulsen. The sadness of the rainy day may be the “Cabinet of Curiosity” of our secret desires, a fortress erected as we defend them with a sturdy shield and armor. Everything in this curious cabinet is preserved, recalling death and the memorializing of beautiful things. This may explain why the “Sadness,” which includes the realm of reality, is positioned on the other side of Duplex, where it is both close to and far from the opposing “Rainy Day Happiness,” where it can weigh in both directions. Believing that there is a “perfect place” where time and space correspond perfectly in the coordinates of this tiny world, Moulage Mélancolique may represent the opposite pole from City Unit. [Rainy Day Sadness, Rainy Day Happiness, 2019]<br/><br/>
The reversible space, with the walls and carpet cut out with scissors and reinforced with lacquer spray, is covered in a color reminiscent of the sweet macaroons popular during the Rococo era. The blue mist- colored molded wall duplex seems to flow downward, existing as both a place of nostalgia (said to be a childhood home), a stage of frozen theater, and masses of desire to be turned suddenly into ashes for a ritual ceremony. [Duplex, 2019] The desire goes beyond and the Baroque and Rococo eras and the snow- white Empire lines of Neoclassicism, as cult fashion also makes its present felt in the space through deconstructed forms that are historical homage and plain-and-simple imitation: a tartan check from Vivienne Westwood’s Anglomania collection and a bustier wrap dress by Jean Paul Gaultier. [Moulage Mélancolique: Vivienne Westwood check + Jean Paul Gaultier’s bustier, 2019] The disconnect from reality is comically illustrated with an enormous mobile of Bacchus’s grapes, a decoration from an arrogant perspective that shows the desire for what cannot be possessed. [Bacchus, 2019] Nike Dunks, which represent “today’s sneakers” with their skyrocketing prices, are placed together with crude objects representing calves, so that it does not seem to matter whether they are real or imitation, or perhaps an homage to the real thing. They balance precariously on a single foot. [Me Nike Like, 2019]<br/><br/>
What is this isolated cabinet, created by our fixation on tirelessly teeming desires? Just as a conductor does not mask the subtle tone colors as they guide the listener to distinguish them, these rediscovered homages and knockoffs tidily mix and display an array of different sound particles, ranging from the flexible low range of a massive painting representing the conductor’s perspective [View Point of Conductor, 2019] to a mural that delivers a full wallop [Stroke Performance, 2019]. Woven finely together with needle and thread, the particles practice an attitude of active possession and control that contrasts with the lovely hidden vanitas still-life [Bonita Vanité, 2019] and the single tiny grape placed precariously behind the curtain. Capable of weaving any and all things, the cabinet represents the dreams, the memories, and the fears created by the trivial desires of today—the blind anticipation of hope for the future and hope for death. To achieve these desires, we have become “too fast to live, too young to die.”
      <hr/>
      반짝거리는 조명들 사이에 고색창연한 움직임들이 기억 속에 아른아른하다. 발 아래로 쾌쾌한 카펫 냄새가 나는 듯한 칼라일, 리츠에서 들릴 법한 축 늘어지는 여성 보컬의 목소리보다 카메라의 요란한 셔터음들이 빅토르 앤 롤프(Viktor & Rolf)의 2017년 봄/여름 오뜨 꾸뛰르가 열렸던 런웨이를 가득 메웠다. 빅토르 앤 롤프를 대표하는 소재인 폴리우레탄의 비비드한 망사 원단과 패치워크 조각보로 꼴라주 된 드레스는 브랜드의 시그니처인 과장된 러플과 정교한 디테일의 전위적인 조각이다. 완급 조절이 어느 정도 되는 기성복 컬렉션과 다르게 오뜨 꾸뛰르는, 현기증 날 정도로 패션과 예술의 경계가 모호하게 연극적이고 과시적인 무대의 장치로 극대화된다. 당시 런웨이의 중앙에 놓였던 프랭크 브뤼게만(Frank Bruggeman)의 거대한 커미션 꽃 조각은 17세기 네덜란드에서 독자적인 회화의 한 장르로 자리 잡았던 후기 르네상스 꽃 정물화에서 확장되어 또 하나의 꿈 같은 현실로 튀어나왔다. 얀 브뤼헐 1세(Jan Brueghel I)의 회화에서처럼 가장 보기 좋은 상태의 꽃들, 비율과 상관없이 위로 커지는 꽃들은 마치 모델들의 상체 위로 올라갈수록 퍼지는 낭만적인 러플과 같이 부를 과시했던 호사스러운 수집 대상의 절정을 보여준다. 제 철이 지났음에도 가장 아름다웠던 찰나의 순간을 박제하려는 꽃 조각은 한 시즌이면 빠르게 소비되고 잊혀지는 패션 인더스트리의 런웨이 중앙에 하나의 조각으로 우뚝 서 있는 풍경이 냉소적으로 보일 정도다. 우리는 시간이 지남에 따라 지는 꽃을 헛된 삶인 바니타스(Vanitas)적인 보스카르트(Ambrosius Bosschaert I)의 정물화처럼 세속적인 아름다움을 소유하고 싶은 욕망을 채울 수 없는 현실과 맞닿아 솔직함과 거짓말, 그 회색의 어느 지점에서 양가적이고 일그러진 마음으로 오늘 하루도 시지프스(Sisyphus)의 돌을 굴리며 소박한 꿈을 가장 깊숙한 마음 한 켠에 품는다.
      <br />
      <br />
      제우스가 헤르메스를 통해 시지프스에게 지하세계의 산기슭에 거대한 바위를 굴리게끔 내린 굴레의 형벌은 삶에서 잔인하게 다시 찾아오는 고통, 부조리와 상실감과 같아 각자의 또 다른 방어기제를 쌓게끔 만든다. 우리는 스스로에게 합리화나 순화, 자기 부정 혹은 사소한 속임수 같은 보호막을 허용하지 않는다면 욕망하는 세상을 정직하게 대면하기에 너무나 잔혹할 것이다. 현실적으로 가질 수 없는 물질적인 소유욕과 설령 작금의 노력으로 소비하게 될지언정, 착 감기는 공간이 현실적으로 따라주지 않는다면 그 둘에서 오는 괴리감은 유리같은 순진한 마음을 다시 한번 휘저어 절망에 빠뜨릴 것이다. 그럼에도 불구하고, 우리는 시지프스가 돌을 정상에 올린 순간, 그 돌이 다시 굴러 떨어졌을 때 “어쩌면 기분이 좋았을 것”이라는 상상은, 그 순간에도 즐길 수 밖에 없는 희극과 비극 사이를 오가는 울고 싶은 인생살이일 것이다. 결국에 신화는 어떤 대상에 대한 균형 감각을 상실하고 허구와 현실에 대한 오작동을 일으킨다. 그것은 한 때 캄캄한 도시의 “촉촉투명각”에서 바라본 바깥 세상에 대한 겉잡을 수 없는 시선이었다면, 지금은 어쩌면 도달할 수 없을 것 같은 미래를 향한 자신의 복제들을 사이키델릭하게 재연하는 것일지도 모른다.
      <br />
      <br />
      조물주의 손으로 거칠게 꿰맨 파스텔 톤의 패브릭 덩어리는 아크네 무스비(Acne Studio Musubi) 쇼퍼백으로, 마르지엘라(Maison Margiela) 5ac 미니백으로, 드리스 반 노튼(Dries van Noten)의 드레이프 장식으로, 무심하게 손으로 들었을 때 가장 멋진 형태 혹은 순간적인 조각 오브제의 구현인지, 누군가의 것과 당신이 만든 것에 대한 미감으로 탄생한다. 비오는 날의 슬픔의 공간에 놓인 당신의 아끼는 소품들은 루이스 폴센(Louis Poulsen)의 PH5 모조품과 함께 쑥스러운 트로피들과 같이 숨어서 얼굴을 드러낸다. 그렇게 진짜배기와 위대한 복제품은 교묘하게 21세기 루이스 폴센의 역사와 함께 간다. 비오는 날의 슬픔은 단단한 방패와 갑옷으로 덮고 요새를 세운 우리의 비밀스러운 욕망이 구축된 “호기심의 방(Cabinet of Curiosity)”일 것이다. 이 기이한 방에는 모든 것이 박제되어 있어 아름다운 것들을 추모하는 죽음에 해당하며 그래서인지 현실 영역을 담고 있는 슬픔은 반대편의 비오는 날의 기쁨과 가깝고도 먼 곳에 듀플렉스를 가운데 두고 양쪽으로 저울질 할 수 있는 좌표에 위치해 있다. 이 작은 세상의 좌표에 시간과 공간이 서로 딱 들어맞는 완벽한 지점이 있다고 믿는 당신의 ‘물라쥬 멜랑콜리크’, 
      이것이 ‘시티유닛츠
      <span class="sub">작가의 첫 개인전</span>
      ’의 반대편이 아닐까 싶다.
      <br />
      <br />
      가위로 오려낸 벽과 카펫을 라카 스프레이로 박음질한 리버서블한 공간은 로코코 시대에 유행했던 달달한 덩어리의 마카롱과 같은 색으로 뒤덮여 있다. 블루 미스트로 도색된 흘러내리는 듯한 몰딩된 벽면의 듀플렉스는 유년기 집이라고 하는 노스탤지어의 장소이자, 정지된 연극의 무대이자 제의적인 의식을 치르기 위해 홀연히 재가 될 욕망 덩어리들이다. 이 욕망은 바로크, 로코코 시대와 신고전주의의 순백의 엠파이어 라인을 넘어, 시대의 오마주이자 모방을 가감없이 보여준 비비안 웨스트우드(Vivienne Westwood) 앙글로매니아 컬렉션(Anglomania Collection)의 타탄(Tartan)체크와 장폴 고티에(Jean-Paul Gaultier)의 뷔스티에(Bustier) 랩 드레스의 해체된 모습으로 컬트 패션이 공간에서 존재감을 드러낸다. 바쿠스의 거대한 포도송이 모빌은 오만한 시점에서 가질 수 없는 욕망에 대한 장식으로 현실과의 괴리를 우스꽝스럽게 드러낸다. 프리미엄이 천정부지하게 붙는 오늘의 스니커테크에 해당되는 나이키 덩크는 조악한 종아리 오브제가 장착되어 이것이 진품인지 모조인지, 진품에 대한 오마주인지 중요하지 않은 듯 그곳에 덩그러니 놓여있다. 한 발로 아슬아슬하게.

      <br />
      <br />
      지루함을 느낄 겨를 없이 넘치는 욕망에 대한 집착이 만들어낸 고립된 방은 무엇일까? 마치 지휘자가 관객으로 하여금 음색을 구분할 수 있도록 유도하여 미세한 음색을 마스킹하지 않은 것처럼, 새삼스러운 오마주와 모조들은 지휘자 시점에서 바라본 150호 회화의 탄력적인 저역에서 시작하여 충분한 타격감의 벽화까지 음의 입자를 다채롭게 반죽하여 펼쳐놓은 듯 가지런하다. 바늘과 실로 곱게 엮은 이 음의 입자들은 숨어 있는 예쁜 바니타스의 정물과 커튼 뒤에 아슬아슬하게 놓인 작은 포도 한 알과 상반되게 소유와 통제에 대한 적극적인 태도를 실천한다. 무엇이든 엮을 수 있는 이 방은 미래에 대한 희망과 죽음에 대한 희망을 맹목적으로 기다리고 기대하는 오늘의 사소한 욕망들이 만들어낸 꿈과 기억 그리고 두려움이다. 우리는 이 욕망들에 다다르기 위해 “죽기엔 너무 이르고, 살기엔 너무 타락했다(Too fast to live, too young to die).”[1]
      <br />
      <br />
      <blockquote>
        [1] "SEX: Too Fast to Live, Too Young to Die"는 1970년대에
        섹스피스톨즈의 매니저 말콤 맥라렌(Malcolm McLaren)과 비비안 웨스트우드가
        운영했던 매장 이름이다.
      </blockquote>
      <br />
      <br />
      <img
        class="inner_img"
        src="images/too-fast-to-live-too-young-to-die-img1.jpg"
        alt="물라쥬 멜랑콜리크 : +Viktor & Rolf 2017s/s + Vivienne Westwood check + Jean Paul Gaultier’s bustier, 2019  사진 이의록"
      />
      <cite>
        물라쥬 멜랑콜리크 : +Viktor & Rolf 2017s/s + Vivienne Westwood check +
        Jean Paul Gaultier’s bustier, 2019 사진 이의록
      </cite>
      <br />
      <br />
      <img
        class="inner_img"
        src="images/too-fast-to-live-too-young-to-die-img2.jpg"
        alt="Bag with You, 2019_ 사진 이의록"
      />
      <cite>Bag with You, 2019_ 사진 이의록</cite>
      <br />
      <br />
      <img
        class="inner_img"
        src="images/too-fast-to-live-too-young-to-die-img3.jpg"
        alt="Bag with You, 2019_ 사진 이의록"
      />
      <cite>Bag with You, 2019_ 사진 이의록</cite>
      <br />
      <br />
      <img
        class="inner_img"
        src="images/too-fast-to-live-too-young-to-die-img4.jpg"
        alt="Bag with You, 2019_ 사진 이의록"
      />
      <cite>Bag with You, 2019_ 사진 이의록</cite>
      <br />
      <br />
      <img
        class="inner_img"
        src="images/too-fast-to-live-too-young-to-die-img5.jpg"
        alt="비오는 날의 슬픔, 2019_ 사진 이의록"
      />
      <cite>비오는 날의 슬픔, 2019_ 사진 이의록</cite>
      <br />
      <br />
      <img
        class="inner_img"
        src="images/too-fast-to-live-too-young-to-die-img6.jpg"
        alt="비오는 날의 기쁨, 2019_ 사진 이의록"
      />
      <cite>비오는 날의 기쁨, 2019_ 사진 이의록</cite>
      <br />
      <br />`
    ]
  },
  {
    id: "solid-and-fine-improvisation",
    category: "Sunwoo Nam. Curator / 남선우 큐레이터",
    title:
      "Hard and Dense Improvisation: Hannah Woo’s Moulage Mélancolique / 단단하고 촘촘한 즉흥",
    pointOfInterest: 120,
    backgroundColor: "#959684",
    article: [
      `
      My first impression of Moulage Mélancolique was that it was like looking at the record of an improvised dance. It was as though the artist had ringed the exhibition space to set up a low boundary, within which she performed a long, unchoreographed dance. The reason I imagined a spontaneous dance in this space— a static setting like a stage after the play is over, consisting of motionless mannequins in vibrant clothing, strewn body parts, and objects standing or suspended without drive—is not that they seemed to have been made without a plan or fixation on form, but that they resembled the results of actions based on cumulative choices from moment to moment.<br/><br/>
Viewing the traces left by the artist’s carefree actions, which fill every corner of the exhibition space, one does not so much speculate about the movements behind them. Instead, one reflects on the choices that must have been made at each moment. For instance, her choices can be traced in the ways she has hung or propped up paintings of various sizes and then extended her canvases with colorful brushstrokes applied to the neighboring walls; braided fine silk to make chains of gold; cut fabric into small pieces that were then scattered about; carved her false walls into various shapes; and planted green mesh like turf in the opened sections. We can see this in the titular Moulage Mélancolique (2019), which stands in the exhibition space like its master, or the Bag with You (2019) pieces that are placed all around: within her space, she seems to have made tens of thousands of different choices. How far should she sew the necktie and where should she cut it? What color thread should she use to stitch together the rough fabric next to the plush fur? Should she edge the fabric with a hem stitch or leave it alone? Should she plait together three or four strands of the fine, hairlike silk? What should the ratio be between the handbag’s strap and the body? What color paint should be applied to the brush dangling from the end of the hanger?<br/>
To make these decisions, Hannah Woo did not rely on color theory or the golden ratio, or work according to some pre-developed plan. She decided intuitively within the exhibition setting. Perhaps she will make different decisions in a different space next time. So even though the only things moving in the gallery were the viewers, the exhibition gave the sense of a one-time-only performance. Moreover, Woo’s intuitive choices seemed to be along the same lines as the choices made in improvised dance, where you decide the next shape of the body and the lengths and number of movements based on the surrounding space and the music you are dancing to.<br/><br/>
In reality, much of our day-to-day life consists of these sorts of spontaneous decisions. Even those people who adhere rigidly to rules and plans rely generally on improvised choices to fill the gaps among those predetermined masses. The most representative example lies in our everyday language. Speaking is not like recitation or singing; it is a matter of drawing things forth from inside of you and combining them from moment to moment. Hannah Woo’s decisions can be likened to speaking in the sense that the objects and inventory exist already inside of her. She works hard on a regular basis to ensure that when she needs to show elegant intuition, there are no moments where she suddenly forgets what she has to say, or the right word fails to occur to her. She assembles and categorizes materials of different textures and colors in exemplary fashion, going through a repeated, diligent routine to ensure that she can take them out and use them at any time: wringing and drying, cutting, stitching, winding, and grouping similar items in orderly ways. As a result, her studio resembles the workshop of some fashion brand, or a boutique with quality taste. It resembles the mind of someone who has a rich, diverse vocabulary assembled from reading books on a regular basis; the body of a dancer who has undergone systematic training to be able to move however they desire; or the palette of an artist, where every color in the world has been assembled and squeezed out.<br/><br/>
The intuitive landscape based on this firm, dense foundation is like a spontaneous letter fluently written by someone using beautiful and exact language without having to consult a dictionary: it gives the impression of twisting freely, while also<br/><br/>
<br/>
being totally controlled. The artist’s approach to decisions and speaking as she fills her space seems to be represented in the tight knots and dangling hair of View Point of Conductor (2019)—the large, significantly titled painting at the space’s starting point, which rests on three paint cans against the wall not included in the spray- painted boundary—and in the structures of the paintings that are completely filled in their corners, in contrast with the relatively empty center.<br/><br/>
      <hr/>
      즉흥으로 춘 춤의 기록을 보는 것 같다는 게 <물라쥬 멜랑콜리크>의 첫인상이다. 작가는 푸른 물감으로 전시공간을 빙 둘러 낮게 결계를 친 뒤, 그 안에서 무보 없는 춤을 길게 추었던 것 같다. 화려한 옷을 입은 움직임 없는 마네킹과 나동그라진 신체의 일부, 동력 없이 서 있거나 달려 있는 오브제들로 이루어진, 연극이 끝난 무대처럼 보이는 정적인 공간에서 다름 아닌 즉흥춤을 떠올린 이유는 그것이 형식에 매이거나 계획을 따르지 않고 만들어진 행위 같아서가 아니라 순간순간의 선택이 쌓여 이루어진 행동의 결과물로 보였기 때문이다.
      <br />
      <br />
      전시공간 구석구석을 빈틈 없이 메우고 있는 작가의 분방했을 흔적들을 마주하면, 거기서 움직임을 추측하기보다는 매 순간 내려졌을 선택들을 더듬게 된다. 이를테면 크고 작은 그림을 걸거나 기대 놓은 뒤, 주변의 벽에 색색의 붓질을 더해 화면을 연장하고, 고운 공단을 땋아 금줄을 치고, 천을 잘게 잘라 흩뿌리고, 가벽을 이런저런 모양으로 썰어내고, 잘려나간 단면에 청록색 망사를 잔디처럼 삐죽삐죽 심는 부분들에서 작가가 내린 선택의 순간을 따라가 보게 되는 것이다. 전시공간의 주인처럼 서 있는 <Moulage Mélancolique>(2019)나 곳곳에 놓인 <Bag with You>(2019)를 보아도, 넥타이의 어디까지를 꿰매고 어디까지를 자를지, 폭신한 털 옆에 까슬까슬한 천을 어떤 색 실로 봉합할지, 천의 가장자리는 감치기로 마무리할지 그대로 둘지, 머리칼처럼 탐스러운 공단 줄은 세 줄로 땋을지 네 줄로 땋을지, 가방끈과 몸통의 비율은 어떻게 할지, 옷걸이 끝에 달린 붓에 무슨 색 물감을 묻힐지 등, 어림으로 헤아려 보아도 작가는 공간 안에서 수만 번의 선택을 내렸을 듯하다.
      <br />
      <br />
      이러한 선택과 결정은 색채학이나 황금비에 기대거나 사전에 계획한 대로 행한 것이 아니라 작가가 전시공간에서 직관적으로 내린 것이다. 다음 번 다른 공간에서는 아마도 다른 결정을 내릴 것이다. 따라서 전시장에서 움직이는 것이라곤 관객밖에 없었지만 이 전시는 재상연되지 않는 일종의 퍼포먼스와도 같았다. 또한 이런 직관적인 선택은 주변의 공간이나 발맞추는 음악에 따라 다음 번 나아갈 방향과 그때에 취할 몸의 모양, 움직임의 길이와 횟수를 결정하는 즉흥춤에서의 선택의 문제와 같은 선상에 있는 것으로 보였다.
      <br />
      <br />
      사실 우리 일상의 대부분은 그런 즉흥적인 결정으로 이루어져 있다. 제아무리 계획과 규칙을 빡빡하게 따르는 사람이라고 해도 그 정해진 덩어리들의 틈을 유연하게 메우는 것은 대개 즉흥적인 선택들이다. 가장 대표적인 것은 일상적인 ‘말’이다. 무언가를 암송하거나 노래를 부르는 경우가 아닌 다음에는 자기 안에 있는 것을 꺼내 그때 그때 조합하는 것이 바로 말하기일 테니 말이다. 선택의 대상과 목록이 자기에게 이미 있는 것이라는 점에서 우한나의 선택은 ‘말하기’와 비견할 수도 있다. 작가는 직관을 유려하게 발휘해야 하는 상황에서 갑자기 할 말이 생각나지 않는 다던가, 정확한 단어가 떠오르지 않아 곤란해지는 일에 처하지 않기 위해 평소 부단히 노력한다. 각종 질감과 색의 재료를 모범적으로 수집 분류하고, 그것을 언제든 끄집어 내서 사용할 수 있도록 잘 짜서 말리고, 자르고, 꿰매고, 말고, 비슷한 것들끼리 정돈하기를 성실하게 반복한다. 그리하여 어느 패션브랜드의 자재실이나 취향이 좋은 양품점처럼 보이는 작가의 작업실은 마치 평소에 부지런히 책을 읽어 다양하고 풍부한 어휘가 정돈되어 있는 누군가의 머릿속이나, 원하는 대로 움직일 수 있는 몸을 만들기 위해 꾸준히 단련해 온 무용수의 몸, 혹은 세상 모든 색을 다 모아다가 충분히 짜서 말려놓은 화가의 팔레트를 연상시킨다.
      <br />
      <br />
      이렇게 단단하고 촘촘한 바탕 위에 만들어진 직관의 풍경은, 사전을 뒤적이지 않고도 아름답고 정확한 단어들로만 유창하게 써 내려간 즉석 편지처럼 자유롭게 이지러져 있으면서도 철저히 통제된 듯한 인상을 준다. 공간의 시작점, 스프레이페인트로 친 결계가 없는 벽에 3 개의 페인트 통을 고이고 기대 놓은 의미심장한 제목의 대형 페인팅 <지휘자 시점>(2019)의 단단하게 묶인 매듭과 아무렇게나 늘어뜨린 끄트머리, 비교적 비어있는 가운데에 비해 구석구석 빈틈 없이 채워진 화면의 구조는 공간을 채우고 있는 작가의 선택과 말하기의 방식을 대변하는 듯하다.
      <br />
      <br />
      <img
        class="inner_img"
        src="images/solid-and-fine-improvisation-img1.jpg"
        alt="Stroke Performance, 과정샷_ 사진 우한나 제공"
      />
      <cite>Stroke Performance, 과정샷_ 사진 우한나 제공</cite>
      <br />
      <br />
      <img
        class="inner_img"
        src="images/solid-and-fine-improvisation-img2.jpg"
        alt="Stroke Performance, 과정샷_ 사진 우한나 제공"
      />
      <cite>Stroke Performance, 과정샷_ 사진 우한나 제공</cite>
      <br />
      <br />
      <img
        class="inner_img"
        src="images/solid-and-fine-improvisation-img3.jpg"
        alt="Stroke Performance, 과정샷_ 사진 우한나 제공"
      />
      <cite>Stroke Performance, 과정샷_ 사진 우한나 제공</cite>
      <br />
      <br />
      <img
        class="inner_img"
        src="images/solid-and-fine-improvisation-img4.jpg"
        alt="Stroke Performance, 2019_ 사진 이의록"
      />
      <cite>Stroke Performance, 2019_ 사진 이의록</cite>
      <br />
      <br />
      <img
        class="inner_img"
        src="images/solid-and-fine-improvisation-img5.jpg"
        alt="Stroke Performance, 2019 커튼을 젖히다_ 사진 우한나 제공"
      />
      <cite>Stroke Performance, 2019 커튼을 젖히다_ 사진 우한나 제공</cite>
      <br />
      <br />
      <img
        class="inner_img"
        src="images/solid-and-fine-improvisation-img6.jpg"
        alt="Stroke Performance, 2019 커튼을 젖히다_ 사진 우한나 제공"
      />
      <cite>Stroke Performance, 2019 커튼을 젖히다_ 사진 우한나 제공</cite>
      <br />
      <br />
      <img
        class="inner_img"
        src="images/solid-and-fine-improvisation-img7.jpg"
        alt="Stroke Performance, 2019_ 사진 이의록"
      />
      <cite>Stroke Performance, 2019_ 사진 이의록</cite>
      <br />
      <br />`
    ]
  },
  {
    id: "how-would-a-child-will-see-this-space",
    category: "김혜원 영상작가",
    title: "이 곳은 아이에게 어떻게 보일까?",
    pointOfInterest: 340,
    backgroundColor: "#282F49",
    article: [
      `<iframe
        title="Moulage Melancolique"
        width="560"
        height="367"
        src="https://www.youtube.com/embed/i8-wHk2crsA"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      >
        
      </iframe>`
    ]
  }
];
