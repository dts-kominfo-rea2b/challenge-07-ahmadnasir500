const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (sentiment) => {
  try {
    // simpan array 
    const [resIXX, resVGC] = await Promise.all([promiseTheaterIXX(), promiseTheaterVGC()])
    // gabung array
    const result = [...resIXX, ...resVGC]

    // filter result
    return result.filter(item => item.hasil === sentiment).length || 0
  } catch (error) {
    console.log("there was an error: " + error);
  }
}

module.exports = {
  promiseOutput,
};
