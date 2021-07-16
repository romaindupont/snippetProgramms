export const SAVE_SKILL = 'SAVE_SKILL';
export const saveSkill = () => ({
  type: SAVE_SKILL
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