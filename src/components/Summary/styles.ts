import styled from "styled-components";

export const Container = styled.div`
display:grid;
grid-template-columns:repeat(3,1fr);
gap:2rem;
margin-top:-10rem;
div{
background:var(--shape);
padding:1.5rem 2rem;
border-radius:0.25rem;
color:var(--text-title);
box-shadow: 4px 1px 25px 0px rgba(0,0,0,0.41);
-webkit-box-shadow: 4px 1px 25px 0px rgba(0,0,0,0.41);
-moz-box-shadow: 4px 1px 25px 0px rgba(0,0,0,0.41);

header{
display:flex;
align-items:center;
justify-content:space-between;
}

strong{
    display:block;
    margin-top:1rem;
    font-size:2rem;
    line-height:3rem;
    font-weight:500;
}

&.Verdinhowhite-a{
    background:var(--green);
    color:#fff;
}

}





`;

