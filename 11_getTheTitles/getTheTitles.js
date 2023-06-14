const getTheTitles = function(books) {
    //iterate through elements of books array
    //go into each element object, look for title

    let ans = [];
    books.forEach((book) => {
        ans.push(book.title);
    });

    return ans;
};

// Do not edit below this line
module.exports = getTheTitles;
