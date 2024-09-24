import {  FaRuler, FaRulerVertical, FaRulerHorizontal } from 'react-icons/fa'; 
import { GiWoodBeam } from 'react-icons/gi';

export const productos = [
    {
        id: 1,
        categoria: 'Habitación',
        titulo: 'Mesa de luz con un cajón',
        descripcion: 'Mesa de luz con cajón, diseño minimalista y sin fondo. Perfecta para agregar estilo natural y funcionalidad a tu dormitorio.',
        caracteristicas: [
            { icono: <FaRulerVertical className="w-8 h-8 text-marron" />, texto: '54cm' },
            { icono: <FaRulerHorizontal className="w-8 h-8 text-marron" />, texto: '33cm' },
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '26cm' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Pino' },
        ],
        imagen: '/mesita-cajon.webp',  
    },
    {
        id: 2,
        categoria: 'Habitación',
        titulo: 'Mesa de luz con cajón escandinavo',
        descripcion: 'Mesa de luz moderna de diseño escandinavo, fabricada en madera de pino. Perfecta para espacios con estilo minimalista',
        caracteristicas: [
            { icono: <FaRulerVertical className="w-8 h-8 text-marron" />, texto: '60cm' },
            { icono: <FaRulerHorizontal className="w-8 h-8 text-marron" />, texto: '41cm' },
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '30cm' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Pino' },
        ],
        imagen: '/mesita-modelo2.webp',  
    
    },
    {
        id: 3,
        categoria: 'Habitación',
        titulo: 'Mesa de luz con puerta',
        descripcion: 'Mesa funcional de estilo escandinavo, elaborada en madera de pino, ideal para complementar cualquier dormitorio',
        caracteristicas: [
            { icono: <FaRulerVertical className="w-8 h-8 text-marron" />, texto: '57cm' },
            { icono: <FaRulerHorizontal className="w-8 h-8 text-marron" />, texto: '40cm' },
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '24cm' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Pino' },
        ],
        imagen: '/mesita-con-puerta.webp',  
    },
    {
        id: 4,
        categoria: ["Living", "Cocina"],
        titulo: 'Bodega estilo barril',
        descripcion: ' Es para almacenar 5 botelas, esta bodega es perfecta para almacenarlas de manera elegante y organizada',
        caracteristicas: [
            { icono: <FaRulerVertical className="w-8 h-8 text-marron" />, texto: '55cm' },
            { icono: <FaRulerHorizontal className="w-8 h-8 text-marron" />, texto: '36cm' },
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '22cm' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Pino' },
        ],
        imagen: '/bodega.webp',  
    },
    {
        id: 5,
        categoria: ['Living', 'Baño', 'Cocina', 'Habitación'],
        titulo: 'Ordenador con 3 canastos de plástico',
        descripcion: 'Incluye tres canastos de plástico blanco, ideal para mantener el orden y la organización en cualquier espacio',
        caracteristicas: [
            { icono: <FaRulerVertical className="w-8 h-8 text-marron" />, texto: '49cm' },
            { icono: <FaRulerHorizontal className="w-8 h-8 text-marron" />, texto: '31cm' },
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '0,79cm' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Pino' },
        ],
        imagen: '/ordenador-canastos.webp',  
    },
    {
        id: 6,
        categoria: 'Baño',
        titulo: 'Vanitori',
        descripcion: 'Vanitori con 2 estantes y 1 cajón. Diseño funcional y moderno, ideal para optimizar el espacio en tu baño.',
        caracteristicas: [
            { icono: <FaRulerVertical className="w-8 h-8 text-marron" />, texto: '83cm' },
            { icono: <FaRulerHorizontal className="w-8 h-8 text-marron" />, texto: '40cm' },
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '34cm' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Pino' },
        ],
        imagen: '/vanitori.webp',  
    },
    {
        id: 7,
        categoria: ["Cocina", "Living", "Baño"],
        titulo: 'Despensero con 2 puertas',
        descripcion: 'Despensero funcional en madera de pino, con 2 puertas, 2 estantes y 2 cajones, ideal para maximizar el almacenamiento en tu cocina.',
        caracteristicas: [
            { icono: <FaRulerVertical className="w-8 h-8 text-marron" />, texto: '172cm' },
            { icono: <FaRulerHorizontal className="w-8 h-8 text-marron" />, texto: '40cm' },
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '40cm' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Pino' },
        ],
        imagen: '/despensa.webp',  
    },
    {
        id: 8,
        categoria: ["Living", "Cocina", "Baño"],
        titulo: 'Estantería con 2 puertas',
        descripcion: 'Mueble estantería en forma de escalera, con 2 puertas en madera de pino, ideal para un almacenamiento elegante y funcional.',
        caracteristicas: [
            { icono: <FaRulerVertical className="w-8 h-8 text-marron" />, texto: '1,65cm' },
            { icono: <FaRulerHorizontal className="w-8 h-8 text-marron" />, texto: '60cm' },
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '37cm' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Pino' },
        ],
        imagen: '/estanteria.webp',  
    },
    {
        id: 9,
        categoria: ["Living", "Cocina", "Baño"],
        titulo: 'Estanteria estilo verdulero',
        descripcion: 'Estilo verdulero en madera de pino, con estantes de tablitas, ideal para exhibir frutas y verduras de manera organizada y atractiva.',
        caracteristicas: [
            { icono: <FaRulerVertical className="w-8 h-8 text-marron" />, texto: '1,20cm' },
            { icono: <FaRulerHorizontal className="w-8 h-8 text-marron" />, texto: '40cm' },
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '34cm' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Pino' },
        ],
        imagen: '/estanteria-verdulero.webp',  
    },
    {
        id: 10,
        categoria: ["Living", "Cocina", "Baño"],
        titulo: 'Estanteria con 5 estantes',
        descripcion: 'Estantería multifuncional de madera de pino, con 5 estantes de tablitas, perfecta para organizar y decorar cualquier espacio.',
        caracteristicas: [
            { icono: <FaRulerVertical className="w-8 h-8 text-marron" />, texto: '180cm' },
            { icono: <FaRulerHorizontal className="w-8 h-8 text-marron" />, texto: '40cm' },
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '40cm' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Pino' },
        ],
        imagen: '/estanteria-estantes.webp',  
    },
    {
        id: 11,
        categoria: ["Living", "Habitación"],
        titulo: 'Silla de niños',
        descripcion: 'Silla para niños en madera de pino, disponible en varios modelos, perfecta para brindar comodidad y estilo en cualquier habitación infantil.',
        caracteristicas: [
            { icono: <FaRulerVertical className="w-8 h-8 text-marron" />, texto: '30cm' },
            { icono: <FaRulerHorizontal className="w-8 h-8 text-marron" />, texto: '27cm' },
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '26cm' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Pino' },
        ],
        imagen: '/silla-niños-madera.webp',  
    },
    {
        id: 12,
        categoria: ["Living","Cocina", "Habitación"],
        titulo: 'Banco de madera',
        descripcion: 'Bancos de madera de pino en varias alturas (30, 45, 60 y 70 cm), ideales para exteriores o interiores, con patas robustas y diseño funcional.',
        caracteristicas: [
            { icono: <FaRulerVertical className="w-8 h-8 text-marron" />, texto: '57cm' },
            { icono: <FaRulerHorizontal className="w-8 h-8 text-marron" />, texto: '40cm' },
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: 'Distintos tamaños' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Pino' },
        ],
        imagen: '/banco-madera.webp',  
    },
    {
        id: 13,
        categoria: ["Living", "Habitación"],
        titulo: 'Silla para niños Tapizada',
        descripcion: 'Silla tapizada con apoya brazos, perfecta para niños y niñas, que combina comodidad y estilo en cualquier espacio infantil.',
        caracteristicas: [
            { icono: <FaRulerVertical className="w-8 h-8 text-marron" />, texto: '27cm' },
            { icono: <FaRulerHorizontal className="w-8 h-8 text-marron" />, texto: '37cm' },
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '30cm' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Pino' },
        ],
        imagen: '/silla-niños.webp',  
    },
    {
        id: 14,
        categoria: "Cocina",
        titulo: 'Banco escalera',
        descripcion: 'Banco escalera de madera de pino, disponible en alturas de 60 y 80 cm, con patas reforzadas de 2"x2" para mayor estabilidad y durabilidad.',
        caracteristicas: [
            { icono: <FaRulerVertical className="w-8 h-8 text-marron" />, texto: '80cm' },
            { icono: <FaRulerHorizontal className="w-8 h-8 text-marron" />, texto: '60cm' },
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '20 cm' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Pino' },
        ],
        imagen: '/banco-escalera.webp',  
    },
    {
        id: 15,
        categoria: 'Living',
        titulo: 'Mesa multifuncional escandinava',
        descripcion: 'Mesa multifuncional de madera de pino en estilo escandinavo, con un cajón y un espacio con fondo, ideal para cualquier ambiente.',
        caracteristicas: [
            { icono: <FaRulerVertical className="w-8 h-8 text-marron" />, texto: '55 cm' },
            { icono: <FaRulerHorizontal className="w-8 h-8 text-marron" />, texto: '60 cm' },
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '30 cm' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Pino' },
        ],
        imagen: '/mesa-multifuncion.webp',  
    },
    {
        id: 16,
        categoria: 'Living',
        titulo: 'Atriles',
        descripcion: 'Atriles de madera de pino en distintas medidas: pequeño para mesa, mediano y alto, ideales para exhibir libros o partituras.',
        caracteristicas: [
            { icono: <FaRulerVertical className="w-8 h-8 text-marron" />, texto: '57cm' },
            { icono: <FaRulerHorizontal className="w-8 h-8 text-marron" />, texto: '40cm' },
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: 'Distintas medidas' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Pino' },
        ],
        imagen: '/atriles.webp',  
    },
    {
        id: 17,
        categoria: ["Living", "Habitación"],
        titulo: 'Porta lámparas',
        descripcion: 'Porta lámpara artesanal de madera de pino, perfecto para agregar un toque cálido y natural a tu espacio.',
        caracteristicas: [
            { icono: <FaRulerVertical className="w-8 h-8 text-marron" />, texto: '30cm' },
            { icono: <FaRulerHorizontal className="w-8 h-8 text-marron" />, texto: '30cm' },
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '30cm' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Pino' },
        ],
        imagen: '/porta-lamparas.webp',  
    },
    {
        id: 18,
        categoria: ["Habitación", "Cocina"],
        titulo: 'Canasto de madera',
        descripcion: 'Canasto de madera de pino con tablitas, multifuncional y elegante, ideal para organizar y decorar cualquier espacio.',
        caracteristicas: [
            { icono: <FaRulerVertical className="w-8 h-8 text-marron" />, texto: '26cm' },
            { icono: <FaRulerHorizontal className="w-8 h-8 text-marron" />, texto: '44cm' },
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '27cm' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Pino' },
        ],
        imagen: '/canasto.webp',  
    },
    {
        id: 19,
        categoria: 'Cocina',
        titulo: 'Bandeja rústica con manijas',
        descripcion: 'Bandeja rústica en tablitas de madera de pino, con 2 manijas, perfecta para servir y decorar con un toque natural.',
        caracteristicas: [
            { icono: <FaRulerVertical className="w-8 h-8 text-marron" />, texto: '28cm' },
            { icono: <FaRulerHorizontal className="w-8 h-8 text-marron" />, texto: '40cm' },
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '2cm' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Pino' },
        ],
        imagen: '/bandeja-rustica.webp',  
    },
    {
        id: 20,
        categoria: 'Habitación',
        titulo: 'Dresuar de madera',
        descripcion: 'Dresuar de madera de pino con espejo, 2 cajones y parantes torneados, ideal para agregar estilo y funcionalidad a tu entrada.',
        caracteristicas: [
            { icono: <FaRulerVertical className="w-8 h-8 text-marron" />, texto: '61cm' },
            { icono: <FaRulerHorizontal className="w-8 h-8 text-marron" />, texto: '68cm' },
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '15cm' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Pino' },
        ],
        imagen: '/dresuar.webp',  
    },
    {
        id: 21,
        categoria: ["Living", "Habitación", "Baño", "Cocina"],
        titulo: 'Soporte para estantes',
        descripcion: 'Soportes para estantes de madera de pino, fabricados a medida según la profundidad requerida, ideales para un ajuste perfecto y seguro.',
        caracteristicas: [
            { icono: <FaRulerVertical className="w-8 h-8 text-marron" />, texto: '-cm' },
            { icono: <FaRulerHorizontal className="w-8 h-8 text-marron" />, texto: '-cm' },
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: 'A medida' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Pino' },
        ],
        imagen: '/soporte-estantes.webp',  
    },
    {
        id: 22,
        categoria: ["Living"],
        titulo: 'Mesa ratona',
        descripcion: 'Plegable y práctica, con porta botellas o termos. Ideal para reuniones, añade estilo y funcionalidad a cualquier espacio.',
        caracteristicas: [
{ icono: <FaRulerVertical className="w-8 h-8 text-marron" />, texto: '42cm' },
            { icono: <FaRulerHorizontal className="w-8 h-8 text-marron" />, texto: '69cm' },
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '45cm' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Pino' },
        ],
        imagen: '/mesa-ratona.webp',  
    },
    {
        id: 23,
        categoria: ["Cocina", "Baño"],
        titulo: 'Verdulero con canastos',
        descripcion: 'Combinación de madera de pino y plástico negro, con 3 canastos. Perfecto para organizar frutas, verduras y otros elementos en cualquier espacio.',
        caracteristicas: [
{ icono: <FaRulerVertical className="w-8 h-8 text-marron" />, texto: '120cm' },
            { icono: <FaRulerHorizontal className="w-8 h-8 text-marron" />, texto: '60cm' },
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '36cm' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Pino' },
        ],
        imagen: '/verdulero.webp',  
    },
    {
        id: 24,
        categoria: ["Living", "Cocina"],
        titulo: 'Mesita porta mate',
        descripcion: 'Ideal para jardines, camping o clubes, permite tener todo el equipo de mate al alcance de la mano.',
        caracteristicas: [
{ icono: <FaRulerVertical className="w-8 h-8 text-marron" />, texto: '36cm' },
            { icono: <FaRulerHorizontal className="w-8 h-8 text-marron" />, texto: '60cm' },
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '40cm' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Pino' },
        ],
        imagen: '/mesa-mate.webp',  
    },
    {
        id: 25,
        categoria: ["Cocina"],
        titulo: 'Pizzera',
        descripcion: 'Pizzera de madera de pino, perfecta para servir y presentar tus pizzas de manera elegante. Su diseño resistente y natural resalta el sabor de tus platillos favoritos.',
        caracteristicas: [
{ icono: <FaRulerVertical className="w-8 h-8 text-marron" />, texto: '57cm' },
            { icono: <FaRulerHorizontal className="w-8 h-8 text-marron" />, texto: '40cm' },
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '-' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Pino' },
        ],
        imagen: '/tabla-picada.webp',  
    },
    {
        id: 26,
        categoria: ["Living", "Cocina", "Baño", "Habitación"],
        titulo: 'Canasto de plástico',
        descripcion: 'Puede ser blanco o negro, con resistente armazón de madera de pino. Perfecto para organizar con estilo',
        caracteristicas: [
            { icono: <FaRulerVertical className="w-8 h-8 text-marron" />, texto: '20cm' },
            { icono: <FaRulerHorizontal className="w-8 h-8 text-marron" />, texto: '40cm' },
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '28cm' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Pino' },
        ],
        imagen: '/canasto-negro.webp',  
    },
    {
        id: 27,
        categoria: ["Habitación", "Living"],
        titulo: 'Juego de mesa y silla para niños',
        descripcion: 'Diseñado especialmente para niños, ideal para actividades creativas y momentos de juego. Perfecto para cualquier espacio.',
        caracteristicas: [
            { icono: <FaRulerVertical className="w-8 h-8 text-marron" />, texto: '57cm' },
            { icono: <FaRulerHorizontal className="w-8 h-8 text-marron" />, texto: '40cm' },
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '-' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Pino' },
        ],
        imagen: '/sillas-mesa.webp',  
    },
    {
        id: 28,
        categoria: ["Habitación"],
        titulo: 'Porta bebe',
        descripcion: 'Ideal para transportar a tu bebé con estilo y comodidad. Perfecto para paseos y juegos',
        caracteristicas: [
            { icono: <FaRulerVertical className="w-8 h-8 text-marron" />, texto: '57cm' },
            { icono: <FaRulerHorizontal className="w-8 h-8 text-marron" />, texto: '40cm' },
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '-' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Pino' },
        ],
        imagen: '/porta-bebe.webp',  
    },
    {
        id: 29,
        categoria: ["Living", "Habitación"],
        titulo: 'Divisor de ambientes',
        descripcion: 'En varillas de madera de pino, ideal para crear espacios acogedores y definidos según tus necesidades.',
        caracteristicas: [
            { icono: <FaRulerVertical className="w-8 h-8 text-marron" />, texto: '57cm' },
            { icono: <FaRulerHorizontal className="w-8 h-8 text-marron" />, texto: '40cm' },
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: 'A pedido' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Pino' },
        ],
        imagen: '/divisor.webp',  
    },
    {
        id: 30,
        categoria: ["Living", "Habitación"],
        titulo: 'Juego de Ta Te Ti',
        descripcion: 'Ideal para disfrutar en familia o con amigos. Fomenta la diversión y la estrategia en cada partida.',
        caracteristicas: [
            { icono: <FaRulerVertical className="w-8 h-8 text-marron" />, texto: '24cm' },
            { icono: <FaRulerHorizontal className="w-8 h-8 text-marron" />, texto: '24cm' },
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '0,15cm' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Pino' },
        ],
        imagen: '/jueguito.webp',  
    },
    {
        id: 31,
        categoria: ["Living", "Habitación"],
        titulo: 'Recibidor 8 percheros',
        descripcion: 'Con 8 percheros y 3 estantes para una organización práctica y estética. Perfecto para entradas y pasillos',
        caracteristicas: [
            { icono: <FaRulerVertical className="w-8 h-8 text-marron" />, texto: '182cm' },
            { icono: <FaRulerHorizontal className="w-8 h-8 text-marron" />, texto: '80cm' },
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '32cm' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Pino' },
        ],
        imagen: '/recibidor-perchero.webp',  
    },
    {
        id: 32,
        categoria: 'Cocina',
        titulo: 'Mesa quesera',
        descripcion: 'Con cuatro cajones y un estante inferior, diseñada para facilitar el almacenamiento y la presentación de quesos. Ideal para cualquier amante de la gastronomía',
        caracteristicas: [
            { icono: <FaRulerVertical className="w-8 h-8 text-marron" />, texto: '100cm' },
            { icono: <FaRulerHorizontal className="w-8 h-8 text-marron" />, texto: '40cm' },
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '80cm' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Pino' },
        ],
        imagen: '/mesa-quesera.webp',  
    },
    {
        id: 33,
        categoria: ["Living", "Habitación"],
        titulo: 'Perchero plegable',
        descripcion: 'Tiene un barral de madera y dos estantes desmontables, ideal para optimizar espacios y mantener el orden. Perfecto para cualquier habitación',
        caracteristicas: [
            { icono: <FaRulerVertical className="w-8 h-8 text-marron" />, texto: '180cm' },
            { icono: <FaRulerHorizontal className="w-8 h-8 text-marron" />, texto: '80cm' },
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '40cm' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Pino' },
        ],
        imagen: '/perchero-plegable.webp',  
    },
    {
        id: 34,
        categoria: ["Living", "Habitación"],
        titulo: 'Perchero para pared escandinavo',
        descripcion: 'Tiene 6 perchas, ideal para organizar abrigos y accesorios. Disponible en medidas personalizadas para adaptarse a tu espacio.',
        caracteristicas: [
            { icono: <FaRulerVertical className="w-8 h-8 text-marron" />, texto: '60cm' },
            { icono: <FaRulerHorizontal className="w-8 h-8 text-marron" />, texto: '40cm' },
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '10cm' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Pino' },
        ],
        imagen: '/perchero-pared.webp',  
    },
    {
        id: 35,
        categoria: ["Living", "Habitación"],
        titulo: 'Baules',
        descripcion: 'Puede ser en varias medidas, perfecto para almacenar y organizar tus pertenencias. Diseñado para combinar funcionalidad y estilo en cualquier espacio',
        caracteristicas: [
            { icono: <FaRulerVertical className="w-8 h-8 text-marron" />, texto: '57cm' },
            { icono: <FaRulerHorizontal className="w-8 h-8 text-marron" />, texto: '40cm' },
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: 'Distintas medidas' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Pino' },
        ],
        imagen: '/baul.webp',  
    },    
];