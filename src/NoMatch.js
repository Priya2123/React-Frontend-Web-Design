import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
.nomatch{
    font-size:60px;
    font-weight: 700;
    text-align: center;
    color: red;
    margin-top: 5%;
   
}
`;


export const NoMatch  = () =>  
    (
        <Styles>
        <div className="nomatch" style={{backgroundColor: '#F5F5F5'}}>
            404 Not Found
        </div>
        </Styles>
    )

