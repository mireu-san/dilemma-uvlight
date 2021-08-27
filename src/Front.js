import React from 'react'
import Checkbox from './Checkbox';

import './front.css';

import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import poster from './image/mask.jpeg';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Uvgoods from './Uvgoods';
import Wiki from './Wiki';
import Mypage from './Mypage';

// https://www.tabnine.com/code/javascript/classes/%40material-ui%2Fcore/FormControlLabel

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});



export default function Front() {
  return (
    <div className='front'>
        <div className='front__container'>
            <Router>
                <div className='Menu-wrapper'>
                    <ul>
                        <Link to='/'>
                            <MyButton>
                                첫 화면으로 (Frontpage)
                            </MyButton>
                        </Link>
                        <Link to='/wiki'>
                            <MyButton>
                                유용한 정보 (UV 살균)
                            </MyButton>
                        </Link>
                        <Link to='/uvgoods'>
                            <MyButton>
                                추천하는 코로나-19 살균기
                            </MyButton>
                        </Link>
                        <Link to='/mypage'>
                            <MyButton>
                                만든이
                            </MyButton>
                        </Link>
                    </ul>
                </div>

                <div className='Contents-wrapper'>
                    <Switch>
                        <Route path='/uvwiki' component={Wiki} />
                        <Route path='/uvgoods' component={Uvgoods} />
                        <Route path='/mypage' component={Mypage} />
                    </Switch>
                </div>

                <div className='front__body'>        
                    <div className='suggest'>단 하나라도 해당 된다면, UV 살균기가 필요합니다.</div>
                        <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                        나는 그날 사용한 마스크를 바로 버리지 않는다.
                        <Checkbox />
                        나는 휴대폰을 닦아야 하는 이유는 알지만, 매일은 안한다.
                        <Checkbox />
                        나는 외출 후 집에 오자마자 손을 씻지는 않았다
                        <p>(정말 문 열고 바로 세면대 가는 걸 의미).</p>
            
        </div>
            <div className='front__footer'>
                <div className='front__footerContainer'>
                    <img className='poster' src={poster} alt="mask" />

                </div>
            </div>
            </Router>
        </div>



    </div>

    

  );
}