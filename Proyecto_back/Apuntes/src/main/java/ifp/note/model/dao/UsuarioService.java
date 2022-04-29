package ifp.note.model.dao;

import ifp.note.model.beans.Usuario;

public interface UsuarioService {
		//para registrar
		int altausuario(Usuario usu);
		//para modificar datos
		int modificarDatosUsu(Usuario usu);
}
