package ifp.note.model.beans;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the apuntes database table.
 * 
 */
@Entity
@Table(name="apuntes")
@NamedQuery(name="Apunte.findAll", query="SELECT a FROM Apunte a")
public class Apunte implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="nombre_tema")
	private String nombreTema;

	private String nombre;

	@Column(name="nombre_a")
	private String nombreA;

	private String ubicacion;

	//uni-directional many-to-one association to Usuario
	@ManyToOne
	@JoinColumn(name="id_usuario")
	private Usuario usuario;

	public Apunte() {
	}

	public String getNombreTema() {
		return this.nombreTema;
	}

	public void setNombreTema(String nombreTema) {
		this.nombreTema = nombreTema;
	}

	public String getNombre() {
		return this.nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getNombreA() {
		return this.nombreA;
	}

	public void setNombreA(String nombreA) {
		this.nombreA = nombreA;
	}

	public String getUbicacion() {
		return this.ubicacion;
	}

	public void setUbicacion(String ubicacion) {
		this.ubicacion = ubicacion;
	}

	public Usuario getUsuario() {
		return this.usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

}