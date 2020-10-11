import { graphql, useStaticQuery } from 'gatsby';

const useInicio = () => {

    const informacion = useStaticQuery(graphql`
    query{
        allDatoCmsPagina(filter: {slug: {eq: "inicio" } } ){
          nodes{
            titulo
            contenido
            imagen{
              fluid {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
    `);
    // informacion.allDatoCmsPagina.nodes[0]

    const { titulo, contenido, imagen } = informacion.allDatoCmsPagina.nodes[0];

    return {
        titulo, 
        contenido,
        imagen
    };
    
}
 
export default useInicio;