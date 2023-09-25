const Item = require('../../models/item');

module.exports = {
  index,
  show,
  create,
};

async function index(req, res) {
  try {
    const items = await Item.find({}).sort('name').populate('category').exec();
    // re-sort based upon the sortOrder of the categories
    items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    res.status(200).json(items);
  } catch(e) {
    res.status(400).json({ msg: e.message });
  }
}

async function show(req, res) {
  try{
    const item = await Item.findById(req.params.id);
    res.status(200).json(item);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}

//create a new grocery item
async function create(req, res) {
  console.log(req.body); 
  try{
    const groceryItem = await Item.create(req.body); 
    res.json(groceryItem); 
  } catch (err) {
    console.log(err);
    res.status(400).json(err)
  }
}