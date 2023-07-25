// simula una conexión a la base de datos (mas adelante se conecta con una base de google posta)

const misProductos = [
  {
    id: 1,
    nombre: "Lenovo H4",
    precio: 2500,
    img: "../img/notebook_01.jpg",
    idCat: "1",
    stock: "2",
    nombreCat: "Notebooks",
    descripcion: "Notebook 01 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    nombre: "Lenovo M258",
    precio: 2700,
    img: "../img/notebook_02.jpg",
    idCat: "1",
    stock: "3",
    nombreCat: "Notebooks",
    descripcion: "Notebook 02 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    nombre: "Asus ZenBook Pro",
    precio: 2450,
    img: "../img/notebook_03.jpg",
    idCat: "1",
    stock: "4",
    nombreCat: "Notebooks",
    descripcion: "Notebook 03 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    nombre: "Chromebook",
    precio: 2360,
    img: "../img/notebook_04.jpg",
    idCat: "1",
    stock: "5",
    nombreCat: "Notebooks",
    descripcion: "Notebook 04 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    nombre: "Motorola c34",
    precio: 1880,
    img: "../img/cel_01.jpg",
    idCat: "2",
    stock: "4",
    nombreCat: "Celulares",
    descripcion: "Celular 01 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    nombre: "Motorola c36",
    precio: 1900,
    img: "../img/cel_02.jpg",
    idCat: "2",
    stock: "5",
    nombreCat: "Celulares",
    descripcion: "Celular 02 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 7,
    nombre: "Google Pixel 7",
    precio: 1580,
    img: "../img/cel_03.jpg",
    idCat: "2",
    stock: "8",
    nombreCat: "Celulares",
    descripcion: "Celular 03 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 8,
    nombre: "Samsung s33",
    precio: 1900,
    img: "../img/cel_04.jpg",
    idCat: "2",
    stock: "9",
    nombreCat: "Celulares",
    descripcion: "Celular 04 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 9,
    nombre: "Samsung Folder",
    precio: 1480,
    img: "../img/cel_05.jpg",
    idCat: "2",
    stock: "10",
    nombreCat: "Celulares",
    descripcion: "Celular 05 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 10,
    nombre: "Iphone 13",
    precio: 1280,
    img: "../img/cel_06.jpg",
    idCat: "2",
    stock: "10",
    nombreCat: "Celulares",
    descripcion: "Celular 06 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 11,
    nombre: "Huawei S32",
    precio: 980,
    img: "../img/tablet_01.jpg",
    idCat: "3",
    stock: "6",
    nombreCat: "Tablets",
    descripcion: "Tablet 01 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 12,
    nombre: "Huawei S18",
    precio: 1100,
    img: "../img/tablet_02.jpg",
    idCat: "3",
    stock: "7",
    nombreCat: "Tablets",
    descripcion: "Tablet 02 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 13,
    nombre: "Ipad 11g",
    precio: 1280,
    img: "../img/tablet_03.jpg",
    idCat: "3",
    stock: "6",
    nombreCat: "Tablets",
    descripcion: "Tablet 03 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 14,
    nombre: "Lenovo M3",
    precio: 1100,
    img: "../img/tablet_04.jpg",
    idCat: "3",
    stock: "7",
    nombreCat: "Tablets",
    descripcion: "Tablet 04 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  
];
// este export me lo deja disponible para todos los archivos
export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(misProductos);
    }, 100);
  });
};

// creamos una nueva función similar a la anterior pero que nos retorne un solo item
// ponemos prod.id === +id por el que id que recibo por parámetro es un string y mis ids son numéricos ... prod.id === +id toma numéricos /// prod.id === id toma strings
export const getUnProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = misProductos.find((prod) => prod.id === +id);
      resolve(producto);
    }, 100);
  });
};


// creamos una función que retorna un array de una determinada categoría de producto

export const getProductosPorCategoria = (idCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosCategoria = misProductos.filter(
        (prod) => prod.idCat === idCategoria
      );
      resolve(productosCategoria);
    }, 100);
  });
};
