const productos = [
    {
      id: 1,
      nombre: "Candongas Domenica",
      precio: 39900,
      descripcion: "Candongas chunky doradas con detalle texturizado, son livianas y divinas para ocasiones especiales.",
      imagen: "Candongas_Domenica.jpg",
      categoria: "Aretes, Candongas, Piercings",
      stock: 10,
      colores: ["Dorado", "Plateado"],
      material: "Rodio",
      cuidado: "Recomendamos separar las piezas, almacenarlas en lugares secos y a temperatura ambiente; no aplicar lociones,cremas y tampoco mojarlos, ya que la durabilidad de los accesorios depende 100% del cuidado de cada persona",
      Garantia: " 30 días calendario por defectos de fabricación, no aplican cambios de color. Condiciones de envió: 1 a 2 días hábiles"
    },
    {
        id: 2,
      nombre: "Candongas Serena",
      precio: 39900,
      descripcion: "Candongas estilo entorchadas en color dorado, divinas para ocasiones especiales.",
      imagen: "Candongas_Serena.jpg",
      categoria: "Aretes, Candongas, Piercings",
      stock: 8,
      colores: ["Dorado", "Plateado"],
      material: "Rodio",
      cuidado: "Recomendamos separar las piezas, almacenarlas en lugares secos y a temperatura ambiente; no aplicar lociones,cremas y tampoco mojarlos, ya que la durabilidad de los accesorios depende 100% del cuidado de cada persona",
      Garantia: " 30 días calendario por defectos de fabricación, no aplican cambios de color. Condiciones de envió: 1 a 2 días hábiles"
      
    },
    {
        id: 3,
      nombre: "Candongas Mirabella Gold",
      precio: 39900,
      descripcion: "Candongas asimétricas en color dorado, divinos para ocasiones especiales.",
      imagen: "Candongas_Mirabella_Gold.jpg",
      categoria: "Aretes, Candongas, Piercings",
      stock: 5,
      colores: ["Dorado"],
      material: "Rodio",
      cuidado: "Recomendamos separar las piezas, almacenarlas en lugares secos y a temperatura ambiente; no aplicar lociones,cremas y tampoco mojarlos, ya que la durabilidad de los accesorios depende 100% del cuidado de cada persona",
      Garantia: " 30 días calendario por defectos de fabricación, no aplican cambios de color. Condiciones de envió: 1 a 2 días hábiles"
      
    },
    {
        id: 4,
      nombre: "Candongas Protectora Mini-Silver",
      precio: 59900,
      descripcion: "Candongas mini con dije de ojito colgante este se puede remover para usarlas de 2 formas, divinas para ocasiones especiales.",
      imagen: "Candongas_Protectora_Mini_Silver.jpg",
      categoria: "Aretes, Candongas, Piercings",
      stock: 11,
      colores: ["Plateado"],
      material: "Rodio",
      cuidado: "Recomendamos separar las piezas, almacenarlas en lugares secos y a temperatura ambiente; no aplicar lociones,cremas y tampoco mojarlos, ya que la durabilidad de los accesorios depende 100% del cuidado de cada persona",
      Garantia: " 30 días calendario por defectos de fabricación, no aplican cambios de color. Condiciones de envió: 1 a 2 días hábiles"
      
    },
    {
        id: 5,
      nombre: "Set Cadenas Super Woman",
      precio: 59900,
      descripcion: "Dúo de cadenas con dijes de ojito y cerradura, divinas y versátiles para cualquier ocasión.",
      imagen: "Set_Cadenas_Super_Woman.jpg",
      categoria: "Cadenas,Chokers,Muse Collection,Sets",
      stock: 4,
      colores: ["Dorado", "Plateado"],
      material: "Aleación con baño en Oro 24k (El acabado es vintage, algunos tienen textura)",
      cuidado: "Recomendamos separar las piezas, almacenarlas en lugares secos y a temperatura ambiente; no aplicar lociones,cremas y tampoco mojarlos, ya que la durabilidad de los accesorios depende 100% del cuidado de cada persona",
      Garantia: " 30 días calendario por defectos de fabricación, no aplican cambios de color. Condiciones de envió: 1 a 2 días hábiles"
      
    },
    {
        id: 6,
      nombre: "Cadena Muse Silver",
      precio: 99900,
      descripcion: "Cadena de eslabores con dijes en color Plateado, divino para ocasiones especiales.",
      imagen: "Canena_Muse_Silver.jpg",
      categoria: "Cadenas, Chokers, Collection",
      stock: 7,
      colores: ["Plateado"],
      material: "Aleación con baño en Plata (El acabado es vintage, algunos tienen textura)",
      cuidado: "Recomendamos separar las piezas, almacenarlas en lugares secos y a temperatura ambiente; no aplicar lociones,cremas y tampoco mojarlos, ya que la durabilidad de los accesorios depende 100% del cuidado de cada persona",
      Garantia: " 30 días calendario por defectos de fabricación, no aplican cambios de color. Condiciones de envió: 1 a 2 días hábiles"
      
    },
    {
        id: 7,
      nombre: "Choker Irina Silver",
      precio: 39900,
      descripcion: "Choker plateado elegante y divino para ocasiones especiales. Especial para hacer layering con otras cadenas.",
      imagen: "Choker_Irina_Silver.jpg",
      categoria: "Cadenas, Chokers",
      stock: 5,
      colores: ["Plateado"],
      material: "Aleación con baño en Plata  (El acabado es vintage, algunos tienen textura)",
      cuidado: "Recomendamos separar las piezas, almacenarlas en lugares secos y a temperatura ambiente; no aplicar lociones,cremas y tampoco mojarlos, ya que la durabilidad de los accesorios depende 100% del cuidado de cada persona",
      Garantia: " 30 días calendario por defectos de fabricación, no aplican cambios de color. Condiciones de envió: 1 a 2 días hábiles"
      
    },
    {
        id: 8,
      nombre: "Cadena Nicoletta",
      precio: 35000,
      descripcion: "Cadena de balines en color dorado, divino para ocasiones especiales.Especial para hacer layering con otras cadenas.",
      imagen: "Cadena_Nicoletta.jpg",
      categoria: "Cadenas",
      stock: 6,
      colores: ["Dorado", "Plateado"],
      material: "Rodio",
      cuidado: "Recomendamos separar las piezas, almacenarlas en lugares secos y a temperatura ambiente; no aplicar lociones,cremas y tampoco mojarlos, ya que la durabilidad de los accesorios depende 100% del cuidado de cada persona",
      Garantia: " 30 días calendario por defectos de fabricación, no aplican cambios de color. Condiciones de envió: 1 a 2 días hábiles"
      
    },
    {
        id: 9,
      nombre: "Set Cadenas Priscilla",
      precio: 49900,
      descripcion: "Set cadena de balines en dorado + Topitos balines mini, divina para ocasiones especiales.",
      imagen: "Set-Cadenas-Priscilla.jpg",
      categoria: "Cadenas,Chokers,Sets",
      stock: 10,
      colores: ["Dorado", "Plateado"],
      material: "Rodio",
      cuidado: "Recomendamos separar las piezas, almacenarlas en lugares secos y a temperatura ambiente; no aplicar lociones,cremas y tampoco mojarlos, ya que la durabilidad de los accesorios depende 100% del cuidado de cada persona",
      Garantia: " 30 días calendario por defectos de fabricación, no aplican cambios de color. Condiciones de envió: 1 a 2 días hábiles"
      
    },
    {
        id: 10,
      nombre: "Choker Aria Gold",
      precio: 39900,
      descripcion: "Choker dorado de eslabones, divino para ocasiones especiales.Especial para hacer layering con otras cadenas.",
      imagen: "Choker_Aria_Gold.jpg",
      categoria: "Cadenas, Chokers",
      stock: 8,
      colores: ["Dorado"],
      material: "Aleación con baño en Oro 24k (El acabado es vintage, algunos tienen textura)",
      cuidado: "Recomendamos separar las piezas, almacenarlas en lugares secos y a temperatura ambiente; no aplicar lociones,cremas y tampoco mojarlos, ya que la durabilidad de los accesorios depende 100% del cuidado de cada persona",
      Garantia: " 30 días calendario por defectos de fabricación, no aplican cambios de color. Condiciones de envió: 1 a 2 días hábiles"
      
    },
    {
        id: 11,
      nombre: "Earcuff Magia Silver",
      precio: 29900,
      descripcion: "Earcuff estilo entorchado texturizado en color plateado, divinos para ocasiones especiales.",
      imagen: "Earcuff_Magia_Silver.jpg",
      categoria: "Aretes, Earcuffs, Muse Colletion",
      stock: 6,
      colores: ["Plateado"],
      material: "Aleación con baño en Plata (El acabado es vintage, algunos tienen textura",
      cuidado: "Recomendamos separar las piezas, almacenarlas en lugares secos y a temperatura ambiente; no aplicar lociones,cremas y tampoco mojarlos, ya que la durabilidad de los accesorios depende 100% del cuidado de cada persona",
      Garantia: " 30 días calendario por defectos de fabricación, no aplican cambios de color. Condiciones de envió: 1 a 2 días hábiles"
      
    },
    {
        id: 12,
      nombre: "Candogas Maxi Cora Gold",
      precio: 49900,
      descripcion: "Candongas Chunky con detalles de corazónes, ideales para armar tu EARPARTY soñado.",
      imagen: "Candongas_Maxi_Cora_Gold.jpg",
      categoria: "Aretes, Candongas, Piercings",
      stock: 7,
      colores: ["Dorado"],
      material: "Aleación con baño en Oro 24k",
      cuidado: "Recomendamos separar las piezas, almacenarlas en lugares secos y a temperatura ambiente; no aplicar lociones,cremas y tampoco mojarlos, ya que la durabilidad de los accesorios depende 100% del cuidado de cada persona",
      Garantia: " 30 días calendario por defectos de fabricación, no aplican cambios de color. Condiciones de envió: 1 a 2 días hábiles"
      
    },
    {
        id: 13,
      nombre: "Aretes Curiosa Silver",
      precio: 39900,
      descripcion: "Aretes en forma de cerradura con acabado texturizado, divinos para ocasiones especiales.",
      imagen: "Aretes_Curiosa_Silver.jpg",
      categoria: "Aretes, Candongas, Piercings",
      stock: 9,
      colores: ["Plateado"],
      material: "Aleación con baño en Plata (El acabado es vintage, algunos tienen textura)",
      cuidado: "Recomendamos separar las piezas, almacenarlas en lugares secos y a temperatura ambiente; no aplicar lociones,cremas y tampoco mojarlos, ya que la durabilidad de los accesorios depende 100% del cuidado de cada persona",
      Garantia: " 30 días calendario por defectos de fabricación, no aplican cambios de color. Condiciones de envió: 1 a 2 días hábiles"
      
    },
    {
        id: 14,
      nombre: "Candongas Caterina",
      precio: 39900,
      descripcion: "Candongas chunky doradas, son livianas y divinas para ocasiones especiales.",
      imagen: "Candongas_Caterina.jpg",
      categoria: "Aretes, Candongas, Piercings",
      stock: 11,
      colores: ["Dorado", "Plateado"],
      material: "Rodio",
      cuidado: "Recomendamos separar las piezas, almacenarlas en lugares secos y a temperatura ambiente; no aplicar lociones,cremas y tampoco mojarlos, ya que la durabilidad de los accesorios depende 100% del cuidado de cada persona",
      Garantia: " 30 días calendario por defectos de fabricación, no aplican cambios de color. Condiciones de envió: 1 a 2 días hábiles"
      
    },
    {
        id: 15,
      nombre: "Choker Veronica Silver",
      precio: 39900,
      descripcion: "Choker de eslabones plateado elegante y divino para ocasiones especiales.",
      imagen: "Choker_Veronica_Silver.jpg",
      categoria: "Cadenas, Chokers",
      stock: 3,
      colores: ["Plateado"],
      material: "Aleación con baño en Plata  (El acabado es vintage, algunos tienen textura)",
      cuidado: "Recomendamos separar las piezas, almacenarlas en lugares secos y a temperatura ambiente; no aplicar lociones,cremas y tampoco mojarlos, ya que la durabilidad de los accesorios depende 100% del cuidado de cada persona",
      Garantia: " 30 días calendario por defectos de fabricación, no aplican cambios de color. Condiciones de envió: 1 a 2 días hábiles"
      
    },
    {
        id: 16,
      nombre: "Pulsera Poderosa Silver",
      precio: 34900,
      descripcion: "Pulsera de eslabores medianos con broche plateado, divino para ocasiones especiales.",
      imagen: "Pulsera_Poderosa_Silver.jpg",
      categoria: "Muse Collection, Pulseras",
      stock: 6,
      colores: ["Plateado"],
      material: "Aleación con baño en Plata (El acabado es vintage, algunos tienen textura)",
      cuidado: "Recomendamos separar las piezas, almacenarlas en lugares secos y a temperatura ambiente; no aplicar lociones,cremas y tampoco mojarlos, ya que la durabilidad de los accesorios depende 100% del cuidado de cada persona",
      Garantia: " 30 días calendario por defectos de fabricación, no aplican cambios de color. Condiciones de envió: 1 a 2 días hábiles"
      
    }
  ];
  
  console.log(productos);