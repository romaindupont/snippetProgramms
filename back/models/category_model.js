const db = require('../data/database');

class Category {

  id;

  nom;

  image;

  color;

  constructor(obj) {
    this.id = obj.id;
    this.nom = obj.nom;
    this.image = obj.image;
    this.color = obj.color;
  }
}
const dataCategory = {
  addCategory: async (body) => {
    const sql = 'INSERT INTO skill(nom, image, color) VALUES ($1, $2, $3) RETURNING *';
    const { nom, image, color } = body;
    const result = await db.db.prepare(sql).run({1:nom, 2:image, 3:color});
    return result; 
  },
  lastId: async () => {
    const sql ='SELECT MAX(id) FROM skill';
    const result = await db.db.prepare(sql).get();
    const id = result.rows[0];
    console.log(id)
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
    const sql = 'UPDATE skill SET nom=$1, image=$2, color=$3 WHERE id=$4';
    const { nom, image, color } = body;
    const result = await db.db.prepare(sql).run({1:nom, 2:image, 3:color, 4:id});
    return result;
  }
};

module.exports = {
  dataCategory,
  }