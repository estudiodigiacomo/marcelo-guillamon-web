// index.js
import { loadVehiclesMassively } from '../service/vehiclesService.js';
import { createNotice } from '../service/newsService.js.';

// Lista de vehículos de prueba (aquí solo ejemplos, puedes mantener esta lista como está)

  const vehiclesData = [
    {
      name: "Ford Ecosport",
      mainImage: "src/assets/1.png",
      secondaryImages: [
        "src/assets/2.png",
        "src/assets/3.png",
        "src/assets/4.png",
        "src/assets/5.png"
      ],
      type: "Suv",
      version: "XLT",
      year: 2006,
      engine: "2.0",
      fuel: "Nafta",
      color: "Gris",
      traction: "Delantera",
      kilometers: 307000,
      brand: "Ford",
      transmission: "Manual",
      consignment: false,
      currency: "ARS",
      price: 5500000,
      sold: false,
      preview: true
    }
  ];


// Llamamos a la función que carga los vehículos
createNotice(vehiclesData);
