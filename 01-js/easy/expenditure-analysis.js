/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  // Iterate through each transaction
  transactions.forEach(transaction => {
    const { category, price } = transaction;
    
    // If the category already exists in the totals object, add the price to it
    if (categoryTotals[category]) {
      categoryTotals[category] += price;
    } else {
      // Otherwise, initialize it with the current price
      categoryTotals[category] = price;
    }
  });

  // Convert the totals object into an array of objects
  const result = Object.keys(categoryTotals).map(category => ({
    category,
    totalSpent: categoryTotals[category]
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;
