import styled, { keyframes } from 'styled-components';

export const Heading = styled.h1`
   text-align: center;
   color: #205b6d;
`;

export const Content = styled.div`
   overflowY: scroll;
   height: 2500px;
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(20px);
    }
`;

export const Button = styled.div`
   position: fixed; 
   width: 100%;
   left: 95%;
   bottom: 60px; /* Adjusted for better placement */
   height: 20px;
   font-size: 2.3rem;
   z-index: 1;
   cursor: pointer;
   color: #205b6d;
   animation: ${props => (props.visible ? fadeIn : fadeOut)} 0.3s ease;

   @media (max-width: 768px) {
       font-size: 1.7rem; /* Adjust font size for smaller screens */
       bottom: 25px;
       left: 92%;
       margin-left: -5px;
   }
`;