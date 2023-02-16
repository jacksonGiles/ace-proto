<template>
  <v-app>
    <v-main>
      <v-container>
        <v-data-table
          :headers="headers"
          :items="posts"
          :items-per-page="5"
        ></v-data-table>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "PointList",
  props: ["posts"],
  data: () => ({
    headers: [
      { text: "Name", value: "name" },
      { text: "Site", value: "site" },
      { text: "Client", value: "client" },
      { text: "Point Type", value: "point_type" },
      { text: "Collect Enabled", value: "collect_enabled" },
      { text: "Collect Interval", value: "collect_interval" },
      { text: "Marker Tags", value: "marker_tags" },
      { text: "KV Tags", value: "kv_tags" },
      { text: "Bacnet Data", value: "bacnet_data" },
      { text: "Collect Config", value: "collect_config" },
    ],
  }),
  //   "actions",
  //       "name",
  //       "site",
  //       "client",
  //       "point_type",
  //       "collect_enabled",
  //       "collect_interval",
  //       "marker_tags",
  //       "kv_tags",
  //       "bacnet_data",
  //       "collect_config",
};
</script>

<style lang="scss" scoped></style>
