let body = document.getElementById("body");




let colors = [
  'red',
  'blue',
  'green',
  'pink',
  'orange',
  'purple',
  'yellow',
  'brown',
  'cyan',
  'lime',
  'magenta',
  'gold',
  'silver',
  'teal',
  'maroon',
  'navy',
  'olive',
  'coral',
  'crimson',
  'orchid',

  // Hex codes for custom shades
  '#FF5733', // Orange-red
  '#33FF57', // Neon green
  '#3357FF', // Bright blue
  '#FF33A6', // Hot pink
  '#00FFFF', // Cyan
  '#FFD700', // Gold
  '#800080', // Purple
  '#2E8B57', // Sea green
  '#FA8072', // Salmon
  '#A52A2A', // Brown
  '#4B0082', // Indigo
  '#1ABC9C', // Turquoise
  '#34495E', // Wet asphalt
  '#F39C12', // Orange-ish yellow
  '#9B59B6', // Amethyst
  '#E74C3C', // Soft red
  '#2980B9', // Ocean blue
  '#2ECC71', // Emerald
  '#F1C40F', // Sunflower
  '#7D3C98', // Deep violet
  '#E67E22', // Carrot
  '#95A5A6'  // Concrete gray
];

function changeBG(){
let color = colors[Math.floor(Math.random() * colors.length)]
body.style.backgroundColor = color
}