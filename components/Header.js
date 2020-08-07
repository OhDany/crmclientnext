import { useQuery, gql } from '@apollo/client';

const OBTENER_USUARIO = gql`
  query obtenerUsuario {
    obtenerUsuario {
      id
      nombre
      apellido
      email
    }
  }
`;

const Header = () => {
  // Query Apollo
  const { data, loading, error } = useQuery(OBTENER_USUARIO);

  // console.log(data);
  // console.log(loading);
  // console.log(error);

  // Proteger que no acceda a data antes de obtener resulados
  if (loading) return null;

  const { nombre, apellido } = data.obtenerUsuario;

  return (
    <div className="flex justify-between mb-3">
      <p className="mr-2">
        Hola: {nombre} {apellido}
      </p>

      <button type="button">Cerrar Sesión</button>
    </div>
  );
};

export default Header;
