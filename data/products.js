export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
      if (product.id === productId) {
        matchingProduct = product;
      }
  });
  
  return matchingProduct;
}

export const products = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "https://i.postimg.cc/x1BF8pH4/IMG-6852.jpg",
    name: "Black Coffee",
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 4000,
    keywords: [
      "coffee",
      "black"
    ]
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "https://i.postimg.cc/pd8cFQJX/9146b364-f002-4dc4-b71a-10da0aa12f01.jpg",
    name: "Double Shot Latte and Vanilla Cupcake",
    rating: {
      stars: 4,
      count: 127
    },
    priceCents: 10500,
    keywords: [
      "latte",
      "vanilla"
    ]
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "https://i.postimg.cc/fLfHHwPG/3ac13863-15ff-4000-8057-2cf1ccf7fa81.jpg",
    name: "Latte Love",
    rating: {
      stars: 4.5,
      count: 56
    },
    priceCents: 4500,
    keywords: [
      "coffee",
      "latte"
    ]
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "https://i.postimg.cc/1XRv2khf/8d1b9f0d-d1ba-486a-9b45-04fb384c51d5.jpg",
    name: "Citrus Kiss",
    rating: {
      stars: 5,
      count: 2197
    },
    priceCents: 8000,
    keywords: [
      "drink",
      "iced"
    ]
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "https://i.postimg.cc/8cyZSZNw/a8ec5da1-b0de-4855-aa8b-3b9f3690c72d.jpg",
    name: "Berry Tarts",
    rating: {
      stars: 4,
      count: 37
    },
    priceCents: 13000,
    keywords: [
      "strawberry",
      "sweet",
      "cake"
    ]
  },
  {
    id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    image: "https://i.postimg.cc/7LWP5kXy/5.jpg",
    name: "Tropical Red Punch",
    rating: {
      stars: 4,
      count: 160
    },
    priceCents: 5500,
    keywords: [
      "tropical",
      "punch",
      "drink"
    ]
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "https://i.postimg.cc/7Y6BVrnR/64f3995e-f50b-4084-8d67-3623084e4a93.jpg",
    name: "Cinnamon Dreams",
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 10000,
    keywords: [
      "cinnamon",
      "sweet",
      "cake"
    ]
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "https://i.postimg.cc/RZJXk18Q/3e2e3304-0223-4203-a28a-450aa310e759.jpg",
    name: "Citrus Bliss",
    rating: {
      stars: 4.5,
      count: 317
    },
    priceCents: 12000,
    keywords: [
      "citrus",
      "chilled"
    ]
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "https://i.postimg.cc/bvX3pDfX/1deb91a5-6a27-4aa4-b09c-f2ed6e271927.jpg",
    name: "Berry Chantilly Cake",
    rating: {
      stars: 4.5,
      count: 144
    },
    priceCents: 13000,
    keywords: [
      "cake",
      "fruits"
    ]
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: "https://i.postimg.cc/QtCsDyrn/9.jpg",
    name: "Fruity Cream Delight",
    rating: {
      stars: 4.5,
      count: 305
    },
    priceCents: 7500,
    keywords: [
      "cake",
      "fruit"
    ]
  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: "https://i.postimg.cc/50X0g0j0/10.jpg",
    name: "Classic Espresso",
    rating: {
      stars: 4,
      count: 89
    },
    priceCents: 4500,
    keywords: [
      "espresso"
    ]
  },
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    image: "https://i.postimg.cc/3NpwMcXQ/11.jpg",
    name: "Caffe Cuore",
    rating: {
      stars: 4.5,
      count: 235
    },
    priceCents: 5000,
    keywords: [
      "coffee",
      "espresso"
    ]
  },
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image: "https://i.postimg.cc/xjWksKvS/12.jpg",
    name: "Fruit Cake",
    rating: {
      stars: 4.5,
      count: 30
    },
    priceCents: 6000,
    keywords: [
      "cake",
      "fruit"
    ]
  },
  {
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    image: "https://i.postimg.cc/6Q3563r0/13.jpg",
    name: "Velvet Chocolate",
    rating: {
      stars: 4.5,
      count: 562
    },
    priceCents: 7500,
    keywords: [
      "chocolate",
      "velvet"
    ]
  },
  {
    id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    image: "https://i.postimg.cc/fLSzXrgS/14.jpg",
    name: "Velvet Touch Cake",
    rating: {
      stars: 4.5,
      count: 232
    },
    priceCents: 6000,
    keywords: [
      "velvet",
      "cake"
    ]
  },
  {
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    image: "https://i.postimg.cc/L5g1mz09/15.jpg",
    name: "Double Delight Iced Coffee",
    rating: {
      stars: 5,
      count: 846
    },
    priceCents: 5000,
    keywords: [
      "coffee",
      "iced",
      "chilled"
    ]
  },
  {
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    image: "https://i.postimg.cc/bNcJ0qPy/16.jpg",
    name: "Summer Brew",
    rating: {
      stars: 5,
      count: 846
    },
    priceCents: 3000,
    keywords: [
      "coffee",
      "chilled"
    ]
  },
  {
    id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
    image: "https://i.postimg.cc/LsC5jf9w/17.jpg",
    name: "Caramel Brownie Sundae",
    rating: {
      stars: 4,
      count: 99
    },
    priceCents: 12000,
    keywords: [
      "brownie",
      "sundae"
    ]
  },
  {
    id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    image: "https://i.postimg.cc/DzymW5T1/18.jpg",
    name: "Coffe Cloud",
    rating: {
      stars: 4,
      count: 215
    },
    priceCents: 8000,
    keywords: [
      "coffee",
      "cake"
    ]
  },
  {
    id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
    image: "https://i.postimg.cc/4xGYGs2L/19.jpg",
    name: "Donut Lover",
    rating: {
      stars: 4.5,
      count: 52
    },
    priceCents: 15500,
    keywords: [
      "Donut",
      "pastery"
    ]
  },
  {
    id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
    image: "https://i.postimg.cc/X7fvQtNw/20.jpg",
    name: "Crimson Burst",
    rating: {
      stars: 4.5,
      count: 2465
    },
    priceCents: 6000,
    keywords: [
      "juice",
      "cold",
      "chilled"
    ]
  },
  {
    id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    image: "https://i.postimg.cc/wj9jPF3n/21.jpg",
    name: "Berry Bliss",
    rating: {
      stars: 4.5,
      count: 119
    },
    priceCents: 7500,
    keywords: [
      "fruit",
      "berry"
    ]
  }];