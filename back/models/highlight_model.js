const db = require('../data/database');

class Highlight {

  id;

  highName;

  constructor(obj) {
    this.id = obj.id;
    this.highName = obj.highName;
  }
}
const dataHighlight = {
  addHighlight: async (body) => {
    const sql = 'INSERT INTO highlight(highName) VALUES ($1) RETURNING *';
    const { highName } = body;
    const result = await db.db.prepare(sql).run({1:highName});
    return result; 
  },
  lastId: async () => {
    const sql ='SELECT MAX(id) FROM highlight';
    const result = await db.db.prepare(sql).get();
    const id = result.rows[0];
    return id;
  },
  getHighlight: async () => {
    const sql ='SELECT * FROM highlight';
    const result = await db.db.prepare(sql).all(); 
    return result; 
    },
  deleteHighlight: async (id) => {
    const sql = 'DELETE FROM highlight WHERE id=?';
    const result = await db.db.prepare(sql).run(id);
    return result;
  }
};

module.exports = {
  dataHighlight,
  }