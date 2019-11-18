import { mapState } from "vuex";

const result = {
  name: "result",

  data() {
    return {
      "bad-motherfucker": "/img/bad-mothafuckin-logo.jpg",
      "go-on": "https://media.giphy.com/media/l2YWxte7sJB2XuE8M/giphy.gif",
      shoot: "https://media.giphy.com/media/UhJNr15MmH64E/giphy.gif",
      wtf: "http://giphygifs.s3.amazonaws.com/media/6uGhT1O4sxpi8/giphy.gif"
    };
  },

  computed: {
    ...mapState(["result"]),
    resultImg() {
      return this.$data[this.result];
    }
  }
};

export default result;
