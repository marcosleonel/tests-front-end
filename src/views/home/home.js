import { mapActions } from "vuex";

const home = {
  businessPartner: "home",

  data() {
    return {
      form: {
        businessPartner: "",
        burger: "",
        speakEnglish: "",
        lookLike: []
      }
    };
  },

  methods: {
    ...mapActions(["updateResult"]),
    _openModal() {
      const _this = this;
      this.$alert("I double dare you to see the results", "Success", {
        confirmButtonText: "Go To Result",
        type: "success",
        callback: action => {
          this.$message({
            type: "success",
            message: `Result Type: ${action}`
          });
          _this.$router.push({ path: "/result" });
        }
      });
    },
    resetForm() {
      this.form = {
        businessPartner: "",
        burger: "",
        speakEnglish: "",
        lookLike: []
      };
    },
    validateForm() {
      const lookLikeABitch = this.form.lookLike.indexOf("A Bitch") >= 0;

      if (this.form.businessPartner === "Marsellus Wallace" && lookLikeABitch) {
        this.updateResult("shoot");
        this.resetForm();
        this._openModal();
        return;
      }

      if (
        this.form.businessPartner === "Marsellus Wallace" &&
        !lookLikeABitch
      ) {
        this.updateResult("go-on");
        this.resetForm();
        this._openModal();
        return;
      }

      if (this.form.businessPartner !== "Marsellus Wallace" && lookLikeABitch) {
        this.updateResult("bad-motherfucker");
        this.resetForm();
        this._openModal();
        return;
      }

      if (
        this.form.businessPartner !== "Marsellus Wallace" &&
        !lookLikeABitch
      ) {
        this.updateResult("wtf");
        this.resetForm();
        this._openModal();
        return;
      }
    }
  }
};

export default home;
