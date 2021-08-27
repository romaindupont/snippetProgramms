const db = require('../data/database');

class Category {

  id;

  name;

  image;

  color;

  highlight_id;

  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.image = obj.image;
    this.color = obj.color;
    this.highlight_id = obj.highlight_id;
  }
}
const dataCategory = {
  addCategory: async (body) => {
    const sql = 'INSERT INTO skill(name, image, color, highlight_id) VALUES ($1, $2, $3, $4) RETURNING *';
    const { name, image, color, highlight_id } = body;
    const result = await db.db.prepare(sql).run({1:name, 2:image, 3:color, 4:highlight_id});
    return result; 
  },
  lastId: async () => {
    const sql ='SELECT MAX(id) FROM skill';
    const result = await db.db.prepare(sql).get();
    const id = result.rows[0];
    return id;
  },
  getCategory: async () => {
    const sql ='SELECT skill.id as id, skill.color, skill.highlight_id, skill.image, skill.name, highlight.id as idHighlight, highlight.highName FROM skill INNER JOIN highlight WHERE skill.highlight_id = highlight.id';
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
    const sql = 'UPDATE skill SET name=$1, image=$2, color=$3, highlight_id=$4 WHERE id=$5';
    const { name, image, color, highlight_id } = body;
    const result = await db.db.prepare(sql).run({1:name, 2:image, 3:color, 4:highlight_id, 5:id});
    return result;
  }
};

module.exports = {
  dataCategory,
}