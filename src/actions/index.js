export const SAVE_SKILL = 'SAVE_SKILL';
export const saveSkill = (id, name, image, color) => ({
  type: SAVE_SKILL,
  id,
  name,
  image,
  color
});

export const ADD_SKILL = 'ADD_SKILL';
export const addSkill = (id, name, image, color) => ({
  type: ADD_SKILL,
  id,
  name,
  image,
  color
});

export const DELETE_SKILL = 'DELETE_SKILL';
export const deleteSkill = (id) => ({
  type: DELETE_SKILL,
  id
});

export const CHANGE_VALUE = 'CHANGE_VALUE';
export const changeValue = (newValue, key) => ({
  type: CHANGE_VALUE,
  newValue,
  key
});

export const MODIFY_SKILL = 'MODIFY_SKILL';
export const modifySkill = (id, name, image, color) => ({
  type: MODIFY_SKILL,
  id,
  name,
  image,
  color
});

export const SAVE_ID = 'SAVE_ID';
export const saveId = (id) => ({
  type: SAVE_ID,
  id
});

export const CHANGE_CODE = 'CHANGE_CODE';
export const changeCode = (id, titre, description, category, code, name, color) => ({
  type: CHANGE_CODE,
  id,
  titre,
  description,
  category,
  code,
  name,
  color
});

export const ADD_CODE = 'ADD_CODE';
export const addCode = (id, titre, description, category, code, name, color) => ({
  type: ADD_CODE,
  id,
  titre,
  description,
  category,
  code,
  name,
  color
});

export const FETCH_SKILLS = 'FETCH_SKILLS';
export const fetchSkills = () => ({
  type: FETCH_SKILLS
});

export const SAVE_DB_SKILLS = 'SAVE_DB_SKILLS';
export const SaveDbSkills = (categoryList) => ({
  type: SAVE_DB_SKILLS,
  categoryList
});

export const FETCH_CODES = 'FETCH_CODES';
export const fetchCodes = () => ({
  type: FETCH_CODES
});

export const SAVE_DB_CODES = 'SAVE_DB_CODES';
export const SaveDbCodes = (codesList) => ({
  type: SAVE_DB_CODES,
  codesList
});

export const ADD_DB_SKILL = 'ADD_DB_SKILL';
export const addDbSkill = (name, image, color, highlight_id) => ({
  type: ADD_DB_SKILL,
  name,
  image,
  color,
  highlight_id
});

export const MODIFY_DB_SKILL = 'MODIFY_DB_SKILL';
export const modifyDbSkill = (name, image, color, highlight_id) => ({
  type: MODIFY_DB_SKILL,
  name,
  image,
  color,
  highlight_id
});

export const ADD_DB_CODE = 'ADD_DB_CODE';
export const addDbCode = (titre, description,code, skill_id) => ({
  type: ADD_DB_CODE,
  titre,
  description,
  code,
  skill_id
});

export const CHANGE_DB_CODE = 'CHANGE_DB_CODE';
export const changeDbCode = ( id, titre, description,code, skill_id) => ({
  type: CHANGE_DB_CODE,
  id,
  titre,
  description,
  code,
  skill_id
});

export const FETCH_HIGHLIGHT = 'FETCH_HIGHLIGHT';
export const fetchHighlight = () => ({
  type:FETCH_HIGHLIGHT
})

export const SAVE_DB_HIGHLIGHT = 'SAVE_DB_HIGHLIGHT';
export const SaveDbHighLight = (highlightList) => ({
  type: SAVE_DB_HIGHLIGHT,
  highlightList
});

export const DELETE_DB_CODE = 'DELETE_DB_CODE';
export const deleteDbCode = (id) => ({
  type: DELETE_DB_CODE,
  id
});

export const DELETE_CODE = 'DELETE_CODE';
export const deleteCode = (id) => ({
  type: DELETE_CODE,
  id
});