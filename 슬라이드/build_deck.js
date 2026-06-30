/* 16주차 BM 세션 강의 덱 — design.md 디자인 시스템 기반 (pptxgenjs) */
const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";        // 13.333 x 7.5 (16:9 와이드스크린)
pres.author = "SKU LIKELION UX/UI";
pres.title = "비즈니스 모델 & 수익 모델 — 16주차 BM";

const W = 13.333, H = 7.5, MX = 0.7;       // 좌우 안전 여백
const KF = "Pretendard";                    // 브랜드 폰트(설치 확인됨)
const C = {
  ink:"141821", navy:"1B2A4A", blue:"0066CC", eblue:"0072F8", ice:"8EC3FF",
  iceBg:"EAF2FF", deepNavy:"233B66", gray:"4F4F4F", muted:"8A93A2",
  surface:"F4F6FA", line:"E4E8F0", white:"FFFFFF", charcoal:"15171C",
  orange:"E8541B", orangeBg:"FFF0E8", red:"C8101C", green:"0E7C66",
  greenBg:"E7F6F1", yellowBg:"FFF6DC"
};
const TOTAL = 22;
const sh = () => ({ type:"outer", color:"8794A8", blur:10, offset:3, angle:90, opacity:0.20 });

function bg(slide, color){ slide.background = { color }; }

function header(slide, right="16주차 · BM 세션"){
  slide.addText([{text:"SKU ",options:{color:C.ink}},{text:"LIKELION",options:{color:C.blue}}],
    { x:MX, y:0.32, w:6, h:0.36, fontSize:13, bold:true, fontFace:KF, margin:0, valign:"middle" });
  slide.addText(right,
    { x:W-MX-5, y:0.32, w:5, h:0.36, fontSize:12, color:C.muted, fontFace:KF, align:"right", margin:0, valign:"middle" });
}

function pageNum(slide, n){
  slide.addText(`${String(n).padStart(2,"0")} / ${TOTAL}`,
    { x:W-MX-1.6, y:H-0.5, w:1.6, h:0.3, fontSize:10, color:C.muted, fontFace:KF, align:"right", margin:0 });
}

function eyebrow(slide, text, x=MX, y=1.12, color=C.blue){
  slide.addText(text, { x, y, w:11.9, h:0.3, fontSize:13.5, bold:true, color, fontFace:KF, charSpacing:1, margin:0 });
}
function title(slide, text, opts={}){
  slide.addText(text, { x:MX, y:opts.y??1.42, w:opts.w??11.93, h:opts.h??0.9,
    fontSize:opts.fs??29, bold:true, color:opts.color??C.ink, fontFace:KF, margin:0,
    lineSpacing:opts.ls??34, align:"left", valign:"top" });
}
function card(slide, x, y, w, h, fill=C.white, withShadow=true){
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius:0.09,
    fill:{ color:fill }, line:{ color:C.line, width:1 }, ...(withShadow?{shadow:sh()}:{}) });
}
function chip(slide, x, y, text, fg, bgc, w){
  const ww = w ?? Math.max(0.7, 0.16 + text.length*0.115);
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w:ww, h:0.34, rectRadius:0.17, fill:{color:bgc}, line:{type:"none"} });
  slide.addText(text, { x, y, w:ww, h:0.34, fontSize:11.5, bold:true, color:fg, fontFace:KF, align:"center", valign:"middle", margin:0 });
  return ww;
}
function numCircle(slide, x, y, d, num, fill=C.blue, tc=C.white){
  slide.addShape(pres.shapes.OVAL, { x, y, w:d, h:d, fill:{color:fill}, line:{type:"none"} });
  slide.addText(String(num), { x, y, w:d, h:d, fontSize:Math.round(d*30), bold:true, color:tc, fontFace:KF, align:"center", valign:"middle", margin:0 });
}

/* ============================ S1 — COVER (dark) ============================ */
(() => {
  const s = pres.addSlide(); bg(s, C.charcoal);
  // floating UI tiles motif (오른쪽)
  const tiles = [
    {x:9.4,y:1.5,w:2.5,h:1.7,c:C.deepNavy,o:0},
    {x:10.2,y:2.7,w:2.4,h:1.6,c:C.blue,o:0},
    {x:9.0,y:3.9,w:2.2,h:1.5,c:"2C4A7A",o:0},
  ];
  tiles.forEach(t => s.addShape(pres.shapes.ROUNDED_RECTANGLE,{x:t.x,y:t.y,w:t.w,h:t.h,rectRadius:0.12,fill:{color:t.c},line:{type:"none"},shadow:{type:"outer",color:"000000",blur:14,offset:5,angle:90,opacity:0.35}}));
  // 작은 UI 요소
  s.addShape(pres.shapes.ROUNDED_RECTANGLE,{x:10.45,y:2.95,w:1.5,h:0.22,rectRadius:0.11,fill:{color:C.ice},line:{type:"none"}});
  s.addShape(pres.shapes.ROUNDED_RECTANGLE,{x:10.45,y:3.35,w:1.0,h:0.22,rectRadius:0.11,fill:{color:"AFCBF2"},line:{type:"none"}});
  s.addShape(pres.shapes.OVAL,{x:11.45,y:3.75,w:0.34,h:0.34,fill:{color:C.eblue},line:{type:"none"}});

  s.addText([{text:"SKU ",options:{color:C.white}},{text:"LIKELION",options:{color:C.ice}}],
    {x:MX,y:0.7,w:7,h:0.4,fontSize:17,bold:true,fontFace:KF,margin:0});
  s.addText("UX/UI TRACK", {x:MX,y:1.18,w:7,h:0.4,fontSize:15,bold:true,color:C.ice,fontFace:KF,charSpacing:3,margin:0});
  s.addText("WEEK 16.", {x:MX,y:2.35,w:7,h:0.6,fontSize:20,bold:true,color:C.white,fontFace:KF,margin:0});
  s.addText("비즈니스 모델 &\n수익 모델", {x:MX,y:2.95,w:8.2,h:1.9,fontSize:46,bold:true,color:C.white,fontFace:KF,lineSpacing:52,margin:0});
  s.addText([{text:"“우리가 만든 서비스, ",options:{color:"C9D4E6"}},{text:"이거 어떻게 돈 벌어요?",options:{color:C.ice,bold:true}},{text:"”",options:{color:"C9D4E6"}}],
    {x:MX,y:5.15,w:8,h:0.5,fontSize:17,fontFace:KF,margin:0});
  s.addText("기획 파트 · 16주차 BM 세션 · 기획 입문자 대상 · 60~80분 · 3명씩 2팀", {x:MX,y:6.55,w:10.5,h:0.4,fontSize:13,color:C.muted,fontFace:KF,margin:0});
  s.addText("Official LIKELION at SKU · UX/UI Team", {x:W-MX-5,y:0.72,w:5,h:0.4,fontSize:12,color:"9AA6BC",fontFace:KF,align:"right",margin:0});
  s.addNotes("오프닝. 오늘은 '돈 버는 구조'를 기획자의 언어로 다룬다. 아이디어톤에서 만들어봤고 곧 해커톤에서 또 만든다 → 그 서비스가 어떻게 지속되는지 답할 수 있게 만드는 세션.");
})();

/* ============================ S2 — 오늘의 목표 ============================ */
(() => {
  const s = pres.addSlide(); bg(s, C.white); header(s); pageNum(s,2);
  eyebrow(s, "오늘의 목표");
  title(s, "「이거 어떻게 돈 벌어요?」 에\n기획자로서 답하기", {h:1.3, ls:38});
  const triad = [
    {t:"가치", d:"왜 쓰이는가", c:C.surface, fg:C.ink, tag:null},
    {t:"수익", d:"왜 돈을 낼 만한가", c:C.iceBg, fg:C.blue, tag:"오늘의 초점"},
    {t:"비용", d:"어떻게 유지되는가", c:C.surface, fg:C.ink, tag:null},
  ];
  const cw=3.65, gap=0.45, y=3.95, x0=MX+0.15;
  triad.forEach((b,i)=>{
    const x=x0+i*(cw+gap);
    card(s,x,y,cw,2.05,b.c);
    s.addText(b.t,{x:x+0.35,y:y+0.35,w:cw-0.7,h:0.7,fontSize:30,bold:true,color:b.fg,fontFace:KF,margin:0});
    s.addText(b.d,{x:x+0.35,y:y+1.15,w:cw-0.7,h:0.5,fontSize:15,color:C.gray,fontFace:KF,margin:0});
    if(b.tag) chip(s,x+cw-1.65,y+0.4,b.tag,C.orange,C.orangeBg,1.3);
  });
  s.addText("좋은 기획은 화면을 잘 그리는 데서 끝나지 않습니다. 왜 쓰이고·왜 돈을 낼 만하고·어떻게 유지되는지까지 — 오늘은 그중 ‘돈’을 책임집니다.",
    {x:MX,y:3.13,w:11.9,h:0.72,fontSize:15,color:C.gray,fontFace:KF,margin:0,lineSpacing:21});
  s.addNotes("한 줄 목표를 못 박기. 가치·수익·비용 중 오늘은 '수익'. 이 세 가지를 다 설명할 수 있어야 기획이 절반이 아니라 완성된다.");
})();

/* ============================ S3 — §0 왜 BM? ============================ */
(() => {
  const s = pres.addSlide(); bg(s, C.white); header(s); pageNum(s,3);
  eyebrow(s, "WHY · 왜 기획자가 돈 구조를 알아야 할까");
  title(s, "발표 때 꼭 나오는 그 질문");
  card(s, MX, 2.7, 11.93, 1.7, C.iceBg);
  s.addText("“그래서 이거… 어떻게 돈 벌어요?”",
    {x:MX+0.5,y:2.7,w:10.9,h:1.7,fontSize:32,bold:true,color:C.navy,fontFace:KF,valign:"middle",margin:0});
  s.addText([
    {text:"여기서 ", options:{color:C.gray}},
    {text:"“광고 붙이면 되죠”", options:{color:C.orange,bold:true}},
    {text:"라고 답하는 순간 — 기획이 절반만 끝난 게 들통납니다.", options:{color:C.gray}},
  ], {x:MX,y:4.75,w:11.9,h:0.5,fontSize:17,fontFace:KF,margin:0});
  chip(s, MX, 5.6, "1주차 역기획 연결", C.blue, C.iceBg, 2.1);
  s.addText("1주차 역기획 5질문의 마지막 단계에서 찾아본 ‘수익 장치는 어디?’ — 오늘은 그게 무슨 종류이고, 왜 골랐고, 우리 서비스엔 뭐가 맞는지까지 갑니다.",
    {x:MX+2.3,y:5.58,w:9.6,h:0.7,fontSize:14,color:C.gray,fontFace:KF,margin:0,valign:"top"});
  s.addNotes("동기 부여 슬라이드. 학생들이 이미 겪은 상황(발표 Q&A)으로 시작. 1주차 역기획 5질문의 마지막(수익 포인트 발견)을 오늘 본격적으로 파는 거라고 연결.");
})();

/* ============================ S4 — §0 결론 먼저 ============================ */
(() => {
  const s = pres.addSlide(); bg(s, C.white); header(s); pageNum(s,4);
  eyebrow(s, "결론 먼저");
  title(s, "좋은 기획은 여기까지 설명한다");
  const items = [
    {n:"가치", q:"왜 쓰이고", c:C.surface, fg:C.ink},
    {n:"수익", q:"왜 돈을 낼 만하고", c:C.iceBg, fg:C.blue},
    {n:"비용", q:"어떻게 유지되는가", c:C.surface, fg:C.ink},
  ];
  const cw=3.45, y=3.0, gap=0.62, x0=MX+0.1;
  items.forEach((b,i)=>{
    const x=x0+i*(cw+gap);
    card(s,x,y,cw,1.9,b.c);
    s.addText(b.n,{x:x,y:y+0.42,w:cw,h:0.6,fontSize:26,bold:true,color:b.fg,fontFace:KF,align:"center",margin:0});
    s.addText(b.q,{x:x+0.2,y:y+1.12,w:cw-0.4,h:0.5,fontSize:15,color:C.gray,fontFace:KF,align:"center",margin:0});
    if(i<2) s.addText("→",{x:x+cw,y:y,w:gap,h:1.9,fontSize:26,bold:true,color:C.ice,align:"center",valign:"middle",margin:0});
  });
  card(s, MX, 5.35, 11.93, 1.15, C.white);
  s.addText([
    {text:"오늘은 그중 ", options:{color:C.ink,bold:true}},
    {text:"‘돈(수익)’", options:{color:C.orange,bold:true}},
    {text:" 부분을 책임집니다. — 화면을 잘 그리는 것만으로 서비스는 완성되지 않습니다.", options:{color:C.gray}},
  ], {x:MX+0.5,y:5.35,w:10.9,h:1.15,fontSize:17,fontFace:KF,valign:"middle",margin:0});
  s.addNotes("세션 전체의 결론을 먼저 보여주는 슬라이드. 가치→수익→비용 흐름을 한 번 읽어주고, 오늘은 수익에 집중한다고 안내.");
})();

/* ============================ S5 — §1 BM vs 수익모델 ============================ */
(() => {
  const s = pres.addSlide(); bg(s, C.white); header(s); pageNum(s,5);
  eyebrow(s, "개념 구분 · 둘은 포함 관계");
  title(s, "비즈니스 모델 vs 수익 모델");
  card(s, MX, 2.65, 11.93, 1.15, C.greenBg);
  chip(s, MX+0.4, 2.85, "기억 공식", C.green, C.white, 1.3);
  s.addText([
    {text:"비즈니스 모델 ",options:{bold:true,color:C.ink}},
    {text:"= 고객 + 문제 + 가치 + 전달 + 비용 + 수익      ",options:{color:C.gray}},
    {text:"수익 모델 ",options:{bold:true,color:C.ink}},
    {text:"= 그중 ‘돈 들어오는 방식’ 한 조각",options:{color:C.gray}},
  ], {x:MX+1.9,y:2.85,w:9.8,h:0.75,fontSize:15.5,fontFace:KF,valign:"middle",margin:0,lineSpacing:22});
  s.addText("2주차 Why·Who·What·How가 BM의 뼈대 — 거기에 ‘어떻게 지속되는가(돈·비용)’를 더한 게 BM, 수익 모델은 그 마지막 칸 하나.",
    {x:MX,y:3.92,w:11.93,h:0.3,fontSize:12.5,color:C.muted,fontFace:KF,align:"center",margin:0});
  const cols=[
    {t:"비즈니스 모델", q:"이 사업은 어떻게 작동하고 지속되는가?", m:"가게 전체 운영 설계도", c:C.iceBg, fg:C.blue},
    {t:"수익 모델", q:"돈은 누구에게서 어떤 방식으로 들어오는가?", m:"계산대에서 돈 받는 방식", c:C.surface, fg:C.ink},
  ];
  const cw=5.8, y=4.35, gap=0.33;
  cols.forEach((b,i)=>{
    const x=MX+i*(cw+gap);
    card(s,x,y,cw,2.3,b.c);
    s.addText(b.t,{x:x+0.4,y:y+0.32,w:cw-0.8,h:0.55,fontSize:22,bold:true,color:b.fg,fontFace:KF,margin:0});
    s.addText(b.q,{x:x+0.4,y:y+1.0,w:cw-0.8,h:0.6,fontSize:14.5,color:C.gray,fontFace:KF,margin:0});
    s.addText([{text:"비유  ",options:{color:C.muted,bold:true}},{text:b.m,options:{color:C.ink,bold:true}}],
      {x:x+0.4,y:y+1.65,w:cw-0.8,h:0.5,fontSize:14.5,fontFace:KF,margin:0});
  });
  s.addNotes("2주차 Why-Who-What-How가 비즈니스 모델의 뼈대. 거기에 '어떻게 지속되는가(돈·비용)'를 더한 게 BM, 그 마지막 칸 하나가 수익 모델. 비유로 각인.");
})();

/* ============================ S6 — §1 예시 + 토론 ============================ */
(() => {
  const s = pres.addSlide(); bg(s, C.white); header(s); pageNum(s,6);
  eyebrow(s, "예시로 보기");
  title(s, "AI 마케팅 서비스라면?");
  const rows=[
    {k:"비즈니스 모델", v:"외식업 사장님의 리뷰·고객 데이터를 분석해 홍보 콘텐츠 생성을 돕는 AI 마케팅 비서", fg:C.blue},
    {k:"수익 모델", v:"월 구독료  +  영상 생성 건당 과금  +  프리미엄 리포트 판매", fg:C.ink},
  ];
  let y=2.75;
  rows.forEach(r=>{
    card(s,MX,y,11.93,1.15,C.white);
    s.addText(r.k,{x:MX+0.4,y:y,w:2.6,h:1.15,fontSize:17,bold:true,color:r.fg,fontFace:KF,valign:"middle",margin:0});
    s.addText(r.v,{x:MX+3.1,y:y,w:8.6,h:1.15,fontSize:15,color:C.gray,fontFace:KF,valign:"middle",margin:0});
    y+=1.33;
  });
  card(s, MX, 5.5, 11.93, 1.2, C.orangeBg);
  chip(s, MX+0.4, 5.7, "조별 토론 · 2분", C.orange, C.white, 1.9);
  s.addText([
    {text:"“우리 비즈니스 모델은 구독입니다.”", options:{bold:true,color:C.ink}},
    {text:"  — 이 문장, 어디가 어색할까요?  ", options:{color:C.gray}},
    {text:"(구독은 ‘돈 받는 방식’일 뿐, 누구의 무슨 문제를 푸는지가 빠졌죠.)", options:{color:C.muted,italic:true}},
  ], {x:MX+2.5,y:5.68,w:9.2,h:0.85,fontSize:14.5,fontFace:KF,valign:"middle",margin:0,lineSpacing:20});
  s.addNotes("수익 모델은 보통 2~3개 조합. '구독입니다'가 왜 어색한지 토론으로 끌어내기 — 지불 주체/문제가 빠졌다는 걸 다음 슬라이드들로 연결.");
})();

/* ===================== S7 — §2 15개 수익 모델 (1/2) ===================== */
(() => {
  const s = pres.addSlide(); bg(s, C.white); header(s); pageNum(s,7);
  eyebrow(s, "15개 수익 모델 · 외울 필요 없는 ‘메뉴판’ (1/2)");
  title(s, "돈 버는 방식은 거의 정해져 있다");
  s.addText("새로 발명하는 게 아니라, 이미 있는 구조 중 우리에 맞는 걸 고르고 섞습니다 (보통 2~3개).",
    {x:MX,y:2.32,w:11.93,h:0.3,fontSize:13.5,color:C.gray,fontFace:KF,margin:0});
  const head=["No.","수익 모델","한 줄 뜻","잘 맞는 서비스","봐야 할 숫자"];
  const data=[
    ["1","구독형","월·연 단위 반복 결제","SaaS, OTT, 뉴스레터","반복 매출, 이탈률"],
    ["2","프리미엄(Freemium)","기본 무료, 고급 유료","생산성·협업·디자인 툴","무료→유료 전환율"],
    ["3","기부·후원형","팬·사용자의 자발적 후원","창작자, 커뮤니티, 오픈소스","후원액, 후원 지속률"],
    ["4","광고형","사용자 무료, 광고주가 지불","미디어, 검색, SNS","트래픽(DAU/MAU), CTR"],
    ["5","거래 수수료형","거래 성사 시 일정 비율 수취","마켓플레이스, 배달앱","거래액(GMV), 수수료율"],
    ["6","제휴(어필리에이트)형","고객을 보내주고 소개료","리뷰·추천 콘텐츠, 블로그","전환율, 전환당 수익"],
    ["7","직접판매형","제품·콘텐츠를 직접 판매","전자책, 강의, 굿즈","객단가, 재구매율"],
    ["8","인앱 구매형","앱 안 아이템·기능 개별 구매","게임, AI 앱, 콘텐츠 앱","결제자 비율, 결제자당 매출"],
  ];
  const headRow = head.map(t=>({text:t,options:{bold:true,color:C.white,fill:{color:C.navy},fontFace:KF,fontSize:13,align:"left",valign:"middle"}}));
  const rows = data.map((r,ri)=> r.map((t,ci)=>({text:t,options:{
    color: ci<=1?C.navy:C.gray, bold: ci<=1, fontFace:KF, fontSize:12.5,
    fill:{color: ri%2? "FFFFFF":"F7F9FC"}, align:"left", valign:"middle"
  }})));
  s.addTable([headRow,...rows], { x:MX, y:2.72, w:11.93, colW:[0.7,2.5,3.5,2.9,2.33],
    rowH:0.45, border:{type:"solid",color:C.line,pt:0.5}, margin:[2,5,2,5], autoPage:false });
  s.addNotes("표는 유인물로 넘기고 화면에선 4~5개만 짚기(구독·광고·거래수수료·인앱). 각 모델은 '잘 맞는 서비스 1개 + 봐야 할 숫자 1개'만.");
})();

/* ===================== S8 — §2 15개 수익 모델 (2/2) ===================== */
(() => {
  const s = pres.addSlide(); bg(s, C.white); header(s); pageNum(s,8);
  eyebrow(s, "15개 수익 모델 · ‘메뉴판’ (2/2)");
  title(s, "고르고 섞는다 — 대부분 2~3개 조합");
  const head=["No.","수익 모델","한 줄 뜻","잘 맞는 서비스","봐야 할 숫자"];
  const data=[
    ["9","라이선스형","기술·콘텐츠·IP 사용권 판매","폰트, 캐릭터, 엔진, 특허","계약 수, 갱신률"],
    ["10","화이트라벨·OEM","내 제품을 남의 브랜드로 공급","B2B 솔루션, API 제품","파트너 수, 유지율"],
    ["11","종량제","쓴 만큼 지불","클라우드, API, AI 토큰","사용량, 단위 원가"],
    ["12","면도기-면도날형","본체는 싸게, 소모품에서 수익","프린터·잉크, 캡슐커피","소모품 재구매율"],
    ["13","성과보수형","결과가 나왔을 때만 청구","채용, 광고 대행, 리드 생성","성과 발생률, 건당 수익"],
    ["14","데이터 판매형","쌓인 데이터를 리포트·API로","상권 분석, 시장 리포트","데이터 품질, 구매 반복률"],
    ["15","렌탈·대여형","소유가 아니라 기간 사용권","차량, 장비, 공간, 의류","가동률, 회수 기간"],
  ];
  const headRow = head.map(t=>({text:t,options:{bold:true,color:C.white,fill:{color:C.navy},fontFace:KF,fontSize:13,align:"left",valign:"middle"}}));
  const rows = data.map((r,ri)=> r.map((t,ci)=>({text:t,options:{
    color: ci<=1?C.navy:C.gray, bold: ci<=1, fontFace:KF, fontSize:12.5,
    fill:{color: ri%2? "FFFFFF":"F7F9FC"}, align:"left", valign:"middle"
  }})));
  s.addTable([headRow,...rows], { x:MX, y:2.6, w:11.93, colW:[0.7,2.5,3.5,2.9,2.33],
    rowH:0.44, border:{type:"solid",color:C.line,pt:0.5}, margin:[2,5,2,5], autoPage:false });
  card(s, MX, 6.22, 11.93, 0.72, C.orangeBg);
  s.addText([
    {text:"핵심  ", options:{bold:true,color:C.orange}},
    {text:"수익 모델은 발명이 아니라 ", options:{color:C.ink}},
    {text:"선택과 조합", options:{bold:true,color:C.ink}},
    {text:". 고객 행동·사용 빈도·원가에 맞는 걸 고르는 일 ", options:{color:C.gray}},
    {text:"(→ 다음, 고르는 5질문).", options:{bold:true,color:C.orange}},
  ], {x:MX+0.5,y:6.22,w:10.9,h:0.72,fontSize:15,fontFace:KF,valign:"middle",margin:0});
  s.addNotes("핵심 한 문장으로 마무리: 발명이 아니라 선택과 조합. 다음은 익숙한 앱으로 직접 분류해보는 워밍업.");
})();

/* ============================ S9 — §3 워밍업 역기획 ============================ */
(() => {
  const s = pres.addSlide(); bg(s, C.white); header(s); pageNum(s,9);
  eyebrow(s, "워밍업 · 전체 함께 약 5분");
  title(s, "익숙한 앱의 ‘수익 포인트’ 읽기");
  s.addText("1주차 역기획 5질문의 마지막(⑤ 수익 포인트)을 한 발 더 밀고 갑니다. 모두가 아는 앱 1개(배달의민족·토스·유튜브·당근)로 4가지를 같이 답해봅시다.",
    {x:MX,y:2.45,w:11.9,h:0.62,fontSize:14.5,color:C.gray,fontFace:KF,margin:0,lineSpacing:20});
  const qs=[
    {t:"수익 포인트", d:"돈이 발생하는 지점은 어디인가?"},
    {t:"모델 분류", d:"15개 중 무엇인가? (하나가 아닐 수 있음)"},
    {t:"근거", d:"이 서비스엔 왜 그 모델이 맞을까?"},
    {t:"지불 주체", d:"돈 내는 사람 = 앱 쓰는 사람인가?"},
  ];
  const cw=2.83, gap=0.2, y=3.25, x0=MX;
  qs.forEach((q,i)=>{
    const x=x0+i*(cw+gap);
    card(s,x,y,cw,2.5, i===3?C.iceBg:C.surface);
    numCircle(s,x+0.32,y+0.35,0.66,i+1, i===3?C.orange:C.blue);
    s.addText(q.t,{x:x+0.3,y:y+1.18,w:cw-0.6,h:0.5,fontSize:16.5,bold:true,color:i===3?C.orange:C.ink,fontFace:KF,margin:0});
    s.addText(q.d,{x:x+0.3,y:y+1.72,w:cw-0.6,h:0.7,fontSize:13,color:C.gray,fontFace:KF,margin:0});
  });
  s.addText("‘지불 주체가 다르다’는 감각 — 오늘의 핵심 중 하나입니다.",
    {x:MX,y:6.05,w:11.9,h:0.4,fontSize:14,italic:true,color:C.orange,fontFace:KF,margin:0});
  s.addNotes("전체 토론으로 진행. 손들어 앱 하나 정하고 4질문 같이 답. 마지막 '지불 주체' 질문에서 다음 슬라이드(배민 예시)로 자연스럽게 연결.");
})();

/* ============================ S10 — §3 배민 예시 ============================ */
(() => {
  const s = pres.addSlide(); bg(s, C.white); header(s); pageNum(s,10);
  eyebrow(s, "워밍업 예시");
  title(s, "예: 배달의민족");
  const steps=[
    {h:"수익 포인트", b:"주문 · 광고"},
    {h:"모델 분류", b:"거래 수수료형 + 광고형"},
    {h:"지불 주체", b:"가게 사장님\n(쓰는 사람은 손님!)"},
  ];
  const cw=3.5, y=2.95, gap=0.62, x0=MX+0.1;
  steps.forEach((st,i)=>{
    const x=x0+i*(cw+gap);
    card(s,x,y,cw,2.0, i===2?C.orangeBg:C.surface);
    s.addText(st.h,{x:x+0.3,y:y+0.3,w:cw-0.6,h:0.4,fontSize:14,bold:true,color:i===2?C.orange:C.blue,fontFace:KF,margin:0});
    s.addText(st.b,{x:x+0.3,y:y+0.85,w:cw-0.6,h:1.0,fontSize:17,bold:true,color:C.ink,fontFace:KF,margin:0,lineSpacing:22});
    if(i<2) s.addText("→",{x:x+cw,y:y,w:gap,h:2.0,fontSize:24,bold:true,color:C.ice,align:"center",valign:"middle",margin:0});
  });
  card(s, MX, 5.45, 11.93, 1.15, C.iceBg);
  s.addText([
    {text:"돈 내는 사람 ≠ 쓰는 사람.  ", options:{bold:true,color:C.navy}},
    {text:"광고형·B2B는 이렇게 지불 주체가 갈립니다. 이걸 놓치면 수익 모델이 통째로 어긋나요.", options:{color:C.gray}},
  ], {x:MX+0.5,y:5.45,w:10.9,h:1.15,fontSize:16,fontFace:KF,valign:"middle",margin:0});
  s.addNotes("배민은 거래 수수료형 + 광고형. 핵심은 돈 내는 사람이 사장님이라는 것(쓰는 사람은 손님). 지불 주체 감각을 각인.");
})();

/* ============================ S11 — §4 고르는 5질문 ============================ */
(() => {
  const s = pres.addSlide(); bg(s, C.white); header(s); pageNum(s,11);
  eyebrow(s, "선택 기준 · ‘억지 수익 모델’ 거르기");
  title(s, "수익 모델 고르는 5가지 질문");
  s.addText("‘돈 될 것 같은 방식’이 아니라 ‘고객 행동·비용 구조에 맞는 방식’을 고릅니다.",
    {x:MX,y:2.32,w:11.93,h:0.3,fontSize:14,color:C.gray,fontFace:KF,margin:0});
  const qs=[
    {k:"사용 빈도", q:"매일·매주 반복해서 쓰나?", m:"구독형 · 프리미엄 · 인앱"},
    {k:"지불 주체", q:"사용자가 내나, 제3자가 내나?", m:"직접판매 / 광고·제휴", hot:true},
    {k:"가치 발생 시점", q:"쓰는 순간? 결과가 나와야?", m:"종량제 / 성과보수형"},
    {k:"원가 구조", q:"쓸수록 서버·AI 비용도 느나?", m:"종량제 · 하이브리드 구독"},
    {k:"반복성", q:"한 번 팔고 끝? 계속 받나?", m:"구독 · 렌탈 · 면도날형"},
  ];
  let y=2.65; const rh=0.72;
  qs.forEach((q,i)=>{
    card(s,MX,y,11.93,rh, q.hot?C.iceBg:C.white);
    numCircle(s,MX+0.25,y+(rh-0.5)/2,0.5,i+1, q.hot?C.orange:C.blue);
    s.addText(q.k,{x:MX+0.95,y:y,w:2.7,h:rh,fontSize:16,bold:true,color:q.hot?C.orange:C.ink,fontFace:KF,valign:"middle",margin:0});
    s.addText(q.q,{x:MX+3.7,y:y,w:4.7,h:rh,fontSize:14.5,color:C.gray,fontFace:KF,valign:"middle",margin:0});
    s.addText(q.m,{x:MX+8.5,y:y,w:3.3,h:rh,fontSize:13.5,bold:true,color:C.blue,fontFace:KF,valign:"middle",align:"right",margin:0});
    y+=rh+0.1;
  });
  s.addNotes("5질문을 빠르게. 가장 강조할 건 '지불 주체'(파란 줄). 다음 슬라이드에서 한 문장으로 못 박는다.");
})();

/* ============================ S12 — §4 핵심 질문 ============================ */
(() => {
  const s = pres.addSlide(); bg(s, C.white); header(s); pageNum(s,12);
  eyebrow(s, "꼭 기억할 질문 하나");
  card(s, MX, 2.5, 11.93, 2.2, C.navy);
  s.addText("“돈 내는 사람 = 쓰는 사람인가?”",
    {x:MX+0.5,y:2.5,w:10.93,h:2.2,fontSize:36,bold:true,color:C.white,fontFace:KF,align:"center",valign:"middle",margin:0});
  s.addText([
    {text:"2주차에 만든 ", options:{color:C.gray}},
    {text:"페르소나", options:{bold:true,color:C.blue}},
    {text:"가 정말 ‘돈을 내는 사람’인지 확인하세요. ", options:{color:C.gray}},
    {text:"광고형·B2B는 쓰는 사람과 내는 사람이 다릅니다. ", options:{bold:true,color:C.ink}},
    {text:"놓치면 수익 모델이 통째로 어긋나요.", options:{bold:true,color:C.orange}},
  ], {x:MX,y:5.05,w:11.93,h:1.0,fontSize:17,fontFace:KF,align:"center",margin:0,lineSpacing:26});
  s.addNotes("이 한 문장만 가져가도 성공. 페르소나(2주차)와 직접 연결. 실습 들어가기 직전의 체크포인트.");
})();

/* ============================ S13 — §5 실습 안내 ============================ */
(() => {
  const s = pres.addSlide(); bg(s, C.white); header(s); pageNum(s,13);
  eyebrow(s, "본실습 · 프로젝트 선정 3분 + 작성 22분");
  title(s, "팀 린캔버스 만들기");
  card(s, MX, 2.65, 5.8, 2.0, C.surface);
  s.addText("린캔버스란?",{x:MX+0.4,y:2.9,w:5,h:0.45,fontSize:18,bold:true,color:C.blue,fontFace:KF,margin:0});
  s.addText("비즈니스 모델 전체를 한 장(9칸)에 정리하는 도구. 9칸을 더 자세히 쓰는 게 BMC, 초기 검증용으로 줄인 게 린캔버스예요.",
    {x:MX+0.4,y:3.35,w:5.0,h:1.25,fontSize:14,color:C.gray,fontFace:KF,margin:0,lineSpacing:19});
  card(s, MX+6.13, 2.65, 5.8, 2.0, C.iceBg);
  s.addText("좋은 소식",{x:MX+6.53,y:2.9,w:5,h:0.45,fontSize:18,bold:true,color:C.navy,fontFace:KF,margin:0});
  s.addText("아이디어톤에서 이미 절반은 만들었어요. 왼쪽은 옮겨 적고, 오른쪽(돈)에 시간을 쓰면 됩니다.",
    {x:MX+6.53,y:3.4,w:5.0,h:1.1,fontSize:14.5,color:C.gray,fontFace:KF,margin:0,lineSpacing:20});
  card(s, MX, 5.0, 11.93, 1.55, C.orangeBg);
  chip(s, MX+0.4, 5.25, "프로젝트 선정 기준", C.orange, C.white, 2.2);
  s.addText([
    {text:"‘제일 잘 만든 프로젝트’가 아니라 ", options:{color:C.gray}},
    {text:"‘수익 얘기할 거리가 가장 많은 프로젝트’", options:{bold:true,color:C.ink}},
    {text:"를 고르세요.\n안 뽑힌 2명도 ‘내 프로젝트라면?’으로 계속 의견 내며 참여합니다.", options:{color:C.gray}},
  ], {x:MX+0.4,y:5.7,w:11.1,h:0.8,fontSize:14.5,fontFace:KF,margin:0,lineSpacing:20});
  s.addNotes("팀당 아이디어톤 프로젝트 1개 선정(3분). 기준을 명확히: 수익 얘기할 거리 많은 것. 왼쪽 4칸은 옮겨 적기로 시간 절약.");
})();

/* ============================ S14 — §5 린캔버스 9칸 ============================ */
(() => {
  const s = pres.addSlide(); bg(s, C.white); header(s); pageNum(s,14);
  eyebrow(s, "린캔버스 9칸 · ①→⑨ 순서대로 · 오른쪽 ‘돈’에 시간 쓰기");
  title(s, "한 장으로 완성하는 비즈니스 모델", {fs:26});
  const cells=[
    {n:1,t:"문제",s:"옮겨 적기"},{n:2,t:"고객군",s:"옮겨 적기"},{n:3,t:"고유 가치 제안",s:"다듬기"},
    {n:4,t:"솔루션(MVP)",s:"옮겨 적기"},{n:5,t:"채널",s:"짧게"},{n:6,t:"수익원",s:"오늘의 핵심",hot:true},
    {n:7,t:"비용 구조",s:"오늘의 핵심",hot:true},{n:8,t:"핵심 지표",s:"강의 후 채움",wait:true},{n:9,t:"경쟁 우위",s:"짧게"},
  ];
  const gx=MX, gy=2.55, gw=11.93, gh=4.0, gap=0.16;
  const cw=(gw-2*gap)/3, ch=(gh-2*gap)/3;
  cells.forEach((c,i)=>{
    const col=i%3, row=Math.floor(i/3);
    const x=gx+col*(cw+gap), y=gy+row*(ch+gap);
    const fill = c.hot? C.iceBg : (c.wait? "F0F2F6" : C.white);
    card(s,x,y,cw,ch,fill);
    numCircle(s,x+0.22,y+0.2,0.44,c.n, c.hot?C.orange:(c.wait?C.muted:C.blue));
    s.addText(c.t,{x:x+0.78,y:y+0.2,w:cw-1.0,h:0.45,fontSize:15.5,bold:true,color:c.hot?C.orange:C.ink,fontFace:KF,valign:"middle",margin:0});
    const tag = c.hot? chip(s,x+0.24,y+ch-0.5,c.s,C.orange,C.white,1.3)
              : c.wait? chip(s,x+0.24,y+ch-0.5,c.s,C.muted,"E7EAF0",1.5)
              : s.addText(c.s,{x:x+0.24,y:y+ch-0.5,w:cw-0.5,h:0.32,fontSize:12,color:C.muted,fontFace:KF,margin:0});
  });
  s.addText("①→⑨ 순서로 채웁니다. 수익원·비용 구조에 시간을 몰아 쓰고, 핵심 지표 칸은 비워둡니다 (다음 강의 후 채움).",
    {x:MX,y:6.68,w:11.2,h:0.3,fontSize:12.5,color:C.gray,fontFace:KF,align:"left",margin:0});
  s.addNotes("워크시트 핵심 화면. 왼쪽(1~4)은 옮겨 적기. 6·7(수익원·비용)에 시간 집중. 8(핵심 지표)은 지금 비우고 다음 파트에서 채운다. 타임키핑: 11/6/2분 알림.");
})();

/* ============================ S15 — §5 토론 질문 ============================ */
(() => {
  const s = pres.addSlide(); bg(s, C.white); header(s); pageNum(s,15);
  eyebrow(s, "수익원 칸 채울 때 · 팀 토론");
  title(s, "‘이 수익이 성립하려면?’ 까지 묻기");
  const qs=[
    "우리 수익 모델은 15개 중 무엇인가? (5질문으로 근거 대기)",
    "돈 내는 사람 = 쓰는 사람인가?",
    "이 수익이 성립하려면 무엇이 참이어야 하나?",
  ];
  let y=2.7;
  qs.forEach((q,i)=>{
    card(s,MX,y,11.93,0.92, i===2?C.iceBg:C.white);
    numCircle(s,MX+0.25,y+0.21,0.5,i+1, i===2?C.orange:C.blue);
    s.addText(q,{x:MX+0.95,y:y,w:10.7,h:0.92,fontSize:16,bold:i===2,color:i===2?C.navy:C.gray,fontFace:KF,valign:"middle",margin:0});
    y+=1.04;
  });
  card(s, MX, 5.95, 11.93, 1.05, C.orangeBg);
  s.addText([
    {text:"가장 위험한 가정  ", options:{bold:true,color:C.orange}},
    {text:"예: “사장님이 월 3만원을 낼 만큼 효과를 느낀다.” 이게 틀리면 모델이 무너져요 — 해커톤에서 검증합니다.", options:{color:C.gray}},
  ], {x:MX+0.5,y:5.95,w:10.9,h:1.05,fontSize:14.5,fontFace:KF,valign:"middle",margin:0,lineSpacing:19});
  s.addNotes("강사 순회하며 던질 질문 3개. 특히 세 번째 '성립하려면 무엇이 참?' = 가장 위험한 가정(RAT). 해커톤 검증으로 연결.");
})();

/* ============================ S16 — §6 핵심 지표 ============================ */
(() => {
  const s = pres.addSlide(); bg(s, C.white); header(s); pageNum(s,16);
  eyebrow(s, "검증 지표 · 순서 주의: 실습 다음에");
  title(s, "수익이 진짜 남는지 보는 숫자");
  const head=["지표","쉬운 뜻","한 줄 질문"];
  const data=[
    ["CAC","고객 1명 데려오는 데 든 돈","한 명 모으는 데 얼마?"],
    ["LTV","고객 1명이 떠날 때까지 남기는 가치","한 명이 평생 얼마 남겨?"],
    ["LTV / CAC","둘의 비율","데려올 만한 장사인가?"],
    ["이탈률(Churn)","고객·매출이 빠져나가는 비율","얼마나 빨리 떠나?"],
    ["GMV","플랫폼에서 일어난 총 거래액","거래 규모가 커지나?"],
  ];
  const headRow=head.map(t=>({text:t,options:{bold:true,color:C.white,fill:{color:C.navy},fontFace:KF,fontSize:14,valign:"middle"}}));
  const rows=data.map((r,ri)=>r.map((t,ci)=>({text:t,options:{
    color:ci===0?C.navy:C.gray, bold:ci===0, fontFace:KF, fontSize:14,
    fill:{color:ri%2?"FFFFFF":"F7F9FC"}, valign:"middle"
  }})));
  s.addTable([headRow,...rows],{x:MX,y:2.65,w:11.93,colW:[2.6,5.4,3.93],rowH:0.6,
    border:{type:"solid",color:C.line,pt:0.5},margin:[3,8,3,8],autoPage:false});
  s.addText("입문 단계에선 정확한 계산보다 ‘무슨 숫자를 봐야 하는지’만 알면 충분합니다.",
    {x:MX,y:6.45,w:11.9,h:0.4,fontSize:14,italic:true,color:C.gray,fontFace:KF,margin:0});
  s.addNotes("순서 강조: 수익 모델을 먼저 골라본 뒤에 지표를 배워야 와닿는다. 5개는 '쉬운 뜻+한 줄 질문'만. 계산보다 '무엇을 볼지'.");
})();

/* ============================ S17 — §6 지표 1개 고르기 ============================ */
(() => {
  const s = pres.addSlide(); bg(s, C.white); header(s); pageNum(s,17);
  eyebrow(s, "실습 연결 · 딱 1개만");
  title(s, "수익원에 맞는 지표 1개만 고르기");
  const pairs=[
    {a:"구독형",b:"이탈률"},{a:"광고형",b:"트래픽 (DAU)"},
    {a:"수수료형",b:"GMV"},{a:"프리미엄",b:"유료 전환율"},
  ];
  const cw=5.8, ch=1.15, gx=MX, gy=2.7, gap=0.33;
  pairs.forEach((p,i)=>{
    const col=i%2, row=Math.floor(i/2);
    const x=gx+col*(cw+gap), y=gy+row*(ch+0.3);
    card(s,x,y,cw,ch,C.surface);
    s.addText(p.a,{x:x+0.4,y:y,w:2.3,h:ch,fontSize:18,bold:true,color:C.ink,fontFace:KF,valign:"middle",margin:0});
    s.addText("→",{x:x+2.6,y:y,w:0.7,h:ch,fontSize:20,bold:true,color:C.ice,align:"center",valign:"middle",margin:0});
    s.addText(p.b,{x:x+3.2,y:y,w:cw-3.5,h:ch,fontSize:18,bold:true,color:C.blue,fontFace:KF,valign:"middle",align:"right",margin:0});
  });
  card(s, MX, 5.35, 11.93, 1.0, C.yellowBg);
  s.addText([
    {text:"주의  ", options:{bold:true,color:C.orange}},
    {text:"“LTV/CAC 3:1이면 좋다”는 산업·단계마다 다른 ", options:{color:C.gray}},
    {text:"경험칙일 뿐 절대 법칙이 아닙니다.", options:{bold:true,color:C.ink}},
    {text:"  · LTV는 매출이 아니라 마진 기준.", options:{color:C.gray}},
  ], {x:MX+0.5,y:5.35,w:10.9,h:1.0,fontSize:14.5,fontFace:KF,valign:"middle",margin:0,lineSpacing:19});
  s.addText("심화(이름만): CAC = 마케팅비 ÷ 새 유료고객 수 · LTV ≈ 고객당 매출 × 마진율 ÷ 이탈률(마진 기준) · 기여이익 · CAC 회수기간 · NRR",
    {x:MX,y:6.5,w:11.4,h:0.3,fontSize:10.5,color:C.muted,fontFace:KF,align:"left",margin:0});
  s.addNotes("6개 다 보지 말고 수익원에 맞는 1개만 골라 8칸에 적게. LTV/CAC 3:1은 경험칙. LTV는 마진 기준(매출 기준이면 20~40% 과대평가). 심화 지표는 이름만.");
})();

/* ============================ S18 — §7 가격 전략 ============================ */
(() => {
  const s = pres.addSlide(); bg(s, C.white); header(s); pageNum(s,18);
  eyebrow(s, "가격 전략 · 맛보기");
  s.addText("수익 모델을 잘 골라도 가격을 틀리면 사업성이 무너집니다.",
    {x:MX,y:1.62,w:11.93,h:0.5,fontSize:18,bold:true,color:C.ink,fontFace:KF,margin:0});
  card(s, MX, 2.45, 11.93, 1.85, C.navy);
  s.addText("“가격은 감이 아니라 전략이다.”",
    {x:MX+0.5,y:2.45,w:10.93,h:1.85,fontSize:32,bold:true,color:C.white,fontFace:KF,align:"center",valign:"middle",margin:0});
  card(s, MX, 4.6, 5.8, 2.0, C.iceBg);
  s.addText("가치 기반 가격",{x:MX+0.4,y:4.85,w:5,h:0.45,fontSize:18,bold:true,color:C.blue,fontFace:KF,margin:0});
  s.addText("원가가 아니라 ‘고객이 느끼는 가치’ 기준으로 가격을 매김. 고유 가치 제안과 직결!",
    {x:MX+0.4,y:5.35,w:5.0,h:1.1,fontSize:14.5,color:C.gray,fontFace:KF,margin:0,lineSpacing:20});
  card(s, MX+6.13, 4.6, 5.8, 2.0, C.surface);
  s.addText("이름만 알아두기",{x:MX+6.53,y:4.85,w:5,h:0.45,fontSize:18,bold:true,color:C.ink,fontFace:KF,margin:0});
  s.addText("가격을 정교하게 조사하는 설문 기법 — Van Westendorp, Gabor-Granger. 필요할 때 찾아보면 됩니다.",
    {x:MX+6.53,y:5.35,w:5.0,h:1.1,fontSize:14.5,color:C.gray,fontFace:KF,margin:0,lineSpacing:20});
  s.addNotes("이 챕터는 '이런 게 있다' 정도만. 가치 기반 가격(가치 제안과 직결)만 제대로 짚고, VW/GG는 이름만. 남길 한 문장: 가격은 감이 아니라 전략.");
})();

/* ============================ S19 — §8 흔한 오해 ============================ */
(() => {
  const s = pres.addSlide(); bg(s, C.white); header(s); pageNum(s,19);
  eyebrow(s, "발표·기획서 점검 · 해커톤 발표 전");
  title(s, "흔한 오해와 수정 문장");
  const head=["잘못된 표현","왜 문제인가","더 정확한 표현"];
  const data=[
    ["“비즈니스 모델은 구독입니다.”","구독은 수익 모델 한 조각","“B2B SaaS이고, 수익 모델은 월 구독형입니다.”"],
    ["“광고 붙이면 수익화됩니다.”","트래픽·광고주 없으면 작음","“반복 트래픽이 일정 규모 이상이면 광고형 검토.”"],
    ["“AI니까 무조건 종량제죠.”","예측 가능성·마진 균형 필요","“AI 사용량에 원가가 연동되니 구독+종량제 결합 검토.”"],
    ["“MVP는 기능 최소 개발.”","랜딩·수기 운영도 MVP","“핵심 가치를 최소 방식으로 검증하는 실험.”"],
  ];
  const headRow=head.map((t,ci)=>({text:t,options:{bold:true,color:C.white,fill:{color:ci===0?C.red:(ci===2?C.blue:C.navy)},fontFace:KF,fontSize:13.5,valign:"middle"}}));
  const rows=data.map((r,ri)=>r.map((t,ci)=>({text:t,options:{
    color:ci===0?C.red:(ci===2?C.blue:C.gray), bold:ci!==1, fontFace:KF, fontSize:13,
    fill:{color:ri%2?"FFFFFF":"F7F9FC"}, valign:"middle"
  }})));
  s.addTable([headRow,...rows],{x:MX,y:2.6,w:11.93,colW:[3.7,3.1,5.13],rowH:0.78,
    border:{type:"solid",color:C.line,pt:0.5},margin:[3,8,3,8],autoPage:false});
  s.addNotes("해커톤 발표 전 점검용. 왼쪽(빨강)=흔한 실수, 오른쪽(파랑)=고친 문장. 과장 표현(무조건/완벽하게/기하급수적)도 쓰지 않게 안내.");
})();

/* ============================ S20 — §8 안전한 발표 문장 ============================ */
(() => {
  const s = pres.addSlide(); bg(s, C.white); header(s); pageNum(s,20);
  eyebrow(s, "발표에서 안전한 문장 · 1분 발표 템플릿");
  title(s, "이렇게 말하면 안전합니다");
  card(s, MX, 2.5, 11.93, 1.4, C.greenBg);
  s.addText("“현재 단계에서는 정교한 매출 추정보다 핵심 고객의 지불 의사와 반복 사용 가능성을 검증하는 것이 우선입니다. 이후 데이터가 쌓이면 가격과 지표를 조정하겠습니다.”",
    {x:MX+0.5,y:2.5,w:10.93,h:1.4,fontSize:15,italic:true,color:C.navy,fontFace:KF,valign:"middle",margin:0,lineSpacing:22});
  card(s, MX, 4.1, 11.93, 2.8, C.white);
  chip(s, MX+0.4, 4.35, "1분 발표 템플릿", C.blue, C.iceBg, 2.0);
  const gline = (yy, runs) => s.addText(runs, {x:MX+0.5,y:yy,w:11.0,h:0.5,fontSize:15.5,fontFace:KF,margin:0,valign:"middle"});
  gline(5.0, [
    {text:"우리 서비스는 ",options:{color:C.gray}},{text:"[고객]",options:{bold:true,color:C.blue}},
    {text:"의 ",options:{color:C.gray}},{text:"[문제]",options:{bold:true,color:C.blue}},
    {text:"를 ",options:{color:C.gray}},{text:"[핵심 가치]",options:{bold:true,color:C.blue}},
    {text:"로 해결합니다.",options:{color:C.gray}},
  ]);
  gline(5.65, [
    {text:"수익 모델은 ",options:{color:C.gray}},{text:"[15개 중 1~2개]",options:{bold:true,color:C.blue}},
    {text:"이고, 가장 위험한 가정은 ",options:{color:C.gray}},{text:"[가정]",options:{bold:true,color:C.blue}},
    {text:"입니다.",options:{color:C.gray}},
  ]);
  gline(6.3, [
    {text:"이건 해커톤에서 ",options:{color:C.gray}},{text:"[검증 방법]",options:{bold:true,color:C.blue}},
    {text:"으로 확인하겠습니다.",options:{color:C.gray}},
  ]);
  s.addNotes("발표용 안전 문장 + 빈칸 채우는 1분 발표 템플릿. 팀이 그대로 읽을 수 있게. 다음은 교차 발표.");
})();

/* ============================ S21 — 마무리 & 해커톤 연결 ============================ */
(() => {
  const s = pres.addSlide(); bg(s, C.white); header(s); pageNum(s,21);
  eyebrow(s, "마무리 · 교차 발표 + 다음 단계");
  title(s, "오늘 채운 칸이 해커톤으로 이어진다");
  const cards=[
    {t:"교차 발표 · 피드백", d:"두 팀이 캔버스를 맞바꿔 보고 한 가지씩 피드백.\n초점: ‘이 수익 모델, 그 고객에 맞아?’ · ‘돈 내는 사람이 누구야?’"},
    {t:"해커톤으로 연결", d:"오늘 채운 ⑥수익원·⑦비용 + 가장 위험한 가정 →\n해커톤에서 그대로 검증하게 됩니다."},
  ];
  const cw=5.8, y=2.95, gap=0.33;
  cards.forEach((b,i)=>{
    const x=MX+i*(cw+gap);
    card(s,x,y,cw,2.0, i===0?C.surface:C.iceBg);
    s.addText(b.t,{x:x+0.4,y:y+0.32,w:cw-0.8,h:0.5,fontSize:18,bold:true,color:i===0?C.ink:C.navy,fontFace:KF,margin:0});
    s.addText(b.d,{x:x+0.4,y:y+0.95,w:cw-0.8,h:0.95,fontSize:14.5,color:C.gray,fontFace:KF,margin:0,lineSpacing:20});
  });
  card(s, MX, 5.4, 11.93, 1.1, C.white);
  s.addText([
    {text:"과제(선택)  ", options:{bold:true,color:C.blue}},
    {text:"팀별 ‘가장 위험한 가정 1개 + 검증 방법’ 한 줄 제출.", options:{color:C.gray}},
  ], {x:MX+0.5,y:5.4,w:10.9,h:1.1,fontSize:15.5,fontFace:KF,valign:"middle",margin:0});
  s.addNotes("2팀이라 교차 피드백이 효율적. 오늘 산출물(6·7칸, 가장 위험한 가정)이 해커톤 검증 재료가 된다는 걸 못 박고 마무리.");
})();

/* ============================ S22 — CLOSING (dark) ============================ */
(() => {
  const s = pres.addSlide(); bg(s, C.charcoal);
  s.addText("왜 쓰이고 · 왜 돈을 낼 만하고 · 어떻게 유지되는가",
    {x:MX,y:2.5,w:11.93,h:0.6,fontSize:20,color:C.ice,fontFace:KF,align:"center",margin:0});
  s.addText("오늘은 그중 ‘돈’을 책임졌습니다.",
    {x:MX,y:3.2,w:11.93,h:1.0,fontSize:38,bold:true,color:C.white,fontFace:KF,align:"center",margin:0});
  s.addText("이제 너희 팀 서비스의 BM은? — 해커톤에서 검증해봅시다.",
    {x:MX,y:4.4,w:11.93,h:0.5,fontSize:16,color:"C9D4E6",fontFace:KF,align:"center",margin:0});
  s.addText([{text:"SKU ",options:{color:C.white}},{text:"LIKELION",options:{color:C.ice}},{text:"  ·  UX/UI TRACK · 16주차 BM",options:{color:C.muted}}],
    {x:MX,y:5.55,w:11.93,h:0.4,fontSize:14,bold:true,fontFace:KF,align:"center",margin:0});
  s.addNotes("클로징. 가치·수익·비용 한 번 더. 오늘은 '돈'. 너희 팀 BM은? 으로 해커톤 동기 부여하며 마무리.");
})();

pres.writeFile({ fileName: "BM_16주차_강의덱.pptx" }).then(f => console.log("WROTE:", f)).catch(e => { console.error(e); process.exit(1); });
