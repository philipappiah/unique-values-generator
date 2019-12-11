const fs = require("fs");
const dir = require('os').homedir();

let pathExists = `${dir}/store.json`;

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
        `${dir}/store.json`,
        `{"value":${newVal},"startValue":${startValue}, "increment":${increment}, "options":"${options}"}`,
        function(err) {
          if (err) throw err;
        }
      );
    } else {
      fs.writeFile(
        `${dir}/store.json`,
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



exports.clear = () => {
  fs.writeFile(
    `${dir}/store.json`,
    `{"value":0,"startValue":0, "increment":1, "options":""}`,
    function(err) {
      if (err) throw err;
    }
  );

}