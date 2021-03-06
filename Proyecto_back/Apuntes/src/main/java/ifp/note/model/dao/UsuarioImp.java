package ifp.note.model.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ifp.note.model.beans.Usuario;
import ifp.note.repository.UsuarioRepository;

@Service
public class UsuarioImp implements UsuarioService{
	
	@Autowired
	private UsuarioRepository urepo;

	@Override
	public int altausuario(Usuario usu) {
		
		int filas=0;
		try {
			urepo.save(usu);
			filas=1;
			
		}catch (Exception e) {
			e.printStackTrace();
		}
		return filas;
	}

	@Override
	public int modificarDatosUsu(Usuario usu) {
		var u= urepo.findById(usu.getId()).orElse(null);
		if(u==null)
			return 0;
		
		u.setNombre(usu.getNombre());
		u.setApellido(usu.getApellido());
		u.setEstudios(usu.getEstudios());
		//si cambiar contraseña
		//u.setContraseña(usu.getContraseña());
		int filas=0;
		try {
			urepo.save(u);
			filas=1;
		}catch (Exception e) {
			e.printStackTrace();
		}
		return filas;
	}
}
