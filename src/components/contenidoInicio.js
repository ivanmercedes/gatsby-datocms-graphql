import React from 'react'
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import {css} from '@emotion/core'

const TextoInicio = styled.div`
    padding-top: 4rem;
    max-width:1200px;
    width:95%;
    margin: 0 auto;

    @media (min-width:768px){
        display: grid;
        grid-template-columns: repeat(2,1fr);
        column-gap: 100px;
    }
    p{
        line-height: 2;
        margin-top: 2rem;
    }
`;

const ContenidoInicio = ({inicio}) => {
   
    const { titulo, contenido, imagen } = inicio;
    return ( 
        <>
            <h2
                css={css`
                    text-align:center;
                    font-size:4rem;
                    margin-top: 4rem;
                `}
            >{titulo}</h2>

            <TextoInicio>
                <p>{contenido}</p>
                <Image fluid={imagen.fluid} />
            </TextoInicio>
        </>
     );
}
 
export default ContenidoInicio;