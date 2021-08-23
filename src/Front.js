import React from 'react'
import { Button } from '@material-ui/core';




import './front.css';

function Front() {
    return (
        <div>
            <div className='front'>
                <div className='front__container'>
                    <Button variant="contained">
                        처음부터 시작하기
                    </Button>
                    
                    <Button variant="contained" color="primary">
                        유용한 정보
                    </Button>
                    
                    <Button variant="contained" color="secondary">
                        이 UV살균기가 대단하다!
                    </Button>
                    
                    <Button variant="contained" color="primary" href="#contained-buttons">
                        만든이
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Front
