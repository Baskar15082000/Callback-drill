const fs = require("fs");

function fsProblem2() {
  function readFile(path, cb) {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) {
        console.error(err);
      } else {
        cb(data);
      }
    });
  }
  readFile("lipsum.txt", function cb(file) {
    const upper = file.toUpperCase();
    fs.writeFile("Upper.txt", upper, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Upper.txt ctreated");
        fs.writeFile("fileNames.txt", "Upper.txt", (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log("Upper.txt writtern");
            readFile("Upper.txt", function (data1) {
              const lower = data1.toLowerCase();
              const sentence = lower.replaceAll(".", ".\n");
              fs.writeFile("lower.txt", sentence, (err) => {
                if (err) {
                  console.error(err);
                } else {
                  console.log("lower.txt created");
                  fs.appendFile("fileNames.txt", "\nlower.txt", (err, data) => {
                    if (err) {
                      console.error(err);
                    } else {
                      console.log("lower.txt writtern");
                      readFile("lower.txt", function (data2) {
                        const sort = data2.split(".").sort().join("");

                        fs.writeFile("sort.txt", sort, (err) => {
                          if (err) {
                            console.error(err);
                          } else {
                            console.log("sort.txt created");
                            fs.appendFile(
                              "fileNames.txt",
                              "\nsort.txt",
                              (err, data3) => {
                                if (err) {
                                  return;
                                } else {
                                  console.log("sort.txt writtern");
                                  readFile("fileNames.txt", function (data4) {
                                    if (err) {
                                      console.error(err);
                                    } else {
                                      const files = data4.split("\n");
                                      files.forEach((element) => {
                                        fs.unlink(element, (err) => {
                                          if (err) {
                                            return;
                                          } else {
                                            console.log(
                                              element + "" + "deleted"
                                            );
                                          }
                                        });
                                      });
                                    }
                                  });
                                }
                              }
                            );
                          }
                        });
                      });
                    }
                  });
                }
              });
            });
          }
        });
      }
    });
  });
}
//fsProblem2();
module.exports = fsProblem2;
