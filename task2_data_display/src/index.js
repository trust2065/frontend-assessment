import "bootstrap";

const axios = require("axios");
const url =
  "https://raw.githubusercontent.com/trust2065/frontend-assessment/master/data.json";

new Vue({
  el: "#app",
  data() {
    return {
      dataList: null,
      iconList: ["info", "grade", "explore", "help"]
    };
  },
  mounted() {
    axios
      .get(url)
      .then(response => {
        console.log(response.data);
        this.dataList = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
});
