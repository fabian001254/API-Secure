export default {
    /**
     * 
     * @swagger
     * 
     * tags:
     *   name: Paciente
     *   description: Endpoints para operaciones relacionadas con Paciente.
     * 
     * /Paciente:
     *   get:
     *     tags:
     *     - Paciente
     *     summary: Obtiene la lista de todos los pacientes registrados.
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 pacientes:
     *                   type: array
     *                   items:
     *                     type: object
     *                     properties:
     *                       cedula:
     *                         type: string
     *                       nombre:
     *                         type: string
     *                       apellido:
     *                         type: string
     *                       fechaNacimiento:
     *                         type: string
     *                         format: date
     *                       telefono:
     *                         type: string
     *       '500':
     *         description: Error del servidor
     *   post:
     *     tags:
     *     - Paciente
     *     summary: Crea un nuevo registro de paciente en la base de datos.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               cedula:
     *                 type: integer
     *               nombre:
     *                 type: string
     *               apellido:
     *                 type: string
     *               fechaNacimiento:
     *                 type: string
     *                 format: date
     *               telefono:
     *                 type: string
     *             required:
     *               - cedula
     *               - nombre
     *               - apellido
     *               - fechaNacimiento
     *               - telefono
     *     responses:
     *       '201':
     *         description: Creado con éxito.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                 paciente:
     *                   type: object
     *                   properties:
     *                     cedula:
     *                       type: integer
     *                     nombre:
     *                       type: string
     *                     apellido:
     *                       type: string
     *                     fechaNacimiento:
     *                       type: string
     *                       format: date
     *                     telefono:
     *                       type: string
     *       '400':
     *         description: Bad Request
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *       '500':
     *         description: Error del servidor
     */
  }
  