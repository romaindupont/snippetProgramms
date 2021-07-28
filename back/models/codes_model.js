const db = require('../data/database');

class Codes {

  id;

  titre;

  description;

  code;

  skill_id;

  constructor(obj) {
    this.id = obj.id;
    this.titre = obj.titre;
    this.description = obj.description;
    this.code = obj.code;
    this.skill_id = obj.skill_id;
  }
}
const dataCodes = {
  addCodes: async (body) => {
    const sql = 'INSERT INTO codes(titre, description, code, skill_id) VALUES ($1, $2, $3, $4) RETURNING *';
    const { titre, description, code, skill_id } = body;
    const result = await db.db.prepare(sql).run({1:titre, 2:description, 3:code, 4:skill_id});
    return result; 
  },
  getCodes: async () => {
    const sql =`SELECT codes.id, codes.titre, codes.description, codes.code, json_object('id', i.id, 'name', i.name, 'color', i.color ) category FROM codes, skill AS i WHERE codes.skill_id = i.id`;
    let result = await db.db.prepare(sql).all(); 
    /* console.log(result.length) */
    
  /*   for (let i = 0 ; i < result.length ; i++) {
      result = JSON.parse(result[i].category)

    } */
    
    /* const str = JSON.stringify(c)
    const result = str.replace(/\\/g, '') */
    return result; 
    },
  getOneCodes: async (id) => {
    const sql ='SELECT * FROM codes WHERE id=?';
    const result = await db.db.prepare(sql).get(id); 
    return result; 
    },    
  deleteCodes: async (id) => {
    const sql = 'DELETE FROM codes WHERE id=?';
    const result = await db.db.prepare(sql).run(id);
    return result;
  },
  updateCodes: async (body, id) => {
    const sql = 'UPDATE codes SET titre=$1, description=$2, code=$3, skill_id=$4 WHERE id=$5';
    const { titre, description, code, skill_id } = body;
    const result = await db.db.prepare(sql).run({1:titre, 2:description, 3:code, 4:skill_id, 5:id});
    return result;
  }
};

module.exports = {
  dataCodes,
  }