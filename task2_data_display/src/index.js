import "bootstrap";

// const axios = require("axios");
// const url =
//   "https://raw.githubusercontent.com/trust2065/frontend-assessment/master/data.json";

new Vue({
  el: "#app",
  data() {
    return {
      // dataList: null
      iconList: ["info", "grade", "explore", "help"],
      dataList: [
        {
          title: "Section 1",
          href: "home",
          content:
            "<p>Maecenas nec semper ante, pellentesque posuere lorem. Nullam ipsum massa, consequat eget urna ut, pulvinar dignissim lorem. Nulla facilisi. Nam mattis eleifend metus. Fusce at commodo lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus pellentesque elit sem, vel blandit posuere.</p>"
        },
        {
          title: "Section 2",
          href: "menu1",
          content:
            "<p>Mauris a orci sodales, scelerisque velit vitae, gravida nisl. Ut non laoreet eros, vel laoreet nisi. Praesent sed dolor dui. Proin non fringilla quam. Aliquam erat volutpat. Vestibulum vel arcu semper, lobortis turpis ac, ultricies nisi. Praesent id.</p>"
        },
        {
          title: "Section 3",
          href: "menu2",
          content:
            "<p>Sed elementum sapien ut sapien imperdiet, eu venenatis enim rhoncus. Praesent euismod tincidunt rhoncus. Duis cras amet:</p><ul><li>List item one</li><li>List item two</li><li>List item three</li></ul>"
        },
        {
          title: "Section 4",
          href: "menu3",
          content:
            "<p>Cras dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia mauris vel est.</p><p>Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>"
        }
      ]
    };
  }
  // mounted() {
  //   axios
  //     .get(url)
  //     .then(response => {
  //       console.log(response.data);
  //       this.dataList = response.data;
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // }
});
