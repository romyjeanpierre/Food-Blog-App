require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');
const createApi = require('unsplash-js').createApi;

const unsplash = new createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
})

const fetchImageFromUnsplash = async (query) => {
  return await unsplash.search.getPhotos({
    query: query,
    page: 1,
    perPage: 10,
    orderBy: 'relevant'
  })
  .then(result => {
    if (result.errors) {

      console.log('error occured: ', result.errors[0]);

    } else {

      const feed = result.response;

      const { results } = feed;
      const photo = results[0];
      const photoUrl = photo.urls.regular;
      console.log('photo: ', photo);
      return photoUrl;

    }
  })
  .catch(err => {

    console.log('error occured: ', err);

  });
}

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Produce', sortOrder:10},
    {name: 'Frozen', sortOrder: 20},
    {name: 'Meat', sortOrder:30},
    {name: 'Snacks & Candy', sortOrder: 40},
    {name: 'Deli', sortOrder: 50},
    {name: 'Dairy', sortOrder: 60},
    {name: 'Seafood', sortOrder: 70},
    {name: 'Bakery', sortOrder: 80},
    {name: 'Beverages', sortOrder: 90},
    {name: 'Hot Food', sortOrder: 100},
  ]);

  const categoryItems = [
    {
      category: categories[0],
      items: [
        { name: "Guava", price: 1.95 },
        { name: 'Bananas', price: 0.89 },
        { name: 'Apples', price: 1.29 },
        { name: 'Spinach', price: 1.49 },
      ],
    },
    {
      category: categories[1],
      items: [
        { name: 'Frozen Pizza', price: 5.99 },
        { name: 'Ice Cream', price: 4.49 },
        { name: 'Frozen Vegetables', price: 1.99 },
      ],
    },
    {
      category: categories[2],
      items: [
        { name: 'Chicken Breast', price: 6.99 },
        { name: 'Ground Beef', price: 4.99 },
        { name: 'Pork Chops', price: 7.99 },
      ]
    },
    {
      category: categories[3],
      items: [
        { name: 'Potato Chips', price: 2.99 },
        { name: 'Chocolate Bar', price: 1.49 },
        { name: 'Pretzels', price: 2.49 },
      ]
    },
    {
      category: categories[4],
      items: [
        { name: 'Turkey Sandwich', price: 6.99 },
        { name: 'Cheese Platter', price: 12.99 },
        { name: 'Sushi', price: 9.99 },
      ]
    },
    {
      category: categories[5],
      items: [
        { name: 'Milk', price: 2.99 },
        { name: 'Cheese', price: 3.49 },
        { name: 'Yogurt', price: 1.49 },
      ]
    },
    {
      category: categories[6],
      items: [
        { name: 'Salmon', price: 9.99 },
        { name: 'Shrimp', price: 12.99 },
        { name: 'Tilapia', price: 7.99 },
      ]
    },
    {
      category: categories[7],
      items: [
        { name: 'Croissant', price: 1.49 },
        { name: 'Baguette', price: 2.99 },
        { name: 'Donuts', price: 3.99 },
      ]
    },
    {
      category: categories[8],
      items: [
        { name: 'Soda', price: 1.99 },
        { name: 'Coffee', price: 2.99 },
        { name: 'Water Bottle', price: 0.99 },
      ]
    },
    {
      category: categories[9],
      items: [
        { name: 'Fried Chicken', price: 9.99 },
        { name: 'Spaghetti', price: 8.99 },
        { name: 'Jollof Rice', price: 10.99 },
      ]
    }
  ];

  const allItems = [];

  for (const { category, items } of categoryItems) {
    const itemWithImages = await Promise.all(
      items.map(async (item) => {
        const imageUrl = await fetchImageFromUnsplash(item.name);
        console.log('imageUrl: ', imageUrl)
        return { ...item, image: imageUrl, category: category };
      })
    );
    allItems.push(...itemWithImages);
  }

  await Item.deleteMany({});
  const createdItems = await Item.create(allItems);

  console.log(createdItems);

  process.exit();

})();