let products = [
  {
    id: 'rec43w3ipXvP28vog',
    title: 'high-back bench',
    company: 'ikea',
    image:
      'https://course-api.com/images/store/product-1.jpeg',
    price: 9.99,
  },
  {
    id: 'rec4f2RIftFCb7aHh',
    title: 'albany table',
    company: 'marcos',
    image:
      'https://course-api.com/images/store/product-2.jpeg',
    price: 79.99,
  },
  {
    id: 'rec8kkCmSiMkbkiko',
    title: 'accent chair',
    company: 'caressa',
    image:
      'https://course-api.com/images/store/product-3.jpeg',
    price: 25.99,
  },
  {
    id: 'recBohCqQsot4Q4II',
    title: 'wooden table',
    company: 'caressa',
    image:
      'https://course-api.com/images/store/product-4.jpeg',
    price: 45.99,
  },
  {
    id: 'recDG1JRZnbpRHpoy',
    title: 'dining table',
    company: 'caressa',
    image:
      'https://course-api.com/images/store/product-5.jpeg',
    price: 6.99,
  },
  {
    id: 'recNWGyP7kjFhSqw3',
    title: 'sofa set',
    company: 'liddy',
    image:
      'https://course-api.com/images/store/product-6.jpeg',
    price: 69.99,
  },
  {
    id: 'recZEougL5bbY4AEx',
    title: 'modern bookshelf',
    company: 'marcos',
    image:
      'https://course-api.com/images/store/product-7.jpeg',
    price: 8.99,
  },
  {
    id: 'recjMK1jgTb2ld7sv',
    title: 'emperor bed',
    company: 'liddy',
    image:
      'https://course-api.com/images/store/product-8.jpeg',
    price: 21.99,
  },
  {
    id: 'recmg2a1ctaEJNZhu',
    title: 'utopia sofa',
    company: 'marcos',
    image:
      'https://course-api.com/images/store/product-9.jpeg',
    price: 39.95,
  },
  {
    id: 'recvKMNR3YFw0bEt3',
    title: 'entertainment center',
    company: 'liddy',
    image:
      'https://course-api.com/images/store/product-10.jpeg',
    price: 29.98,
  },
  {
    id: 'recxaXFy5IW539sgM',
    title: 'albany sectional',
    company: 'ikea',
    image:
      'https://course-api.com/images/store/product-11.jpeg',
    price: 10.99,
  },
  {
    id: 'recyqtRglGNGtO4Q5',
    title: 'leather sofa',
    company: 'liddy',
    image:
      'https://course-api.com/images/store/product-12.jpeg',
    price: 9.99,
  },
]


const form = document.querySelector('.form-search')
const inputSearch = document.querySelector('.input-search')
const containerDOM = document.querySelector('.products')
const companiesDOM = document.querySelector('.companies')

const displayproducts = () => {
  if (products.length === 0) {
    containerDOM.innerHTML = `<h3 class="error">Sorry, No product matched yout search!</h3>`
    return 
  }
  const ProductsContainer = products
    .map(product => {
    const { id, image, title, price } = product
    return `
    <article class="product" data-id="${id}">
      <img src="${image} " class="product-img" alt="${title}" />
      <p class="product-name">${title} </p>
      <p class="product-price">$${price} </p>
    </article>
    `;
  })
    .join('')
  containerDOM.innerHTML = ProductsContainer
}
displayproducts()

form.addEventListener('keyup', () => {
  const value = inputSearch.value
  products = products.filter(product => {
    return product.title.toLowerCase().includes(value)
  })
  displayproducts()
})

const displayCompanies = () => {
  const buttons = [
    "all",
    ...new Set(products.map(product => product.company))
  ]
  companiesDOM.innerHTML = buttons
    .map(company => {
      return `<button class="btn" data-id="${company}">${company}</button>`
    }).join('')
}
displayCompanies()

companiesDOM.addEventListener('click', (e) => {
  const element = e.target
  if (element.classList.contains('btn')) {
    if (element.dataset.id === "all") {
      products = [...products]
    } else {
      products = products.filter(product => {
        return product.company === element.dataset.id
      })
    }
    inputSearch.value = '';
    displayproducts()
  }
})
