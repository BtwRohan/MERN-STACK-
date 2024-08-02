const fs = require("fs"); // Importing the filesystem module

// Assignment 1: Basic File Handling

// 1. Write to notes.txt using fs.writeFile
fs.writeFile("notes.txt", "Hello I AM DOING MY INTERSHIP IN STATIC-INT EDUCARE \n", (err) => {
  if (err) throw err; // Handle error if writing fails
  console.log('File Generated successfully: "notes.txt"');

  // 2. Read notes.txt using fs.readFile
  fs.readFile("notes.txt", "utf8", (err, data) => {
    if (err) throw err; // Handle error if reading fails
    console.log('Data of "notes.txt":');
    console.log(data); // Log the content of the file

    // 3. Append additional text to notes.txt using fs.appendFile
    fs.appendFile("notes.txt", "Additional Data\n", (err) => {
      if (err) throw err; // Handle error if appending fails
      console.log('Additional Data Added to "notes.txt".');

      // 4. Delete notes.txt using fs.unlink
      fs.unlink("notes.txt", (err) => {
        if (err) throw err; // Handle error if deleting fails
        console.log('the File "notes.txt" has been deleted.');

        // Assignment 2: Synchronous vs Asynchronous File Handling

        // Synchronous file operations
        console.time("Sync operation"); // Start timer for sync operation
        fs.writeFileSync("largefile.txt", "Large amount of Data\n"); // Synchronously write to file
        const syncData = fs.readFileSync("largefile.txt", "utf8"); // Synchronously read from file
        console.timeEnd("Sync operation"); // End timer for sync operation
        console.log("Synchronous file content:");
        console.log(syncData); // Log the content of the file

        // Asynchronous file operations
        console.time("Async operation:"); // Start timer for async operation
        fs.writeFile("largefile.txt", "Large amount of Data\n", (err) => {
          if (err) throw err; // Handle error if writing fails
          fs.readFile("largefile.txt", "utf8", (err, asyncData) => {
            if (err) throw err; // Handle error if reading fails
            console.timeEnd("Async operation:"); // End timer for async operation
            console.log("Asynchronous file content:");
            console.log(asyncData); // Log the content of the file

            // Assignment 3: Callback Functions

            // 1. Create doTask function with a callback
            function doTask(callback) {
              console.log("Task started");
              setTimeout(() => {
                console.log("Task completed");
                callback(); // Call the callback function after task completion
              }, 2000);
            }

            // 2. Example usage of doTask with a callback
            function callbackFunction() {
              console.log("Callback executed");

              // Assignment 4: Nested Callbacks (Callback Hell)

              // 1. Nested asynchronous tasks with callbacks
              function task1(callback) {
                setTimeout(() => {
                  console.log("Task 1 completed");
                  callback(); // Call the callback function after task1 completion
                }, 1000);
              }

              function task2(callback) {
                setTimeout(() => {
                  console.log("Task 2 completed");
                  callback(); // Call the callback function after task2 completion
                }, 2000);
              }

              function task3(callback) {
                setTimeout(() => {
                  console.log("Task 3 completed");
                  callback(); // Call the callback function after task3 completion
                }, 3000);
              }

              // 2. Nest callbacks to ensure sequential execution
              task1(() => {
                task2(() => {
                  task3(() => {
                    console.log("All tasks completed");

                    // Assignment 5: Using Promises to Avoid Callback Hell

                    // 1. Convert tasks from Assignment 4 to use Promises
                    function taskPromise(taskName, delay) {
                      return new Promise((resolve, reject) => {
                        setTimeout(() => {
                          console.log(`${taskName} completed`);
                          resolve(); // Resolve the promise after task completion
                        }, delay);
                      });
                    }

                    // 2. Use .then() chaining to ensure sequential execution
                    taskPromise("Task 1", 1000)
                      .then(() => taskPromise("Task 2", 2000))
                      .then(() => taskPromise("Task 3", 3000))
                      .then(() => {
                        console.log("All tasks completed using Promises");
                      })
                      .catch((err) => {
                        console.error("Error:", err); // Handle any errors
                      });
                  });
                });
              });
            }

            // Call doTask with callbackFunction as the callback
            doTask(callbackFunction);
          });
        });
      });
    });
  });
});