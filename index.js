const fs = require("fs");

fs.writeFile("/home/baskar/callBack-drill/fs-problem2.cjs", "", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
