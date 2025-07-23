// Importar el controlador de usuarios y el módulo fs
const userController = require('../userController');
const fs = require('fs');

// Simular el módulo fs para evitar operaciones reales en el sistema de archivos
jest.mock('fs');

describe('userController.getUsers', () => {
  let req, res;

  // Configurar objetos req y res antes de cada prueba
  beforeEach(() => {
    req = {}; // Simular un objeto de solicitud vacío
    res = {
      json: jest.fn(), // Simular el método json de la respuesta
      status: jest.fn().mockReturnThis() // Simular el método status de la respuesta
    };
  });

  // Limpiar los mocks después de cada prueba
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return users as JSON on success', () => {
    // Simular datos de usuarios y la respuesta del método readFileSync
    const mockUsers = [{ id: 1, name: 'Alice' }];
    fs.readFileSync.mockReturnValue(JSON.stringify(mockUsers));

    // Llamar al controlador
    userController.getUsers(req, res);

    // Verificar que la respuesta JSON contiene los usuarios simulados
    expect(res.json).toHaveBeenCalledWith(mockUsers);
    // Verificar que no se llamó al método status
    expect(res.status).not.toHaveBeenCalled();
  });

  it('should return 500 and error message on failure', () => {
    // Simular un error al leer el archivo
    const error = new Error('File not found');
    fs.readFileSync.mockImplementation(() => { throw error; });

    // Llamar al controlador
    userController.getUsers(req, res);

    // Verificar que se devolvió un código de estado 500 y el mensaje de error
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: error.message });
  });
});