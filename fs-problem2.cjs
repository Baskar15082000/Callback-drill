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
    fs.writeFile("newFile_1.txt", upper, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log("newFile_1.txt ctreated");
        fs.writeFile("fileNames.txt", "newFile_1.txt", (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log("newFile_1.txt writtern");
            readFile("newFile_1.txt", function (data1) {
              const lower = data1.toLowerCase();
              const sentence = lower.replaceAll(".", ".\n");
              fs.writeFile("newFile_2.txt", sentence, (err) => {
                if (err) {
                  console.error(err);
                } else {
                  console.log("newFile_2.txt created");
                  fs.appendFile(
                    "fileNames.txt",
                    "\nnewFile_2.txt",
                    (err, data) => {
                      if (err) {
                        console.error(err);
                      } else {
                        console.log("newFile_2.txt writtern");
                        readFile("newFile_2.txt", function (data2) {
                          const sort = data2.split(".").sort().join("");

                          fs.writeFile("newFile_3.txt", sort, (err) => {
                            if (err) {
                              console.error(err);
                            } else {
                              console.log("newFile_3.txt created");
                              fs.appendFile(
                                "fileNames.txt",
                                "\nnewFile_3.txt",
                                (err, data3) => {
                                  if (err) {
                                    return;
                                  } else {
                                    console.log("newFile_3.txt writtern");
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
//fsProblem2();
module.exports = fsProblem2;
