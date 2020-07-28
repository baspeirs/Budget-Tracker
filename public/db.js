let db;
// create a new db request for a "budget" database.
const request = window.indexedDB.open("budget", 1);

request.onupgradeneeded = function(event) {
// update the database variable with the database
    db = event.target.result;

// create object store called "pending" and set autoIncrement to true
    const budgetStore = db.createObjectStore("pending", {
      autoIncrement: true
    });

    objectStore.createIndex("transaction", "transaction");
};

