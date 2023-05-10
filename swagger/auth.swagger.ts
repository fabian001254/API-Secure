    /**
     * @swagger
     * tags:
     *   name: Autenticacion
     *   description: Endpoints para operaciones relacionadas con citas.
     * 
     * /auth/:tarjeta:
     *   get:
     *     tags:
     *     - Autenticacion
     *     summary: Obtiene el token de la autenticacion
     *     responses:
     *       '201':
     *         description: OK
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 auth:
     *                   type: array
     *                   items:
     *                     type: object
     *                     properties:
     *                       token:
     *                         type: string
     *       '400':
     *         description: Tarjeta profesional no existente
     */