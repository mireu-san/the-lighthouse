import styled from "styled-components";

export const StyledIndex = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: white;
    background-color: #272935;

    
`;

export const HomePicture = styled.img`
    width: 50%;
    border-radius: 20%;

    /* justify-content: center;
    align-items: center; */

    /* @media only screen and (max-device-width : 950px){
        width: 75%;
        border-radius: 0%;
        /* only bottom side applied, error! -currently disabled by giving 0% */
    } */
`;

export const HomeTitle = styled.h2`
    font-size: 1.5em;
    text-align: left;
    color: #95A3AB;

    @media only screen and (max-device-width : 990px){
        font-size: 12px;
        text-align: center;
        color: #95A3AB;
    }

`;

export const HomeTitleLeft = styled.h2`
    font-size: 1.5em;
    text-align: center;
    color: #95A3AB;

    margin-top: 1rem;
`;

export const HomeDescriptionProLeft = styled.h3`
    font-size: 1.5rem;
    color: silver; 
    
`

export const HomeLogo = styled.i`
    font-size: 1.5em;
    color: silver;
`

/* interest, education & history, personal note*/
export const HomeDescription = styled.p`
    font-size: 1rem; /* or 1.5 rem if description is short */
    text-align: left;
    color: white;
    margin-top: 12px;

    /* @media only screen and (max-device-width : 950px){
        font-size: 12px;
        text-align: center;
        color: #95A3AB;
        
    } */
`;

// export const HomeFontAwesome = styled.i`
//     flex-direction: row;
//     flex-wrap: wrap;
//     align-content: normal;
//     justify-content: center;
//     align-items: center;
// `;

// const home__container = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     width: 100%;
//     height: 100%;

// `