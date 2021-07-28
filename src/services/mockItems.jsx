const arrayItemList = [
  {
    id: 1,
    name: 'Andes Origen',
    description: 'Cerveza Andes Origen Rubia Lata 473ml',
    price: 66,
    image:
      'https://cdn.shopify.com/s/files/1/0254/2947/5433/products/cerveza-andes-origen-rubia-473-siempreencasa_95x95@2x.png?v=1623696338?nocache=0.21038466823357793',
    category: 'cerveza',
  },
  {
    id: 2,
    name: 'Andes Origen',
    description: 'Cerveza andes Origen IPA Lata 473ml',
    price: 75,
    image:
      'https://cdn.shopify.com/s/files/1/0254/2947/5433/products/cerveza-andes-origen-ipa-473-siempreencasa_95x95@2x.png?v=1623696261?nocache=0.974626447085172',
    category: 'cerveza',
  },
  {
    id: 3,
    name: 'Andes Origen',
    description: 'Cerveza andes Origen Roja Lata 473ml',
    price: 75,
    image:
      'https://cdn.shopify.com/s/files/1/0254/2947/5433/products/cerveza-andes-origen-roja-473-siempreencasa_95x95@2x.png?v=1623696322?nocache=0.5936333367770301',
    category: 'cerveza',
  },
  {
    id: 4,
    name: 'Patagonia',
    description: 'Cerveza Patagonia Hoppy Lagger Lata 473ml',
    price: 75,
    image:
      'https://cdn.shopify.com/s/files/1/0254/2947/5433/products/cerveza-patagonia-hoppy-lager-269-siempreencasa_cf0f3cf2-952e-442c-80f3-b2e64a559a06_95x95@2x.png?v=1623695851?nocache=0.24039872392203843',
    category: 'cerveza',
  },
  {
    id: 5,
    name: 'Brahma',
    description: 'Cerveza Brahma clasica Lata 473ml',
    price: 75,
    image:
      'https://cdn.shopify.com/s/files/1/0254/2947/5433/products/cerveza-brahma-chopp-473-siempreencasa_95x95@2x.png?v=1623696204?nocache=0.873565646639376',
    category: 'cerveza',
  },
  {
    id: 6,
    name: 'Patagonia',
    description: 'Cerveza Patagonia Amber Lager Lata 473ml',
    price: 75,
    image:
      'https://cdn.shopify.com/s/files/1/0254/2947/5433/products/cerveza-patagonia-amber-lager-473-siempreencasa_95x95@2x.png?v=1623695765?nocache=0.5394412279639118',
    category: 'cerveza',
  },
  {
    id: 7,
    name: 'Corona',
    description: 'Cerveza Corona clasica botella 710ml',
    price: 75,
    image:
      'https://cdn.shopify.com/s/files/1/0254/2947/5433/products/cerveza-corona-330-siempreencasa_95x95@2x.png?v=1623696041?nocache=0.8127381216822178',
    category: 'cerveza',
  },
  {
    id: 8,
    name: 'Patagonia',
    description: 'Cerveza Patagonia Weisse Lata 473ml',
    price: 75,
    image:
      'https://cdn.shopify.com/s/files/1/0254/2947/5433/products/cerveza-patagonia-weisse-473-siempreencasa_95x95@2x.png?v=1623695959?nocache=0.01071314355232289',
    category: 'cerveza',
  },
  {
    id: 9,
    name: 'Quilmes',
    description: 'Cerveza Quilmes Red Lager Lata 473ml',
    price: 75,
    image:
      'https://cdn.shopify.com/s/files/1/0254/2947/5433/products/cerveza-quilmes-red-lager-473-siempreencasa_95x95@2x.png?v=1623695676?nocache=0.8360971721896551',
    category: 'cerveza',
  },
  {
    id: 10,
    name: 'Patagonia',
    description: 'Cerveza Stella Artois Noire Lata 473ml',
    price: 75,
    image:
      'https://cdn.shopify.com/s/files/1/0254/2947/5433/products/cerveza-stella-artois-noire-473-siempreencasa_95x95@2x.png?v=1623695227?nocache=0.9807066883573607',
    category: 'cerveza',
  },
  {
    id: 11,
    name: 'Agua villavicencio',
    description: 'Agua villavicencio 1lt',
    price: 100,
    image:
      'https://cdn.shopify.com/s/files/1/0254/2947/5433/products/cerveza-stella-artois-noire-473-siempreencasa_95x95@2x.png?v=1623695227?nocache=0.9807066883573607',
    category: 'agua',
  },
]

const itemPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(arrayItemList)
  }, 1000)
})

export default itemPromise
