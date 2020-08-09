import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  // Query Apollo
  const { data, loading, error } = useQuery(OBTENER_USUARIO);

  // console.log(data);
  // console.log(loading);
  // console.log(error);

  // Proteger que no acceda a data antes de obtener resulados
  if (loading) return null;

  if (!data) {
    return router.push('/login');
  }

  const { nombre, apellido } = data.obtenerUsuario;

  const cerrarSesion = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <div className="flex justify-between mb-3">
      <p className="mr-2">
        Hola: {nombre} {apellido}
      </p>

      <button
        onClick={() => cerrarSesion()}
        type="button"
        className="bg-blue-800 w-full sm:w-auto font-bold uppercase text-xs rounded py-1 px-2 text-white shadow-md"
      >
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Header;
