
 const SWAPI_BASE_URL =  'https://swapi.dev/api/';

const fetchSWAPIData = async (endpoint) => {
  try {
    const response = await fetch(`${SWAPI_BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data from SWAPI');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

 export const getPeople = async () => {
  try {
    const data = await fetchSWAPIData('people/');
    return data.results;
  } catch (error) {
    throw error;
  }
};

export const getPersonById = async (id) => {
  try {
    const data = await fetchSWAPIData(`people/${id}/`);
    return data;
  } catch (error) {
    throw error;
  }
}


 




