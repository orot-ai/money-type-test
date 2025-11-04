import { useState, useEffect, useRef } from 'react';
import { moneyPatternQuestions, patternInfo, PatternType, MoneyPatternQuestion } from '@/data/moneyPatterns';
import { Sparkles, TrendingUp, Zap, Heart, Shield, Trophy, Lock, ChevronLeft, ChevronRight } from 'lucide-react';

interface PatternScores {
  [key: string]: number;
}

export default function Home() {
  const [isStarted, setIsStarted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<boolean[]>(new Array(moneyPatternQuestions.length).fill(false));
  const [showResult, setShowResult] = useState(false);
  const [patternScores, setPatternScores] = useState<PatternScores>({});
  const [currentPatternIndex, setCurrentPatternIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToCenter = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const buttons = container.querySelectorAll('button');
    const targetButton = buttons[index];

    if (targetButton) {
      const containerWidth = container.offsetWidth;
      const buttonLeft = targetButton.offsetLeft;
      const buttonWidth = targetButton.offsetWidth;

      // 버튼의 중앙이 컨테이너 중앙에 오도록 스크롤 위치 계산
      const scrollPosition = buttonLeft - (containerWidth / 2) + (buttonWidth / 2);

      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const handlePatternClick = (index: number) => {
    setCurrentPatternIndex(index);
    scrollToCenter(index);
  };

  const toggleAnswer = (index: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[index] = !newSelectedAnswers[index];
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleSubmit = () => {
    calculateResults(selectedAnswers);
  };

  const calculateResults = (answers: boolean[]) => {
    const scores: PatternScores = {
      'achievement-oriented': 0,
      'dominance-oriented': 0,
      'dependency-safety': 0,
      'impulse-anxiety': 0,
      'sacrifice-scarcity': 0,
      'detachment-avoidance': 0,
      'past-fixation': 0
    };

    answers.forEach((answer, index) => {
      if (answer) {
        const pattern = moneyPatternQuestions[index].pattern;
        scores[pattern] += 1;
      }
    });

    setPatternScores(scores);
    setShowResult(true);
  };

  const getTopPatterns = (): string[] => {
    const maxScore = Math.max(...Object.values(patternScores));
    return Object.entries(patternScores)
      .filter(([_, score]) => score === maxScore && score > 0)
      .map(([pattern, _]) => pattern);
  };

  const resetTest = () => {
    setIsStarted(false);
    setSelectedAnswers(new Array(moneyPatternQuestions.length).fill(false));
    setShowResult(false);
    setPatternScores({});
  };

  const getPatternIcon = (pattern: PatternType) => {
    const iconMap = {
      'achievement-oriented': Trophy,
      'dominance-oriented': Zap,
      'dependency-safety': Shield,
      'impulse-anxiety': Heart,
      'sacrifice-scarcity': Heart,
      'detachment-avoidance': Sparkles,
      'past-fixation': Lock
    };
    return iconMap[pattern] || Sparkles;
  };

  // 시작 화면
  if (!isStarted) {
    return (
      <div className="min-h-screen bg-gradient-luxury flex items-center justify-center p-4">
        <div className="bg-gradient-deep backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-10 max-w-2xl w-full border border-luxury-gold-200">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="block md:inline">Be:On</span>
              <span className="block md:inline md:ml-2">머니 패턴 진단</span>
            </h1>
            <div className="text-center mb-6">
              <p className="text-lg text-white mb-4">
                당신의 <span className="text-white">'돈 패턴'</span>을 발견하는 시간
              </p>
              <p className="text-white mb-4">
                아래 35개 문항을 읽고,<br />
                <span className="text-white">'돈'</span>과 관련하여 지금의 나와 닮았다고<br />
                느껴지는 문항에 체크해주세요.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 text-center border border-dashed border-luxury-gold-300/50">
              <ul className="text-white text-sm leading-relaxed space-y-2 list-none">
                <li>• 정답은 없습니다</li>
                <li>• 편안한 마음으로 직관적으로 선택하세요</li>
                <li>• 최소 5개 이상 선택해주세요</li>
                <li>• 약 5-7분 소요됩니다</li>
              </ul>
            </div>
          </div>

          <button
            onClick={() => setIsStarted(true)}
            className="w-full bg-gradient-gold hover:shadow-2xl text-deep-blue-950 py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            진단 시작하기
          </button>
        </div>
      </div>
    );
  }

  // 결과 화면
  if (showResult) {
    const topPatterns = getTopPatterns();
    const totalSelected = selectedAnswers.filter(answer => answer).length;
    const isComplex = topPatterns.length > 1;

    return (
      <div className="min-h-screen bg-gradient-luxury md:p-4">
        {/* 헤더 부분 */}
        <div className="max-w-none md:max-w-7xl mx-auto md:mb-8">
          <div className="bg-gray-900/95 backdrop-blur-sm md:rounded-3xl md:shadow-2xl p-4 md:p-10 md:border-2 md:border-luxury-gold-300">
            {/* 헤더 */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                <span className="block md:inline">Be:On</span>
                <span className="block md:inline md:ml-2">머니 패턴 진단 결과</span>
              </h2>
              <p className="text-lg text-gray-300">
                총 <span className="font-bold" style={{color: '#fdd828'}}>{totalSelected}개</span>의 문항을 선택하셨습니다
              </p>
            </div>

            {/* 결과 제목 */}
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                🎯 당신의 머니 패턴
              </h3>
              {isComplex ? (
                <div>
                  <h4 className="text-2xl font-bold mb-2" style={{color: '#fdd828'}}>
                    {topPatterns.map(pattern => patternInfo[pattern as PatternType].name).join(' & ')} 복합입니다
                  </h4>
                  <p className="text-gray-300">두 가지 이상의 패턴이 함께 작동하고 있어요.</p>
                </div>
              ) : (
                <h4 className="text-2xl font-bold" style={{color: '#fdd828'}}>
                  {patternInfo[topPatterns[0] as PatternType].name}입니다
                </h4>
              )}
            </div>
          </div>
        </div>

        {/* 페이지 전체 좌우 분할 */}
        <div className="max-w-none md:max-w-7xl mx-auto px-2 md:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-10">
            {/* 왼쪽: 핵심 패턴 결과 (슬라이더) - 2/3 크기 */}
            <div className="lg:col-span-2">
              <div className="md:bg-gradient-deep backdrop-blur-sm md:rounded-3xl md:shadow-2xl p-2 md:p-8 md:border md:border-luxury-gold-200 relative">
                {topPatterns.length > 1 && (
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-bold text-white">핵심 패턴 상세</h4>
                  </div>
                )}

                {/* 좌측 화살표 */}
                {topPatterns.length > 1 && (
                  <button
                    onClick={() => setCurrentPatternIndex(Math.max(0, currentPatternIndex - 1))}
                    disabled={currentPatternIndex === 0}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/20 transition-all z-10"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                )}

                {/* 우측 화살표 */}
                {topPatterns.length > 1 && (
                  <button
                    onClick={() => setCurrentPatternIndex(Math.min(topPatterns.length - 1, currentPatternIndex + 1))}
                    disabled={currentPatternIndex === topPatterns.length - 1}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/20 transition-all z-10"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                )}

                {/* 현재 패턴 표시 */}
                {(() => {
                  const pattern = topPatterns[currentPatternIndex];
                  const info = patternInfo[pattern as PatternType];
                  const score = patternScores[pattern];

                  return (
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-dashed border-yellow-400 text-white">
                      <div className="flex items-center mb-6">
                        <span className="text-3xl mr-3">{info.emoji}</span>
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {info.name}
                          </h3>
                          <p className="text-sm opacity-80 text-white">{score}개 문항 선택 (총 5개 문항 중)</p>
                        </div>
                      </div>

                      {/* 핵심 패턴 설명 */}
                      <div className="mb-6">
                        <h4 className="text-lg font-bold mb-3 text-white">💡 핵심 패턴 설명</h4>
                        <p className="text-base mb-4 leading-relaxed text-white">
                          {info.description}
                        </p>
                        <p className="text-base font-medium italic text-center py-3 px-4 bg-white/10 rounded-lg" style={{color: '#fdd828'}}>
                          {info.coreMessage}
                        </p>
                      </div>

                      {/* 이 패턴의 빛 */}
                      <div className="mb-6">
                        <h4 className="text-lg font-bold mb-3 text-white">⭐ 이 패턴의 빛</h4>
                        <ul className="space-y-2">
                          {info.strengths.map((strength, index) => (
                            <li key={index} className="text-white text-sm pl-4">
                              • {strength}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* 이 패턴의 그림자 */}
                      <div className="mb-6">
                        <h4 className="text-lg font-bold mb-3 text-white">🌑 이 패턴의 그림자</h4>
                        <ul className="space-y-2">
                          {info.shadows.map((shadow, index) => (
                            <li key={index} className="text-white text-sm">
                              • {shadow}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 p-3 bg-red-900/20 rounded-lg border border-red-500/30">
                          <p className="text-white text-sm font-medium">
                            {info.shadowMessage}
                          </p>
                        </div>
                      </div>

                      {/* 머니 주권자로 가는 길 */}
                      <div className="mb-6">
                        <h4 className="text-lg font-bold mb-3 text-white">🎯 머니 주권자로 가는 길</h4>
                        <p className="text-white text-sm leading-relaxed">
                          {info.transformationPath}
                        </p>
                        <div className="mt-4 p-3 bg-white/10 rounded-lg">
                          <p className="text-white text-sm">
                            당신은 지금 자신의 무의식 돈 패턴을 발견했습니다.<br />
                            이것이 첫 번째 단계입니다.<br /><br />
                            다음 단계는?<br />
                            이 패턴을 실제로 전환하는 것입니다.<br /><br />
                            <span className="font-bold" style={{color: '#fdd828'}}>Be:On은 이 여정을 함께 걷습니다.</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* 썸네일 네비게이션 */}
                {topPatterns.length > 1 && (
                  <div className="mt-6 pt-4 border-t border-white/20">
                    {/* 마스크가 적용된 컨테이너 */}
                    <div className="relative overflow-hidden">
                      {/* 좌측 페이드 마스크 */}
                      <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-r from-[#191e37] to-transparent z-10 pointer-events-none"></div>
                      {/* 우측 페이드 마스크 */}
                      <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-l from-[#191e37] to-transparent z-10 pointer-events-none"></div>

                      {/* 스크롤 가능한 썸네일 컨테이너 */}
                      <div
                        ref={scrollContainerRef}
                        className="flex gap-3 px-8 py-2 overflow-x-auto scrollbar-hide"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                      >
                        {topPatterns.map((pattern, index) => {
                          const info = patternInfo[pattern as PatternType];
                          const isActive = index === currentPatternIndex;
                          return (
                            <button
                              key={pattern}
                              onClick={() => handlePatternClick(index)}
                              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-200 text-sm whitespace-nowrap flex-shrink-0 ${
                                isActive
                                  ? 'bg-yellow-400/20 text-yellow-400 border border-yellow-400/50 shadow-lg'
                                  : 'bg-white/10 text-white/70 border border-white/20 hover:bg-white/20 hover:text-white'
                              }`}
                            >
                              <span className="text-base">{info.emoji}</span>
                              <span className="font-medium">{info.name}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <p className="text-center text-white/60 text-xs mt-2">
                      👆 패턴을 클릭하여 바로 이동하세요
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* 오른쪽: 전체 패턴 점수 + CTA - 1/3 크기 */}
            <div className="md:bg-gradient-deep backdrop-blur-sm md:rounded-3xl md:shadow-2xl p-2 md:p-6 md:border md:border-luxury-gold-200 space-y-4 md:space-y-6">
                {/* 모든 패턴 점수 - 컴팩트 테이블 형태 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-dashed border-yellow-400">
                  <h4 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-luxury-gold-500" /> 전체 패턴 점수
                  </h4>

                  {/* 세로 리스트 형태로 변경 */}
                  <div className="space-y-3">
                    {Object.entries(patternScores).map(([pattern, score]) => {
                      const info = patternInfo[pattern as PatternType];
                      return (
                        <div key={pattern} className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-3">
                          <div className="flex items-center gap-3">
                            <span className="text-lg">{info.emoji}</span>
                            <span className="text-white text-base font-medium">{info.name}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-12 bg-gray-700 rounded-full h-2">
                              <div
                                className="bg-gradient-gold h-2 rounded-full"
                                style={{ width: `${(score / 5) * 100}%` }}
                              />
                            </div>
                            <span className="text-yellow-200 text-base font-bold min-w-[24px]">{score}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* CTA 버튼들 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center border border-dashed border-yellow-400">
                  <h3 className="text-xl font-bold mb-4 text-white">📞 30분 무료 진단 컨설팅</h3>
                  <p className="text-white text-base mb-4">
                    정상가 99,000원 → <span className="font-bold text-xl" style={{color: '#fdd828'}}>무료</span>
                  </p>
                  <p className="text-gray-300 text-sm mb-5">
                    사전 공지 없이 마감될 수 있습니다.
                  </p>

                </div>

              {/* 30분 무료 진단 컨설팅 버튼 */}
              <a href="https://open.kakao.com/o/sX81ks0h" target="_blank" rel="noopener noreferrer" className="block w-full bg-gradient-gold hover:shadow-2xl text-deep-blue-950 py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg border-2 border-luxury-gold-300 text-center">
                30분 무료 진단 컨설팅
              </a>

              {/* 다시 테스트 버튼 */}
              <button
                onClick={resetTest}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                다시 진단하기
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 테스트 진행 화면 - 모든 문항을 한번에 표시
  const selectedCount = selectedAnswers.filter(answer => answer).length;

  return (
    <div className="min-h-screen bg-gradient-luxury md:p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-deep backdrop-blur-sm md:rounded-3xl md:shadow-2xl p-4 md:p-10 md:border md:border-luxury-gold-200">

          {/* 헤더 */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white whitespace-nowrap">
              Be:On 머니 패턴 진단
            </h2>
            <p className="text-lg text-gray-300 mb-4">
              편안한 마음으로, '지금의 나'와 조금이라도 닮았다고 느껴지는 문항에 체크하세요
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 inline-block">
              <p className="text-white font-medium">
                현재 <span className="font-bold text-yellow-400">{selectedCount}개</span> 문항 선택됨 (총 35개 중)
              </p>
            </div>
          </div>

          {/* 모든 문항 리스트 */}
          <div className="space-y-4 mb-8">
            {moneyPatternQuestions.map((question, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-dashed transition-all duration-300 cursor-pointer hover:bg-white/15 hover:shadow-lg ${
                  selectedAnswers[index]
                    ? 'border-yellow-400 bg-yellow-400/10 shadow-lg shadow-yellow-400/20'
                    : 'border-luxury-gold-300/50 hover:border-luxury-gold-400'
                }`}
                onClick={() => toggleAnswer(index)}
              >
                <div className="flex items-start gap-4">
                  {/* 체크박스 (왼쪽 맨 앞) */}
                  <div className={`w-7 h-7 border-2 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0 mt-0.5 cursor-pointer ${
                    selectedAnswers[index]
                      ? 'bg-yellow-400 border-yellow-400 shadow-lg'
                      : 'border-yellow-400 bg-transparent hover:bg-yellow-400/20 hover:shadow-md'
                  }`}>
                    {selectedAnswers[index] && (
                      <svg className="w-5 h-5 text-deep-blue-950" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>

                  {/* 문항 번호와 텍스트 */}
                  <div className="flex-1">
                    <p className={`text-lg leading-relaxed transition-all duration-300 ${
                      selectedAnswers[index] ? 'text-white font-medium' : 'text-white'
                    }`}>
                      <span className="text-sm font-bold text-yellow-400 mr-3">Q{index + 1}</span>
                      {question.text}
                    </p>
                  </div>

                  {/* 선택 상태 표시 아이콘 */}
                  {selectedAnswers[index] && (
                    <div className="text-yellow-400 flex-shrink-0 mt-1">
                      <Sparkles className="w-5 h-5" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* 제출 버튼 */}
          <div className="text-center">
            <button
              onClick={handleSubmit}
              disabled={selectedCount < 5}
              className={`w-full py-5 px-8 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:-translate-y-1 ${
                selectedCount >= 5
                  ? 'bg-gradient-gold hover:shadow-2xl text-deep-blue-950 hover:scale-105'
                  : 'bg-gray-500 text-gray-300 cursor-not-allowed'
              }`}
            >
              {selectedCount >= 5 ? `진단 결과 보기 (${selectedCount}개 선택됨)` : `최소 5개 이상 선택해주세요 (현재 ${selectedCount}개)`}
            </button>
          </div>

          <div className="text-center mt-6">
            <div className="text-sm text-gray-400 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-luxury-gold-500" />
              <span>돈과 관련된 상황에서의 당신의 모습을 떠올려보세요</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}