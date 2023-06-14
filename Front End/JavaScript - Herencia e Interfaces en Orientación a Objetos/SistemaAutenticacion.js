export class SistemaAutenticacion{
    /*Para aplicar el concepto de polimorfismo en JavaScript, tratar objetos de manera diferente
    según su tipo gracias a una interfaz común así no sean de clases relacionadas,
    utilizamos argumentos genéricos los cuales tendrán implementaciones diferentes de la misma interfaz*/

    /*En este caso el parámetro objeto usuario es polimórfico ya que 
    puede representar a una instancia de Cliente o alguna clase derivada de Empleado las cuales tienen la interfaz autenticar*/
    
    /*Y para implementar interfaces en JavaScript (ya que no está soportado nativamente), la cual es una especificación heredable de
    funciones y propiedades base que se deben implementar en distintas clases no relacionadas,
    utilizamos funciones con el mismo nombre que implementaremos de manera distinta según la clase en la que se encuentre*/
    static login(usuario, clave){
        return usuario.autenticar(clave);
    }
}