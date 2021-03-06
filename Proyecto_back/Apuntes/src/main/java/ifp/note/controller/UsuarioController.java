package ifp.note.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ifp.note.model.beans.Usuario;
import ifp.note.model.dao.UsuarioService;

@RestController
@CrossOrigin
@RequestMapping("/usuario")
public class UsuarioController {
	
	@Autowired
	private UsuarioService userv;
	
	@PostMapping("/registro")
	public String procAlta(@RequestBody Usuario usu) {
		
		if(userv.altausuario(usu)==1){
			return "Usuario Registrado con exito";
		}else {
			return "Fallo al registrar";
		}
	}
	
	@PutMapping("/editarU")
	public String procEdit(@RequestBody Usuario usu) {
		
		if(userv.modificarDatosUsu(usu)==1) {
			return "Modificacion exitosatamente";
		}else {
			return "Error en modificar";
		}
	}
}