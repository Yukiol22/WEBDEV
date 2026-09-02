const catItems = []; // Mock database array

const addCat = (catData) => {
  const newCat = {
    cat_id: catItems.length + 1,
    ...catData,
  };
  catItems.push(newCat);
  return newCat;
};

export { addCat };