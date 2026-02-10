
import { Case, CaseType, SafetyGoal, YearStat, AirportStat } from './types';

export const SAFETY_GOALS: SafetyGoal[] = [
  { category: '항공안전장애', subCategory: '활주로 침범 (항공기 제외)', target: '0건' },
  { category: '항공안전장애', subCategory: '유도로 오진입', target: '0건' },
  { category: '지상 접촉', subCategory: '항공기-장비·차량 접촉 (항공기 이동)', target: '0건' },
  { category: '지상 접촉', subCategory: '항공기-장비·차량 접촉 (항공기 정지)', target: '0.027건' },
  { category: '지상안전사고', subCategory: '차량-차량·장비·시설간 접촉', target: '0.291건' },
  { category: '지상안전사고', subCategory: '조업자 상해 (장비·차량 접촉, 낙상)', target: '0.027건' },
];

export const YEARLY_STATS: YearStat[] = [
  { year: '2019', flights: 514837, accidents: 7, rate: 0.136 },
  { year: '2020', flights: 361998, accidents: 5, rate: 0.138 },
  { year: '2021', flights: 425803, accidents: 10, rate: 0.235 },
  { year: '2022', flights: 444399, accidents: 15, rate: 0.338 },
  { year: '2023', flights: 456128, accidents: 17, rate: 0.373 },
  { year: '2024', flights: 479453, accidents: 24, rate: 0.501 },
];

export const AIRPORT_STATS: AirportStat[] = [
  { name: '김포', count: 35, percentage: 45 },
  { name: '김해', count: 16, percentage: 21 },
  { name: '제주', count: 14, percentage: 18 },
  { name: '청주', count: 4, percentage: 4.5 },
  { name: '대구', count: 4, percentage: 4.5 },
  { name: '광주', count: 3, percentage: 4 },
];

export const CASES: Case[] = [
  {
    id: 1,
    type: CaseType.EXCELLENCE,
    title: "강풍 대비 비동력장비(달리) 결박장치 개선 및 사고 예방",
    company: "샤프에비에이션케이",
    airport: "인천공항",
    date: "2024.08.21",
    imageUrl: "image/best_01.png", 
    content: "2024년 8월 21일, 인천공항 제1여객터미널 동편 정치장에 보관 중이던 이글루 달리(Igloo Dolly)가 태풍급 강풍(순간 최고 풍속 18m/s 이상) 발생 시 고정 브레이크가 풀리며 이동을 시작하였습니다. 당시 현장 작업자가 주기장 순찰 중 장비가 항공기 방향으로 서서히 구르는 것을 조기에 발견하여 즉시 정지시켰으며, 이후 모든 비동력 장비에 대해 보조 결박장치를 추가 설치하는 등 선제적인 안전 조치를 단행하여 대형 접촉 사고를 사전에 방지할 수 있었습니다.",
    cause: ["기존 비동력장비(Dolly)의 풋 브레이크 노후화로 인한 고정력 약화", "강풍 주의보 발령 시 개별 장비의 결박 상태를 확인하는 세부 점검 프로세스 부재"],
    countermeasure: ["모든 비동력 장비에 보조 결박장치(Chock 등) 전면 도입 및 교체", "기상 특보 발령 시 2중 결박 상태를 전수 점검하는 지침 수립"],
    effect: "개선 조치 이후 기상 악화 시에도 장비 이탈 사례가 단 한 건도 발생하지 않음"
  },
  {
    id: 101,
    type: CaseType.GENERAL,
    title: "L/D Loader 작동 실수로 인한 화물 낙하 및 장비 접촉",
    company: "(주)샤프에비에이션케이",
    airport: "김포공항",
    date: "2022.04.02.(토)",
    imageUrl: "image/1-01.png", 
    content: "2022.04.02.(토) #8번 주기장 김OO L/D Loader작업 중 Loader작동 실수(부주의)로 Loader Elevator밖으로 화물을 낙하시킴",
    cause: ["Loader에서 CGO 낙하방지와 CGO의 정렬을 위해 CGO를 Loader 내측으로 정렬 후 end guide와 lateral(side) Guide를 올려야 했으나 Guide 미작동하고 CTNR를 회전시키다 CTNR가 지면으로 낙하 하였고 동시에 대기 중인 Tug-Car와 접촉하여 CTNR 상부를 파손함"],
    countermeasure: ["Safety Directive(안전지시)발행하여 사고사례 및 Loader 작동자 재교육 및 작동 시 주의사항 전파", "관리자의 지속적 현장확인/Loader 작동자 재교육 및 작동 시 주의사항 전파"]
  },
  {
    id: 102,
    type: CaseType.GENERAL,
    title: "토잉트렉터(Towbarless) 운행 중 타사 램프버스 접촉",
    company: "(주)샤프에비에이션케이",
    airport: "김포공항",
    date: "2023.09.19.(화)",
    images: [
      { url: "image/2-01.png" },
      { url: "image/2-02.png", label: "참고사진" }
    ],
    content: "2023.09.19.(화) #31번 주기장 김OO는 토잉트렉터(Towbarless) 운행 중 타사 램프버스와 접촉하는 사고를 발생 시킴",
    cause: ["토잉트렉터 운행 중, 뒤따라오면 타사 램프버스를 확인 및 선행양보 후 GSE도로에 진입하였으나 사주경계 및 지적확인 미흡으로 진행 중이던 램프버스 후미와 토잉트렉터(Towbarless)가 접촉하는 사고가 발생함"],
    countermeasure: ["해당 사례 전파를 통하여 장비 안전운전 절차 준수 강조 및 교육 진행", "장비운행 시 지적확인 및 일시정지 시행 철저"]
  },
  {
    id: 103,
    type: CaseType.GENERAL,
    title: "조업 장비 분리 이탈 과정 중 항공기 안테나 머리 접촉",
    company: "(주)샤프에비에이션케이",
    airport: "김해공항",
    date: "2024.10.21.(월)",
    images: [
      { url: "image/3-01.png", label: "참고사진" }
    ],
    content: "2024.10.21.(월) #43번 주기장에서 항공기 조업 중이던 이OO는 항공기 주변의 GSE(ACU)장비를 분리, 정리하고 이탈하는 과정에서 항공기 하부 돌출부위(안테나)에 머리를 접촉하여 5CM가량의 두피열상이 발생함",
    cause: ["항공기 조업 스케줄에 따른 작업자의 조급함과 부주의로 인한 사고", "항공기 주변 조업 시 사주경계 미흡으로 발생함"],
    countermeasure: ["해당 사례 전파를 통하여 주의사항 및 표준조업절차 전반에 대한 재교육 실시", "관리자의 지속적 현장 확인 및 동 사례 예방을 위한 정기교육 실시"]
  },
  {
    id: 104,
    type: CaseType.GENERAL,
    title: "터그카 운전 중 보행 직원 미인지로 인한 달리(Dolly) 끼임",
    company: "스위스포트코리아(주)",
    airport: "인천공항",
    date: "2022.02.07.",
    content: "2022년 2월 7일 터그카 운전자가 dolly 사이를 지나던 직원을 인지하지 못하고 운전하여 직원이 dolly 사이에 끼어 부상 발생",
    cause: ["이동지역에서 터그카 운전 시 출발전 육안 점검 및 출발 전 경적을 울린 후 운전을 해야하나, 당시 운전자는 출발 전 육안 점검을 실시하지 않아 달리 사이를 넘어다니는 직원을 발견하지 못한채 운전함"],
    countermeasure: ["모든 직원에게 즉시 사례공유 및 터그카 출발 전 walkaround 실시 및 주변 위험성 확인 교육", "전 직원 대상 Stop-Check-Go 캠페리 실시 및 사고 예방 교육", "장비 경적 기능 전수 조사 및 점검 실시"]
  },
  {
    id: 105,
    type: CaseType.GENERAL,
    title: "ULD 견인 이동 중 토우바 연결 해제로 항공기 엔진 충돌",
    company: "스위스포트코리아(주)",
    airport: "인천공항",
    date: "2022.04.14.",
    content: "2022년 4월 14일 ULD를 화물 항공기 게이트로 옮기기 위해 견인하던 중, 두 번째 Dolly의 towbar 연결이 해제되며 627번 주기장에 있던 항공기 엔진과 부딪혀 항공기 엔진 손상 발생",
    cause: ["2626번과 627번 사이의 블루라인에 정차되어 있던 dolly를 BTU에 연결 후 631번 주기장으로 이동 중 dolly와 dolly를 연결해주는 towbar의 lock이 풀림"],
    countermeasure: ["모든 Dolly 이동 전 BTU 또는 CUT 연결 후 walkaround check 실시", "walkaround check 시 적재함 lock 및 dolly hook 확인", "이동 전 경적을 울려 위험성 알린 후 출발"]
  },
  {
    id: 106,
    type: CaseType.GENERAL,
    title: "강풍에 의한 비동력 장비(Dolly) 이동 및 항공기 타이어 접촉",
    company: "스위스포트코리아(주)",
    airport: "인천공항",
    date: "2022.10.03.",
    content: "2022년 10월 3일 635번과 636번 주기장 사이에 장치되어 있던 dolly가 강풍에 움직여 635번 주기장에 주기되어 있던 항공기 타이어와 dolly가 부딪히는 사고 발생",
    cause: ["25kt 이상의 강풍 경보(인천공항, 항공기상청)", "빗물로 인해 미끄러운 주기장 바닥", "강풍 시 빈 ULD 관리 미흡"],
    countermeasure: ["Dolly 주차 시 항공기 동체와 평행하게 주차하도록 함", "Towbar를 들어 주차 브레이크 설치 후 끈으로 고정", "빈 ULD는 제거하여 Rack stand에 고정 보관"]
  },
  {
    id: 107,
    type: CaseType.GENERAL,
    title: "장비 정치 중 탑승교 하단부 및 장비 상부 부품 충돌",
    company: "스위스포트코리아(주)",
    airport: "인천공항",
    date: "2023.08.15.",
    content: "2023년 8월 15일 36번 주기장에 장비를 정치시키기 위해 이동 중, 탑승교 하단부와 장비 상부 부품과 충돌하여 탑승교 하단부 파손 사고 발생",
    cause: ["장비 운용자의 경험 부족으로 장비와 탑승교 시설에 대한 높이 및 환경 인지 부족", "조업하지 않는 주기장에 장비 진입을 위해 주기장을 횡단하는 지침 위반", "폭염으로 인해 온열질환 증상 발생"],
    countermeasure: ["높이 3.8m 초과하는 GSE 작업 금지 조치 (T1 구역)", "공항시설물 교육 보완(주기장별 특이사항, 안전높이 등)", "관리감독자의 직원 건강 모니터링 강화 및 온열질환 교육"]
  },
  {
    id: 108,
    type: CaseType.GENERAL,
    title: "컨베이어 벨트 로더(CBL) 작업 중 공간 사이 추락 사고",
    company: "스위스포트코리아(주)",
    airport: "인천공항",
    date: "2023.12.21.",
    content: "2023년 12월 21일 CBL(Conveyor Belt Loader)에서 항공기에 화물 탑재 중, 카고 도어 입구 부분에서 업무를 담당하던 직원이 작업 자세를 변경하던 중 오른발이 미끄러지며 중심을 잃고 카고 도어와 CBL 사이 공간으로 추락함",
    cause: ["CBL 벨트로더의 사이즈에 비해 카고 도어의 폭이 넓어 가이드 레일이 포괄하지 못하는 접현 부분 양옆 공간 존재"],
    countermeasure: ["CBL 접현 위치 변경 및 가드레일 없는 쪽에 항공기 네트 설치", "벌크 작업자 안전모 착용 지침 강조", "가드레일 확장 및 네트 체결 지도 점검 실시"],
    footerImages: [{ url: "image/8-01.png", label: "참고사진" }]
  },
  {
    id: 109,
    type: CaseType.GENERAL,
    title: "Tug Car 이용 고소장비 견인 중 탑승교 하부 접촉",
    company: "아시아나에어포트",
    airport: "김해공항",
    date: "2024.12.25.(수)",
    content: "Tug Car 이용, Manual Step을 #32/#34 정치장에서 AAP 정비실 세차장으로 이동 中 Tug Car 작동자가 Manual Step 연결 사실을 망각하고 탑승교 하부로 진입하여 탑승교 하부와 접촉",
    cause: ["개인 부주의 (고소장비 견인 사실 망각)"],
    countermeasure: ["절차준수 재강조 교육 및 고소장비 CONVOY 운영", "교신절차 강화 및 현장 확인 철저"],
    footerImages: [{ url: "image/9-01.png", label: "참고사진" }]
  },
  {
    id: 110,
    type: CaseType.GENERAL,
    title: "로더 작동석 플랫폼 하강 및 테이프 제거 중 작업자 낙상",
    company: "아시아나에어포트",
    airport: "인천공항",
    date: "2024.04.01.(월)",
    content: "인천공항 T1 #8번 주기장에서 ULD 탑재 작업 완료 후 Loader 작동석 플랫폼 하강 중, 항공기 Door Side 테이프를 제거하기 위해 작동석을 이탈했다가 다시 돌아가는 과정에서 플랫폼 우측 끝단에서 발을 헛딛고 낙상",
    cause: ["개인 부주의"],
    countermeasure: ["Loader 작업 절차 개선 (항공기 접현 후 작업 시 장비작동석 전진/Cab Extension 작동 실시)"],
    footerImages: [{ url: "image/10-01.png", label: "참고사진" }]
  },
  {
    id: 111,
    type: CaseType.GENERAL,
    title: "토잉 완료 후 이동 중 토우바 헤드(Head) 밟음 및 기체 접촉",
    company: "아시아나에어포트",
    airport: "김해공항",
    date: "2024.01.16.(화)",
    content: "#5번 주기장에서 항공기 Towing 완료 후, 작동자가 Tow Tractor를 우측 날개 방향으로 이동하다 좌회전 하는 과정에서 Tow bar Head를 밟아 반대쪽이 상승하며 항공기 NLG Door 접촉",
    cause: ["장비 작동자 임의판단"],
    countermeasure: ["전 직원 특별안전교육 실시 및 안전지시 배포", "안전품질팀 주관 지점 집중 안전점검 실시"],
    footerImages: [{ url: "image/11-01.png", label: "참고사진" }]
  },
  {
    id: 112,
    type: CaseType.GENERAL,
    title: "교차로 일시정지 미준수로 인한 터그카 간 후방 추돌",
    company: "(주)에이티에스",
    airport: "제주공항",
    date: "2022.07.26.",
    content: "제주공항 #9 주기장 부근에서 타 조업사 Tug Car가 교차로 일시정지를 하였으나, 뒤따라오던 자사 Tug Car 작동자가 미처 정지하지 못하고 후방에서 추돌",
    cause: ["안전거리 미확보 및 전방 주시 미흡"],
    countermeasure: ["교차로 진입 전 일시정지 시행 및 사주경계/지적확인 교육", "이동지역 안전 교육 재시행 및 특별 점검"],
    footerImages: [{ url: "image/12-01.png", label: "참고사진" }]
  },
  {
    id: 113,
    type: CaseType.GENERAL,
    title: "교차로 좌회전 중 정지거리 부족으로 윙가드 단순 접촉",
    company: "(주)에이티에스",
    airport: "제주공항",
    date: "2023.08.29.",
    content: "#85 주기장에서 승객 탑승 후 도착장 이동을 위해 GSE 도로 주행 중, 교차로 좌회전 도중 대기 중인 Wing Guard를 발견했으나 정지거리 부족으로 접촉 발생",
    cause: ["주행 중 사주경계 미흡 및 버스 회전각 대비 좁은 교차로 주행선 침범"],
    countermeasure: ["교차로 진입 전 일시정지 강화 및 작동자 업무 배제/재교육", "Wing Guard 조업 대기 위치 조정 및 이동지역 협의회 안건 상정"],
    footerImages: [{ url: "image/13-01.png", label: "참고사진" }]
  },
  {
    id: 114,
    type: CaseType.GENERAL,
    title: "스텝카(STEP CAR) 이동 중 높이 제한 초과로 탑승교 하부 접촉",
    company: "(주)제이에이에스",
    airport: "김포국제공항",
    date: "2023.01.25.",
    content: "#36에서 #34로 STEP CAR를 이동시키는 과정에서 #35의 탑승교 하부(제한높이 3.6m)를 STEP CAR(높이 5.2m)가 통과하려다 상부 DECK이 접촉",
    cause: ["고소장비 진입 금지 구역 운행 및 높이 제한 미숙지", "운전자의 인적오류"],
    countermeasure: ["고소장비 운용절차 재교육 및 경고장치(발광/야광) 강화", "운전자 시야 범위 내 '탑승교 진입금지' 부착 및 이동 통제 강화"],
    footerImages: [{ url: "image/14-01.png", label: "참고사진" }]
  },
  {
    id: 115,
    type: CaseType.GENERAL,
    title: "횡단GSE도로 진입 차량 양보 미준수로 인한 전방차량 추돌",
    company: "(주)제이에이에스",
    airport: "인천공항",
    date: "2023.05.18.",
    content: "R6-R4 인근 횡단GSE도로에서 4대의 차량이 이동 중, #39 측에서 진입하는 차량에 양보하기 위해 앞차가 정지했으나 이를 인지하지 못하고 추돌",
    cause: ["안전거리 미확보 및 이동지역 규정(진입차량 우선권) 미준수"],
    countermeasure: ["횡단GSE도로 진입/진출 시 일시정지 및 안전거리 유지 전파", "일시정지, 규정속도 준수 등 기본 규정 재교육"],
    footerImages: [{ url: "image/15-01.png", label: "참고사진" }]
  },
  {
    id: 116,
    type: CaseType.GENERAL,
    title: "주기장 전면 GSE도로 진출 중 램프버스 간 접촉",
    company: "한국공항(주)",
    airport: "김해공항",
    date: "2023.11.23.",
    content: "부산공항 #42 Remote 주기장에서 Step Car 에스코트 후 주기장 전면 GSE도로 진출 중 타사 Ramp Bus와 접촉",
    cause: ["주기장 진출 전 일단정지 및 지적확인 미실시", "유도사의 GSE도로 양방향 통제 미흡"],
    countermeasure: ["전사 지적확인 습관화 캠페인 추진", "사례 전파 및 기본수칙 준수 재강조 교육"],
    footerImages: [{ url: "image/16-01.png", label: "참고사진" }]
  },
  {
    id: 117,
    type: CaseType.GENERAL,
    title: "ULD 로더 계단 이용 중 난간 파지 미흡으로 지면 낙상",
    company: "한국공항(주)",
    airport: "김포공항",
    date: "2024.06.04.",
    content: "국제선 #39 Spot에서 조업 중 ULD 로더 작동자가 지원을 요청하여 재해자가 로더 계단을 오르던 중 상부 난간 파지를 제대로 하지 않아 균형을 잃고 낙상",
    cause: ["도착 항공편 지연에 따른 서두름 및 불안전한 자세"],
    countermeasure: ["ULD Loader 사다리 난간대 Non Slip 조치", "사다리 승기 시 양손 파지 위치 정립 및 서두르는 조업 금지"],
    footerImages: [{ url: "image/17-01.png", label: "참고사진" }]
  },
  {
    id: 118,
    type: CaseType.GENERAL,
    title: "장비 이동 중 탑승교 높이 제한 충돌방지가드 인지 미흡 접촉",
    company: "한국공항(주)",
    airport: "대구공항",
    date: "2024.01.24.",
    content: "#8 주기장에서 M/Step을 연결하여 장비정치장으로 이동 중, 도로 상단에 설치된 탑승교 높이 충돌방지가드를 인지하지 못하고 접촉",
    cause: ["장비 운행 중 서두름 및 장비 높이제한 사항 미준수"],
    countermeasure: ["탑승교 충돌방지가드 위치 이전(#8 -> #7)", "높이제한 장비 운행규정 준수 철저 및 안전의식 강화 교육"],
    footerImages: [{ url: "image/18-01.png", label: "참고사진" }]
  },
  {
    id: 119,
    type: CaseType.GENERAL,
    title: "급유출하대 이동 중 장비조작 실패로 보안 벽면 충돌",
    company: "한국공항(주)",
    airport: "대구공항",
    date: "2024.06.06.",
    content: "Refueler 급유출하대로 이동하던 중 출하대 전방 약 40m 지점에서 좌측 방향으로 근접 운행 중 보안 벽면과 충돌",
    cause: ["운전자 장비조작 실패 및 집중력 저하", "GSE도로 및 급유출하대 지역 공간 협소"],
    countermeasure: ["운전자 Safety Mind Set 교육 실시", "시설 보완 (전용차선 Marking 및 회전구간 도로 폭 확장)"],
    footerImages: [{ url: "image/19-01.png", label: "참고사진" }]
  },
  {
    id: 120,
    type: CaseType.GENERAL,
    title: "조업 종료 후 이동 중 맞은편 주행 차량 인지 미흡 충돌",
    company: "한국공항(주)",
    airport: "제주공항",
    date: "2024.06.17.",
    content: "#31 Spot 조업 종료 후 카트 반납을 위해 이동 중, 맞은편에서 주행 중이던 스타리아 차량을 인지하지 못하고 램프트렉터 앞 범퍼와 충돌",
    cause: ["장비 주행 중 전방 주시 태만 및 사주경계 미실시"],
    countermeasure: ["사주경계 강화를 위한 전 직원 교육", "서두르는 조업 금지 및 지적확인 습관화"],
    footerImages: [{ url: "image/20-01.png", label: "참고사진" }]
  },
  {
    id: 121,
    type: CaseType.GENERAL,
    title: "항공기 Towing 중 탑승교 정위치 미실시로 인한 기체 손상",
    company: "한국공항(주)",
    airport: "김포공항",
    date: "2023.07.05.(수)",
    content: "국제선 #37번 주기장에서 Towing 중 정위치에 있지 않던 탑승교와 접촉하여 항공기 L1 Door 하부 손상",
    cause: ["탑승교 청소 후 정위치 미실시 및 Towing 절차 미준수", "구성원 간 커뮤니케이션 실패"],
    countermeasure: ["안전의식 향상 교육 및 TBM 철저", "무전기 통화 가능 위치 지참 및 조업 Desk 관리 강화"],
    footerImages: [{ url: "image/21-01.png", label: "참고사진" }]
  },
  {
    id: 122,
    type: CaseType.GENERAL,
    title: "Tug Car 후진 진입 중 주행 중이던 타사 차량 측면 충돌",
    company: "한국공항(주)",
    airport: "김포공항",
    date: "2023.06.27.",
    content: "국내선 #10번 주기장 정치장에서 Tug Car를 후진으로 진입시키던 중 우측에서 진행 중이던 타사 차량 조수석 측면과 충돌",
    cause: ["Tug Car 후진 시 운전자의 측면/후방 확인 미흡"],
    countermeasure: ["차량/장비 운행 시 안전교육 실시 (사주경계 및 교차로 일단정지)"],
    footerImages: [{ url: "image/22-01.png", label: "참고사진" }]
  },
  {
    id: 123,
    type: CaseType.GENERAL,
    title: "급유차 후진 중 항공기 날개 Fairing 접촉 및 손상",
    company: "한국공항(주)",
    airport: "김포공항",
    date: "2022.01.11.(화)",
    content: "국제선 #33 Spot에서 급유를 위해 장비 후진 중, 급유장비 후방 난간과 항공기 왼쪽 날개 Flap Support Fairing이 접촉",
    cause: ["장비 후진 시 유도자 미배치"],
    countermeasure: ["급유 직원 직무 교육 및 유도자 부재 시 접현 금지", "33번 주기장 특성 및 Hydrant Servicer 지원 금지"],
    footerImages: [{ url: "image/23-01.png", label: "참고사진" }]
  },
  {
    id: 124,
    type: CaseType.GENERAL,
    title: "수리 완료 장비 견인 중 유도로 횡단 구간에서 타사 차량 충돌",
    company: "한국공항(주)",
    airport: "김포공항",
    date: "2022.11.17.",
    content: "정비공장에서 수리 완료된 Tug Car를 트레일러로 견인 중, 입항 대기 중인 항공기를 보고 급히 후진하는 과정에서 후방의 타사 차량 충돌",
    cause: ["유도로 횡단 전 일단정지 미실시 및 후진 시 후방 확인 미흡"],
    countermeasure: ["장비 운행규정 준수 교육 및 공항시설 표지(일단정지선) 개선 요청"],
    footerImages: [{ url: "image/24-01.png", label: "참고사진" }]
  }
];
