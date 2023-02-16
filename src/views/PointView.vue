<template>
  <div>
    <!-- <p>{{ pointInfo }}</p> -->
    <PointList :posts="pointInfo" :filter="pointFilter" />
    <!-- <PointListVuetify :posts="pointInfo" /> -->
  </div>
</template>

<script>
import axios from "axios";
import PointList from "../components/PointList.vue";
import { excelParser } from "../parsers/excelParser.js";
// import PointListVuetify from "../components/PointListVuetify.vue";

export default {
  components: {
    PointList,
    // PointListVuetify,
  },
  data() {
    return {
      pointInfo: [],
      // perPage: 10,
      pointFilter: "",
    };
  },
  methods: {
    csvExport() {
      excelParser().exportDataFromJSON(this.pointInfo, "PointTable", "csv");
    },
    xlsExport() {
      excelParser().exportDataFromJSON(this.pointInfo, "PointTable", "xls");
    },
    xlsxExport() {
      excelParser().exportDataFromJSON(this.pointInfo, "PointTable", "xlsx");
    },
    jsonExport() {
      excelParser().exportDataFromJSON(this.pointInfo, "PointTable", "json");
    },
  },
  mounted() {
    axios
      .get("http://localhost:8080/api/points/", {
        headers: {
          //   "Access-Control-Allow-Origin": "*",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY3NDU4ODM0OSwianRpIjoiYTNhOGIyYTEtMThjNi00ZThhLTg0YzEtNGU0ZTFjYzUxZTFhIiwidHlwZSI6ImFjY2VzcyIsImlkZW50aXR5IjoiamFja3NvbmdpbGVzZGV2QGdtYWlsLmNvbSIsIm5iZiI6MTY3NDU4ODM0OSwiZXhwIjoxNzM3NjYwMzQ5fQ.s0Gxr4cDfVnIaNHFrVitj5Bvh4sXD9PLoa3-dlUW6wk",
        },
      })
      .then((response) => (this.pointInfo = response.data.items))
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style lang="scss" scoped>
// .filter-dropdown {
//   height: auto;
//   max-height: 30vh;
//   font-size: 12px;
//   overflow-y: inherit;
//   position: inherit;
//   overflow-x: hidden;
// }
</style>
