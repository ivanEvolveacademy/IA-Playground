// Importar el controlador de productos y el módulo fs
const productController = require('../productController');
const fs = require('fs');

// Simular el módulo fs para evitar operaciones reales en el sistema de archivos
jest.mock('fs');

describe('productController.getProducts', () => {
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

  it('should return products as JSON on success', () => {
    const mockProducts = [{ id: 1, name: 'Product A' }];
    fs.readFileSync.mockReturnValue(JSON.stringify(mockProducts));

    productController.getProducts(req, res);

    // Verificar que la respuesta JSON contiene los productos simulados
    expect(res.json).toHaveBeenCalledWith(mockProducts);
    // Verificar que no se llamó al método status
    expect(res.status).not.toHaveBeenCalled();
  });

  it('should return 500 and error message on failure', () => {
    // Simular un error al leer el archivo
    const error = new Error('File not found');
    fs.readFileSync.mockImplementation(() => { throw error; });

    // Llamar al controlador
    productController.getProducts(req, res);

    // Verificar que se devolvió un código de estado 500 y el mensaje de error
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: error.message });
  });
});
