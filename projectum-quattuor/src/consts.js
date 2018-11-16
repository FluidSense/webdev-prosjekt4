export const searchLabels = ['Planets', 'Starships', 'People', 'Species', 'Films', 'Vehicles'];
export const APIQuery = 'http://it2810-06.idi.ntnu.no/api/api/';
export const sortLabels = [['Name', 'ASC'], ['Name', 'DESC'], ['ID', 'ASC'], ['ID', 'DESC']];

// Fits the sort by to fit the backend styles, as not all have a name attribute.
export const nameTranslate = {
  Films: 'title',
  People: 'name',
  Planets: 'name',
  Vehicles: 'name',
  Starships: 'name',
  Species: 'name',
};