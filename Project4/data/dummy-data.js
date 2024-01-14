import Category from "../models/category";
import Product from "../models/product";

export const CATEGORIES = [
  new Category(
    1,
    "Electronics",
    "Electronic gadgets and devices",
    "https://imgs.search.brave.com/5Gri0Jb7NRBLg2mQ2P5M_2hBTtELtg0-bV_i5Cp3NTk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9ob21lLWFwcGxp/YW5jZXMtZ2FzLWNv/b2tlci10di1jaW5l/bWEtcmVmcmlnZXJh/dG9yLWFpci1jb25k/aXRpb25lci1taWNy/b3dhdmUtbGFwdG9w/LXdhc2hpbmctbWFj/aGluZV8yNTIwMjUt/NjkzLmpwZz9zaXpl/PTYyNiZleHQ9anBn"
  ),
  new Category(
    2,
    "Clothing",
    "Fashionable clothing for all ages",
    "https://cdn.shopify.com/s/files/1/0070/7032/files/image6_47d9edac-208b-47c9-8bd8-a1c02d247b0e_600x600.jpg?v=1620670412"
  ),
  new Category(
    3,
    "Home & Kitchen",
    "Home appliances and kitchen essentials",
    "https://i.pinimg.com/originals/de/a1/2a/dea12a02bd8394f20f2abb251161ecef.jpg"
  ),
  new Category(
    4,
    "Electronics Accessories",
    "Accessories for electronic devices",
    "https://t4.ftcdn.net/jpg/02/04/58/95/360_F_204589541_x9nVGj6sjChkSmYbJMhUkQkN7bhDVXVJ.jpg"
  ),
  new Category(
    5,
    "Men's Clothing",
    "Clothing for men",
    "https://img.freepik.com/free-photo/portrait-handsome-young-model-man-dressed-jeans-clothes-posing-near-white-textured-wall_158538-7028.jpg?size=626&ext=jpg"
  ),
  new Category(
    6,
    "Women's Clothing",
    "Clothing for women",
    "https://img.freepik.com/free-photo/attractive-stylish-smiling-woman-choosing-apparel-clothing-store_285396-4642.jpg?size=626&ext=jpg"
  ),
  new Category(
    7,
    "Mobile Phones",
    "Smartphones and mobile devices",
    "https://www.stuff.tv/wp-content/uploads/sites/2/2022/06/Best-Mid-Range-Phones-lead.jpg?w=1080"
  ),
];

export const PRODUCT = [
  new Product(
    1,
    "High-Performance Laptop",
    '15.6" display, Intel Core i7, 16GB RAM, 512GB SSD',
    "1100",
    1,
    "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA="
  ),
  new Product(
    2,
    "Smartphone",
    '5.5" OLED display, 128GB storage, dual-camera setup, Snapdragon 855',
    "700",
    6,
    "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA="
  ),
  new Product(
    3,
    "Running Shoes",
    "Comfortable running shoes with breathable mesh, suitable for long-distance running",
    "80",
    2,
    "https://images.unsplash.com/photo-1585944672394-4c58a015c1fb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJ1bm5pbmclMjBzaG9lc3xlbnwwfHwwfHx8MA=="
  ),
  new Product(
    4,
    "HD Smart TV",
    '55" 4K UHD Smart TV with HDR, built-in streaming apps',
    "900",
    1,
    "https://shs-media.storage.googleapis.com/wp-content/uploads/2023/04/17154135/IMG_8749-1024x541.jpg"
  ),
  new Product(
    5,
    "Coffee Maker",
    "Programmable coffee maker with built-in grinder, 12-cup capacity",
    "130",
    3,
    "https://img.freepik.com/premium-photo/coffee-maker_152290-1.jpg?size=626&ext=jpg"
  ),
  new Product(
    6,
    "Wireless Headphones",
    "Over-ear wireless headphones with noise cancellation",
    "150",
    4,
    "https://static.independent.co.uk/2021/06/21/15/Bose%20NC%20700%20Headphones.jpeg"
  ),
  new Product(
    7,
    "Men's Casual Shirt",
    "Cotton casual shirt for men, available in various colors and sizes",
    "40",
    5,
    "https://img.freepik.com/free-photo/business-casual-shirt-white-closeup-outdoor-photoshoot_53876-119744.jpg?size=626&ext=jpg"
  ),
  new Product(
    8,
    "Women's Floral Dress",
    "Elegant floral dress for women, perfect for special occasions",
    "60",
    6,
    "https://images.unsplash.com/photo-1550639525-c97d455acf70?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHJlc3N8ZW58MHx8MHx8fDA="
  ),
  new Product(
    9,
    "Mobile Phone",
    "Latest mobile phone with advanced features and high-resolution camera",
    "800",
    7,
    "https://m.media-amazon.com/images/I/51NPFoz5cOS.jpg"
  ),
];
