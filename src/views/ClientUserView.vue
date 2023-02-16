<template>
  <div>{{ clientInfo }}</div>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      clientInfo: [],
      // perPage: 10,
      filter: "",
    };
  },
  // mounted() {
  //   axios
  //     .get("http://localhost:8080/api/clients/", {
  //       headers: {
  //         //   "Access-Control-Allow-Origin": "*",
  //         Authorization:
  //           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY3NDU4ODM0OSwianRpIjoiYTNhOGIyYTEtMThjNi00ZThhLTg0YzEtNGU0ZTFjYzUxZTFhIiwidHlwZSI6ImFjY2VzcyIsImlkZW50aXR5IjoiamFja3NvbmdpbGVzZGV2QGdtYWlsLmNvbSIsIm5iZiI6MTY3NDU4ODM0OSwiZXhwIjoxNzM3NjYwMzQ5fQ.s0Gxr4cDfVnIaNHFrVitj5Bvh4sXD9PLoa3-dlUW6wk",
  //       },
  //     })
  //     .then((response) => (this.clientInfo = response.data.items))
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // },
};
</script>

<style lang="scss" scoped></style>
