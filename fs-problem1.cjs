const fs = require("fs");
function fsProblem1(absolutePathOfRandomDirectory, randomNumberOfFiles) {
  //creating directory
  fs.mkdir(absolutePathOfRandomDirectory, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Directory created");
      recursive(absolutePathOfRandomDirectory, randomNumberOfFiles);
    }
  });

  let fileCount = 1;
  //recursion for create and delete .json file
  function recursive(absolutePathOfRandomDirectory, randomNumberOfFiles) {
    //breaking condition
    if (randomNumberOfFiles == 0) {
      fs.rmdir(absolutePathOfRandomDirectory, (err, data) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Directory Deleted");
        }
      });
      return;
    }
    //creating .json file
    function create(absolutePathOfRandomDirectory, cb) {
      fs.writeFile(absolutePathOfRandomDirectory + "/file.json", "", (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("File " + fileCount + " created");
          cb(absolutePathOfRandomDirectory);
        }
      });
    }
    //calling function to create file
    create(
      absolutePathOfRandomDirectory,
      //call back to delete .json file
      function cb(absolutePathOfRandomDirectory) {
        fs.unlink(absolutePathOfRandomDirectory + "/file.json", (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log("File " + fileCount + " deleted");
            randomNumberOfFiles--;
            fileCount++;
            recursive(absolutePathOfRandomDirectory, randomNumberOfFiles);
          }
        });
      }
    );
  }
}
module.exports = fsProblem1;
