const db = require('../data/database');

class Category {

  id;

  name;

  image;

  color;

  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.image = obj.image;
    this.color = obj.color;
  }
}
const dataCategory = {
  addCategory: async (body) => {
    const sql = 'INSERT INTO skill(name, image, color) VALUES ($1, $2, $3) RETURNING *';
    const { name, image, color } = body;
    const result = await db.db.prepare(sql).run({1:name, 2:image, 3:color});
    return result; 
  },
  lastId: async () => {
    const sql ='SELECT MAX(id) FROM skill';
    const result = await db.db.prepare(sql).get();
    const id = result.rows[0];
    return id;
  },
  getCategory: async () => {
    const sql ='SELECT * FROM skill';
    const result = await db.db.prepare(sql).all(); 
    return result; 
    },
  getOneCategory: async (id) => {
    const sql ='SELECT * FROM skill WHERE id=?';
    const result = await db.db.prepare(sql).get(id); 
    return result; 
    },    
  deleteCategory: async (id) => {
    const sql = 'DELETE FROM skill WHERE id=?';
    const result = await db.db.prepare(sql).run(id);
    return result;
  },
  updateCategory: async (body, id) => {
    const sql = 'UPDATE skill SET name=$1, image=$2, color=$3 WHERE id=$4';
    const { name, image, color } = body;
    const result = await db.db.prepare(sql).run({1:name, 2:image, 3:color, 4:id});
    return result;
  }
};

module.exports = {
  dataCategory,
  }