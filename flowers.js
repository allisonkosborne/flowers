const flowers = [
  {
    id: 1,
    color: "white",
    species: "rose",
    price: 0.9,
  },
  {
    id: 2,
    color: "red",
    species: "tulip",
    price: 1.1,
  },
];
const newFlower = {
  color: "blue",
  species: "cornflower",
  price: 0.5
}
const addFlower = (flowerObject) => {
  const lastIndex = flowers.length -1
   const lastFlower = flowers[lastIndex]
   const maxID = lastFlower.id
   const newFlowerID = maxID + 1
   
   flowerObject.id = newFlowerID
   flowers.push(flowerObject)
  /*
        This function should add an `
        id` property
        to the object that was sent to the function.
        The value of the `id` property should be 1
        greater than the current maximum `id` in the
        array.

        Once the `id` property has been added to the,
        object, the object should then be put into the
        `flowers` array.
    */
};

const findExpensiveFlowers = () => {
  const expensiveFlowers = []; // Do not change this code
    for (const flower of flowers) {
      if (flower.price >= 1.00) {
        expensiveFlowers.push(flower)
      }
    }
  /*
        Write a for..of loop that iterate the array
        of flowers, and if the price of a flower is
        greater than or equal to 1.00, it should be
        added to the `expensiveFlowers` array.
    */

  return expensiveFlowers; // Do not change this code
};

// Do not touch this code
module.exports = {
  findExpensiveFlowers,
  addFlower,
};
