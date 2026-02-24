const db = require('../db')
//Listar todos los estudiantes
module.exports.listarEst = async () => {
    const [records] = await db.query("select * from alumno;")
    return records;
}//EndPoint probado, Exitoso.
module.exports.listarEstCod = async (idalumno) => {
    const [[record]] = await db.query("sp_buscarxdocumento", [idalumno])
    return record;
}//EndPoint probado, Exitoso.
module.exports.eliminarEst = async (idalumno) => {
    const [{ affectedRows }] = await db.query("DELETE FROM academica.alumno WHERE idalumno = ?", [idalumno])
    return affectedRows;
}//EndPoint probado, Exitoso.
//Ingresar Estudiante
module.exports.ingresarEst = async (obj,id=0) => {
    const [[[{affectedRows}]]] = await db.query("CALL academica.SP_inorup(?,?,?,?,?,?,?)",
        [id,obj.idalumno,obj.apellidos,obj.nombres,obj.carnet,obj.nivel,obj.idprograma])
    return affectedRows;
}
//Actualizar Estudiante
module.exports.actualizarEst = async (obj,id=1) => {
    const [[[{affectedRows}]]] = await db.query("CALL academica.SP_inorup(?,?,?,?,?,?,?)",
        [id,obj.idalumno,obj.apellidos,obj.nombres,obj.carnet,obj.nivel,obj.idprograma])
    return affectedRows;
}
//Actualizar Alumno
module.exports.upAlumno = async (obj) => {
    const [[[{affectedRows}]]] = await db.query("CALL academica.SP_actualizar_alumno(?,?,?,?)",
        [obj.idalumno,obj.apellidos,obj.nombres,obj.carnet,obj.nivel])
    return affectedRows;
}
//Ingresar una Nota
module.exports.ingresarNota = async (obj,id=0) => {
    const [[[{affectedRows}]]] = await db.query("CALL academica.SP_inorupnotas(?,?,?,?,?)",
        [id,obj.idalumno,obj.idasignatura,obj.idperiodo,obj.nota])
    return affectedRows;
}
//Nota una Nota
module.exports.actualizarNota = async (obj,id=0) => {
    const [[[{affectedRows}]]] = await db.query("CALL academica.SP_inorupnotas(?,?,?,?,?)",
        [id,obj.idalumno,obj.nota])
    return affectedRows;
}
//Buscar estudiante por Documento
module.exports.buscarxdocumento = async (documento) => {
    const [[record]] = await db.query("select * from taller.tblestudiante where documento = ", [documento])
    return record;
}//EndPoint probado, Exitoso.
module.exports.listarEstfecha = async (documento) => {
    const [[record]] = await db.query("call sp_fechanacimiento()")
    return record;
}
module.exports.documento = async (documento) => {
    const [[record]] = await db.query("call sp_documento(?)",[documento])
    return record;
}
