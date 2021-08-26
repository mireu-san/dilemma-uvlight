import React from 'react';
import './side.css';

function Side() {
    return (
        <div>
            <div className='side'>
                <div className='side__container'>
                    <div className='side__title'>
                        환영합니다!
                    <div className='side__body'>
                        <div className='font__size'>코로나의 위협에서 살아남기 위해 필요한 UV 살균기, 제대로 알면 돈도, 건강도 지킵니다!</div>
                        <li>유용한 정보 (UV 살균) 을 누르면, 정부에서 발행한 2020년 UV 안전 시험 보고서 화면으로 이동하게 됩니다.</li>
                        <li>추천하는 코로나-19 살균기를 누르면, 예산별로 추천하는 UV 살균기를 소개합니다.</li>
                        <li>만든이를 누르면, 저에게 하고 싶은 말을 적어서 메일을 남기실 수 있습니다.</li>
                    <div className='side__end'>
                        <div className='font__size'>UV 살균기, 어디까지 알고 계시나요?</div>
                        <li>1. UV-C 라이트가 가장 살균 효력이 뛰어난 것으로 알려져 있습니다.</li>
                        <li>2. UV-A, UV-B, UV-C 는 살균에 걸리는 시간의 차이일 뿐, 최종적으로는 살균이 됩니다.</li>
                        <li>3. 모든 UV 살균기가 발산하는 빛은 인체에 유해하므로, 반드시 차단막 또는 KC 인증을 받은 제품만 사용해야 합니다.</li>
                        <li>4. 구매 전, 해당 제품에 KC 마크 인증 문구 또는 번호가 있는지 확인해보세요. 직접 KC 마크 인증이 일치한지는 여기에서 확인이 가능합니다. https://safetykorea.kr/release/certificationsearch</li>
                        <li>5. UV 램프와 UV LED 방식이 있습니다. 둘 다 살균력은 동일합니다. 다만, 램프는 수은과 오존이 발생하며 LED는 그런게 없습니다.</li>
                        <li>6. 5만원 미만의 제품을 찾는다면 UV 램프 제품을, 10만원 이상의 제품을 찾는다면 '젓병소독기' 로 검색하면 매우 만족스러운 UV LED 살균기가 나올 것 입니다.</li>
                        <li>7. 주문 전, 반드시 상품 표기란에 게시 된 크기를 가늠해보세요.</li>
                        <li>8. 생활 습관을 점검 해 보세요! 무의식중에 코나 입 근처로 손가락이 올라 가거나, 마스크가 제대로 착용되지 않으면 모든게 헛수고입니다!</li>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Side
