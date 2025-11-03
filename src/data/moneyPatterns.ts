// Be:On 머니 패턴 진단 - 7개 패턴, 35문항
export interface MoneyPatternQuestion {
  id: string;
  text: string;
  pattern: PatternType;
}

export type PatternType =
  | 'achievement-oriented'
  | 'dominance-oriented'
  | 'dependency-safety'
  | 'impulse-anxiety'
  | 'sacrifice-scarcity'
  | 'detachment-avoidance'
  | 'past-fixation';

// 35문항 데이터 (랜덤 순서)
export const moneyPatternQuestions: MoneyPatternQuestion[] = [
  {
    id: "Q1",
    text: "쇼핑이나 소비가 스트레스를 풀어주는 방법이 될 때가 있다.",
    pattern: "impulse-anxiety"
  },
  {
    id: "Q2",
    text: "돈을 너무 중요하게 생각하면 나의 진정성이나 가치관을 잃을까 봐 걱정된다.",
    pattern: "detachment-avoidance"
  },
  {
    id: "Q3",
    text: "혼자서 돈 관련 결정을 내리기 어렵고, 누군가 함께 결정해주면 좋겠다고 생각한다.",
    pattern: "dependency-safety"
  },
  {
    id: "Q4",
    text: "재정적으로 목표를 달성하는 것이 나의 능력을 증명한다고 생각한다.",
    pattern: "achievement-oriented"
  },
  {
    id: "Q5",
    text: "돈으로 인해 손해를 보거나 배신당한 경험이 또 반복될까 봐 두렵다.",
    pattern: "past-fixation"
  },
  {
    id: "Q6",
    text: "남들과 경제적 상황을 비교하게 되고, 뒤처지는 것이 싫다.",
    pattern: "achievement-oriented"
  },
  {
    id: "Q7",
    text: "나 자신을 위해 돈 쓰는 것이 이기적이거나 낭비하는 것 같아 불편하다.",
    pattern: "sacrifice-scarcity"
  },
  {
    id: "Q8",
    text: "경쟁이나 협상에서 반드시 이겨야 하고, 지는 것은 견딜 수 없다.",
    pattern: "dominance-oriented"
  },
  {
    id: "Q9",
    text: "지금이 기회다 싶으면, 그 기회를 놓칠까 봐 불안해서 빠르게 결정하는 편이다.",
    pattern: "impulse-anxiety"
  },
  {
    id: "Q10",
    text: "재정 관리를 누군가(배우자, 전문가)가 대신 해주면 마음이 편할 것 같다.",
    pattern: "dependency-safety"
  },
  {
    id: "Q11",
    text: "돈이나 물질에 집착하는 것은 속물적이거나 천박하다고 느낀다.",
    pattern: "detachment-avoidance"
  },
  {
    id: "Q12",
    text: "돈을 잘 관리하고 불리는 과정에서 성취감을 느낀다.",
    pattern: "achievement-oriented"
  },
  {
    id: "Q13",
    text: "예전의 돈 관련 사건이 지금의 재정 결정에 여전히 영향을 미친다.",
    pattern: "past-fixation"
  },
  {
    id: "Q14",
    text: "목표를 달성하기 위해서라면 수단과 방법을 가리지 않는 편이다.",
    pattern: "dominance-oriented"
  },
  {
    id: "Q15",
    text: "남(가족, 친구)을 위해 쓰는 것은 괜찮은데, 나를 위해 쓰는 것에는 망설이는 편이다.",
    pattern: "sacrifice-scarcity"
  },
  {
    id: "Q16",
    text: "돈이나 재정에 대해 잘 모르는 편이고, 복잡한 금융 정보는 부담스럽다.",
    pattern: "dependency-safety"
  },
  {
    id: "Q17",
    text: "재정적 풍요보다 의미 있는 일이나 가치 있는 삶을 사는 것이 더 중요하다.",
    pattern: "detachment-avoidance"
  },
  {
    id: "Q18",
    text: "돈을 쓰거나 중요한 재정 결정을 할 때 충동적으로 결정하는 경우가 많다.",
    pattern: "impulse-anxiety"
  },
  {
    id: "Q19",
    text: "재정적으로 성공해야 주변에서 인정받는다고 생각하는 편이다.",
    pattern: "achievement-oriented"
  },
  {
    id: "Q20",
    text: "돈이 많아졌는데도 마음이 편하지 않고, 더 많이 벌어야 안심이 된다.",
    pattern: "dominance-oriented"
  },
  {
    id: "Q21",
    text: "남에게 주는 것은 자연스럽지만, 받거나 도움을 요청하는 것은 부담스럽다.",
    pattern: "sacrifice-scarcity"
  },
  {
    id: "Q22",
    text: "돈 문제가 생기면, 내 탓보다 상황이나 남의 잘못이라고 생각하는 편이다.",
    pattern: "past-fixation"
  },
  {
    id: "Q23",
    text: "손실 가능성이 있는 선택은 가급적 피하고, 안전이 가장 중요하다고 생각한다.",
    pattern: "dependency-safety"
  },
  {
    id: "Q24",
    text: "현실적인 재정 계획을 세우기보다, 내가 하고 싶은 일이나 이상을 우선하는 편이다.",
    pattern: "detachment-avoidance"
  },
  {
    id: "Q25",
    text: "괜찮아, 어떻게든 되겠지 또는 이번엔 잘 될 거야라는 생각으로 낙관하는 편이다.",
    pattern: "impulse-anxiety"
  },
  {
    id: "Q26",
    text: "돈을 잘 버는 것이 나의 경쟁력이라고 생각한다.",
    pattern: "achievement-oriented"
  },
  {
    id: "Q27",
    text: "내가 주도권을 잃거나 누군가에게 통제당하는 상황이 되면 극도로 불안하다.",
    pattern: "dominance-oriented"
  },
  {
    id: "Q28",
    text: "내가 베풀고 희생한 것에 비해 받은 게 없다는 서운함이나 억울함을 느낀 적이 많다.",
    pattern: "sacrifice-scarcity"
  },
  {
    id: "Q29",
    text: "재정 문제가 복잡하거나 어려울 때, 혼자 감당하는 것이 버겁게 느껴진다.",
    pattern: "dependency-safety"
  },
  {
    id: "Q30",
    text: "돈 이야기를 하는 것 자체가 불편하고 피하고 싶다.",
    pattern: "detachment-avoidance"
  },
  {
    id: "Q31",
    text: "돈을 크게 벌거나 크게 잃은 경험이 있고, 적당한 선을 정하기 어렵다.",
    pattern: "impulse-anxiety"
  },
  {
    id: "Q32",
    text: "재정적으로 우위에 있어야 관계에서도 유리한 위치를 점할 수 있다고 생각한다.",
    pattern: "dominance-oriented"
  },
  {
    id: "Q33",
    text: "내가 원하는 것보다 남이 필요로 하는 것을 먼저 생각하는 편이다.",
    pattern: "sacrifice-scarcity"
  },
  {
    id: "Q34",
    text: "돈 문제로 관계가 틀어진 사람을 쉽게 용서하기 어렵다.",
    pattern: "past-fixation"
  },
  {
    id: "Q35",
    text: "돈으로 인해 받은 상처나 억울함을 자주 떠올리는 편이다.",
    pattern: "past-fixation"
  }
];

// 패턴 정보
export const patternInfo: Record<PatternType, {
  name: string;
  emoji: string;
  description: string;
  coreMessage: string;
  strengths: string[];
  shadows: string[];
  shadowMessage: string;
  transformationPath: string;
}> = {
  'achievement-oriented': {
    name: '성취 지향 패턴',
    emoji: '🎯',
    description: '당신에게 돈은 "존재 증명서"입니다. 목표를 이루는 순간, "나는 가치 있는 사람이야"라고 느낍니다. 하지만 그 안도감은 오래가지 않습니다. 다음 목표를 세우지 않으면 다시 불안해지기 때문입니다.',
    coreMessage: '"만약 오늘 아무것도 달성하지 못한다면, 당신은 어떤 사람인가요?"',
    strengths: [
      '강력한 추진력: 목표를 세우면 반드시 이루는 실행력',
      '자기 책임감: 성공도 실패도 내 몫이라고 받아들임',
      '성장 지향: 어제보다 나은 내일을 만드는 끊임없는 동력',
      '긍정적 영향: 당신의 성취가 주변 사람들에게 영감을 줌'
    ],
    shadows: [
      '자기 가치 = 성과: 목표를 못 이루면 자존감이 무너집니다.',
      '끝없는 레이스: 하나를 이뤄도 만족이 없습니다.',
      '비교의 함정: 남들의 성공이 나의 실패처럼 느껴집니다.',
      '도움 요청 못함: "혼자 해내야 진짜 성취"라고 믿습니다.'
    ],
    shadowMessage: '이 패턴이 당신의 돈을 막고 있습니다. 성취했는데도 불안하고, 벌었는데도 부족하고, 이뤘는데도 공허합니다.',
    transformationPath: '진짜 머니 주권자는 많이 이루는 사람이 아니라, 무의식에 끌려가지 않고 의식적으로 선택하는 사람입니다.'
  },
  'dominance-oriented': {
    name: '지배 지향 패턴',
    emoji: '👑',
    description: '당신에게 돈은 "생존 무기"입니다. 주도권을 쥐고 있을 때만 안전하다고 느낍니다. 현대 사회에서 성공한 사람들 중 이 패턴을 가진 이들이 많습니다. 하지만 역설이 있습니다. 돈이 많아져도 마음은 편하지 않습니다.',
    coreMessage: '"만약 당신이 모든 것을 통제할 수 있다 해도, 당신은 진짜 편안할 수 있을까요?"',
    strengths: [
      '강력한 승부욕: 경쟁에서 이기는 추진력',
      '목표 지향: 원하는 것을 얻기 위한 집념',
      '결단력: 빠르고 명확한 의사결정',
      '리더십: 상황을 주도하고 이끄는 능력'
    ],
    shadows: [
      '끝없는 불안: 돈이 많아져도 마음이 편하지 않습니다.',
      '통제 집착: 주도권을 잃는 순간 극도로 불안해집니다.',
      '수단 불문: 목표를 위해 경계가 희미해집니다.',
      '관계의 권력화: 재정 우위 = 관계 우위로 봅니다.'
    ],
    shadowMessage: '이 패턴이 당신의 평화를 막고 있습니다. 돈은 많은데 마음은 가난하고, 이겼는데도 외롭고, 통제하는데도 불안합니다.',
    transformationPath: '진짜 머니 주권자는 모든 것을 지배하는 사람이 아니라, 통제할 수 없는 것을 받아들이고 통제할 수 있는 것에 집중하는 사람입니다.'
  },
  'dependency-safety': {
    name: '의존-안전 패턴',
    emoji: '🤝',
    description: '당신에게 돈은 "혼자 감당하기 버거운 것"입니다. 누군가 함께 있으면 안심이 되고, 혼자 결정해야 할 때는 불안이 밀려옵니다. 이것은 무능력해서가 아닙니다. 어릴 적 "네가 어떻게 알아?"라는 말을 반복해서 들었거나, 중요한 결정에서 실패한 경험이 뇌리에 박혀 있기 때문입니다.',
    coreMessage: '"만약 조언해줄 사람이 없다면, 당신은 어떻게 결정하시겠어요?"',
    strengths: [
      '신중함: 섣부른 결정을 피하고 충분히 고민함',
      '협력적: 전문가의 조언을 잘 받아들임',
      '안전 지향: 무리한 리스크를 피해 안정적',
      '겸손함: 자신의 한계를 인정하고 배우려 함'
    ],
    shadows: [
      '의사결정 회피: 스스로 결정하지 못하고 미룹니다.',
      '과도한 의존: 타인의 의견에 지나치게 의존합니다.',
      '기회 놓침: 안전만 추구하다 성장 기회를 놓칩니다.',
      '주도권 상실: 내 돈인데 내가 통제하지 못합니다.'
    ],
    shadowMessage: '이 패턴이 당신의 성장을 막고 있습니다. 안전한데 답답하고, 보호받는데 무력하고, 의존하는데 불안합니다.',
    transformationPath: '진짜 머니 주권자는 모든 걸 혼자 하는 사람이 아니라, 필요할 때 도움을 받되 최종 결정은 스스로 내리는 사람입니다.'
  },
  'impulse-anxiety': {
    name: '충동-불안 패턴',
    emoji: '⚡',
    description: '당신에게 돈은 "지금 잡아야 하는 기회"입니다. 기다리는 시간이 불안합니다. "지금 아니면 놓친다"는 생각이 판단을 앞지릅니다. 이것은 조급함이 아닙니다. "기회를 놓치면 다시는 오지 않는다"는 결핍의 무의식이 작동하는 것입니다.',
    coreMessage: '"만약 24시간 기다린 후에 결정한다면, 당신은 같은 선택을 할까요?"',
    strengths: [
      '빠른 실행력: 기회를 포착하면 즉시 행동',
      '긍정적 태도: 낙관적이고 희망적인 마인드',
      '유연성: 변화에 빠르게 적응하고 도전',
      '열정: 삶에 대한 뜨거운 에너지와 열정'
    ],
    shadows: [
      'FOMO (놓칠까봐 불안): "지금 아니면 안 돼"라는 생각에 사로잡힙니다.',
      '반복적 후회: 충동 구매/투자 후 후회가 반복됩니다.',
      '계획 부재: 장기적 재정 계획이 없습니다.',
      '극단적 경험: 크게 벌거나 크게 잃는 롤러코스터.'
    ],
    shadowMessage: '이 패턴이 당신의 안정을 막고 있습니다. 기회를 잡는데 후회하고, 움직이는데 불안하고, 행동하는데 후회합니다.',
    transformationPath: '진짜 머니 주권자는 기회를 포기하는 사람이 아니라, 진짜 기회와 가짜 긴급함을 구분할 수 있는 사람입니다.'
  },
  'sacrifice-scarcity': {
    name: '희생-결핍 패턴',
    emoji: '💝',
    description: '당신에게 돈은 "남을 위해 쓰는 것"입니다. 나 자신을 위해 쓰는 순간, 죄책감이 밀려옵니다. 이것은 이타심이 아닙니다. "내가 먼저 받으면 이기적인 사람"이라는 어린 시절의 학습된 신념입니다.',
    coreMessage: '"만약 당신이 가장 소중한 사람이라면, 당신은 당신을 어떻게 대할 건가요?"',
    strengths: [
      '이타적: 남을 배려하고 베푸는 따뜻한 마음',
      '관계 중시: 돈보다 사람과의 관계를 우선',
      '헌신적: 사랑하는 사람을 위해 희생할 수 있음',
      '겸손함: 자신의 필요를 낮추고 남을 먼저 생각'
    ],
    shadows: [
      '자기 방치: 나를 위한 투자를 죄책감으로 느낍니다.',
      '숨은 거래: "내가 이만큼 했는데"라는 기대가 있습니다.',
      '분노 누적: 억울함과 서운함이 쌓여 갑니다.',
      '결핍 악순환: 자신을 채우지 않아 계속 결핍됩니다.'
    ],
    shadowMessage: '이 패턴이 당신의 풍요를 막고 있습니다. 베푸는데 결핍되고, 주는데 공허하고, 희생하는데 억울합니다.',
    transformationPath: '진짜 머니 주권자는 남을 배려하지 않는 사람이 아니라, 나를 먼저 채워야 남에게도 줄 수 있다는 것을 아는 사람입니다.'
  },
  'detachment-avoidance': {
    name: '분리-회피 패턴',
    emoji: '🎨',
    description: '당신에게 돈은 "영혼을 더럽히는 것"입니다. 돈을 중요하게 여기는 순간, 나의 가치관과 진정성을 잃을 것 같은 두려움이 생깁니다. 이것은 순수함이 아닙니다. "돈 = 속물" 프레임 속에 갇혀서, 현실적인 계획을 세우지 못하는 것입니다.',
    coreMessage: '"만약 돈이 당신의 가치를 실현하는 도구라면 어떨까요?"',
    strengths: [
      '가치 중심: 돈보다 의미와 진정성을 우선',
      '정신적 풍요: 물질보다 내면의 성장을 추구',
      '순수함: 속물적이지 않은 맑은 시선',
      '이타적: 더 큰 가치와 공동선을 지향'
    ],
    shadows: [
      '현실 회피: 재정 문제를 직시하지 않고 회피합니다.',
      '이상과 현실의 괴리: 꿈은 크지만 실행 계획은 없습니다.',
      '돈 = 악 프레임: 돈을 부정적으로만 봅니다.',
      '경제적 무력감: 재정 계획 없이 흘러가는 대로 삽니다.'
    ],
    shadowMessage: '이 패턴이 당신의 이상을 막고 있습니다. 순수한데 무력하고, 고결한데 궁핍하고, 의미있는데 실현 못합니다.',
    transformationPath: '진짜 머니 주권자는 돈에 집착하는 사람이 아니라, 돈을 가치 실현의 도구로 활용하는 사람입니다.'
  },
  'past-fixation': {
    name: '과거-집착 패턴',
    emoji: '🔒',
    description: '당신에게 돈은 "배신의 기억"입니다. 과거에 돈으로 인해 상처받은 경험이 있습니다. 그 기억이 지금도 당신의 선택을 지배합니다. 이것은 신중함이 아닙니다. "또 당할까봐" 두려워서, 새로운 기회 앞에서도 과거의 렌즈로 세상을 보는 것입니다.',
    coreMessage: '"만약 과거의 상처가 없었다면, 당신은 어떤 선택을 할까요?"',
    strengths: [
      '경험 학습: 과거 실수에서 교훈을 얻음',
      '신중함: 같은 실수를 반복하지 않으려 조심',
      '분명한 기준: "이건 안 돼" 선이 명확함',
      '자기 보호: 상처받지 않으려는 방어 본능'
    ],
    shadows: [
      '과거 반복 재생: 상처를 반복해서 떠올리며 고통받습니다.',
      '피해자 의식: 항상 남 탓, 상황 탓으로 돌립니다.',
      '새로운 기회 거부: 과거 때문에 현재 기회를 놓칩니다.',
      '관계의 벽: 신뢰하지 못해 고립됩니다.'
    ],
    shadowMessage: '이 패턴이 당신의 미래를 막고 있습니다. 과거를 붙잡고, 현재를 놓치고, 미래를 두려워합니다.',
    transformationPath: '진짜 머니 주권자는 과거를 잊는 사람이 아니라, 과거에서 배우되 과거에 갇히지 않는 사람입니다.'
  }
};

// 갈등 쌍 정의 (복잡한 갈등 해결 시스템은 추후 필요시 구현)
export const questionPairs: Array<{
  questionA: MoneyPatternQuestion;
  questionB: MoneyPatternQuestion;
}> = [];