import styled from 'styled-components'

export const Container = styled.header`
background-image: linear-gradient(to left bottom, #6933ff, #6e34dc, #6c36bb, #67389c, #5e3a7e);
`;


export const Content = styled.div`
max-width:1120px;
margin: 0 auto;

padding:2rem  1rem 12rem;
display:flex;
align-items:center;
justify-content:space-between;



button{
    font-size:1rem;
    color:#fff;
    background:var(--blue-light);
    border: 0;
    padding:0 2rem;
    border-radius: 0.25rem;
    height:3rem;
    transition:filter 0.2s;
    &:hover{
        filter:brightness(0.9);
    }
}

`