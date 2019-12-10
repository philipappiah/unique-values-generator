const fs = require("fs");

let pathExists = `${__dirname}/store.json`;

exports.generate = (sValue, opt) => {

  let startValue = sValue || 0;
  let increment = typeof(opt) === 'object' ? opt.increment : 1;
  let options = typeof(opt) === 'object'  ? opt.prefix : "";
  let newVal = startValue;
  try {
    if (fs.existsSync(pathExists)) {
      let rawData = fs.readFileSync(pathExists);
      let prevData = JSON.parse(rawData);
      if (
        prevData.startValue !== startValue ||
        prevData.increment !== increment ||
        prevData.options !== options
      ) {
        newVal = startValue;
      } else {
        newVal = prevData.value + increment;
      }
      fs.writeFile(
        `${__dirname}/store.json`,
        `{"value":${newVal},"startValue":${startValue}, "increment":${increment}, "options":"${options}"}`,
        function(err) {
          if (err) throw err;
        }
      );
    } else {
      fs.writeFile(
        `${__dirname}/store.json`,
        `{"value":${newVal},"startValue":${startValue}, "increment":${increment}, "options":"${options}"}`,
        function(err) {
          if (err) throw err;
        }
      );
    }
  } catch (err) {
    console.error(err);
  }

  return options + newVal;
};



