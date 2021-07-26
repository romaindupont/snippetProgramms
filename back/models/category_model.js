const db = require('./data/database');

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
  addCategory: async (id, body) => {
    const sql = 'INSERT INTO category(id, nom, image, color) VALUES ($1, $2, $3, $4) RETURNING *';
    const { nom, image, color } = body;
    const result = await db.run(sql, [ id, nom, image, color ]);
    const categoryAdd = new Category(result.rows[0]);
    return categoryAdd;
  },
  lastId: async () => {
    const sql ='SELECT MAX(id) FROM category';
    const result = await db.run(sql);
    const id = result.rows[0];
    return id;
  },
  getCategory: async (body) => {
    const sql ='SELECT * FROM category';
    const result = await db.run(sql);
    return result.rows[0];
  },
  deleteCategory: async (id) => {
    const sql = 'DELETE FROM category WHERE id=$1';
    const result = await db.run(sql, [ id ]);
    return result.rows[0];
  },
  updateCategory: async (body, id) => {
    const sql = 'UPDATE category SET nom=$1, image=$2, color=$3 WHERE id=$4';
    const { nom, image, color } = body;
    const result = await db.run(sql, [ nom, image, color, id ]);
    return result.rows;
  }
};

module.exports = {
  dataCategory,
  }