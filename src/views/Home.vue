<template>
  <div class="home">

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let a =
        "https://mockapi.eolinker.com/dGwZWvn9791a0d151d04f0e78d00fbd72e0802d60878959/OneDemo/getData";
      let b =
        "https://mockapi.eolinker.com/dGwZWvn9791a0d151d04f0e78d00fbd72e0802d60878959/OneDemo/getData2";
      axios
        .get(a, {
          params: {},
        })
        .then((res) => {
          console.log(res.data);
        })
        .then(
          axios
            .get(b, {
              params: {},
            })
            .then((res) => {
              console.log(res.data);
            })
            .then(
              axios
                .get(b, {
                  params: {},
                })
                .then((res) => {
                  console.log(res.data);
                })
            )
        )
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
