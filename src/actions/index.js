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
  id,
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