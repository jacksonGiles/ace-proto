<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div>
    <!-- <div class="site-icons"></div> -->
    <div class="site-table-container">
      <div class="site-icons">
        <b-button class="m-md-2 site-buttons">Create</b-button>
        <b-dropdown
          text="Add Filter"
          id="dropdown-1"
          class="m-md-2 gateway-buttons"
          boundary="scrollParent"
        >
          <b-dropdown-item>Site Slug</b-dropdown-item>
          <b-dropdown-item>Site Name</b-dropdown-item>
          <b-dropdown-item>Vtron Ip</b-dropdown-item>
          <b-dropdown-item>Client Slug</b-dropdown-item>
          <b-dropdown-item>Client Name</b-dropdown-item>
        </b-dropdown>
        <b-form-input
          v-model="filter"
          type="search"
          placeholder="Search"
          class="m-md-2 search-site"
        ></b-form-input>
      </div>
      <b-row>
        <b-col>
          <b-table
            striped
            bordered
            outlined
            hover
            :items="posts"
            :filter="siteFilter"
            :perPage="perPage"
            :currentPage="currentPage"
            :fields="fields"
            class="site-table"
          >
            <template v-slot:cell(actions)="data">
              <div class="site-btn-container">
                <b-button class="site-btn" style="background-color: #686b75"
                  >View</b-button
                >
                <b-button class="site-btn" style="background-color: #43354f"
                  >Edit</b-button
                >
                <b-button
                  variant="danger"
                  @click="deleteItem(data.item.id)"
                  class="site-btn"
                  >Delete</b-button
                >
              </div>
            </template></b-table
          >
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
          ></b-pagination>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  props: ["posts", "filter"],
  data: () => ({
    fields: [
      "actions",
      { key: "client", label: "Client Slug" },
      { key: "nice_name", label: "Client Name" },
      { key: "name", label: "Site Slug" },
      { key: "site_name", label: "Site Name" },
      { key: "vtron_user", label: "Vtron IP" },
      "point_count",
      "device_count",
      "collected_points",
      "Geolocation",
      "mqtt_prefix",
      "created",
      "updated",
    ],
    // specifiedField: [],
    // filter: "",
    perPage: 10,
    currentPage: 1,
  }),
  computed: {
    rows() {
      return this.posts.length;
    },
  },
  methods: {
    deleteItem(id) {
      const index = this.sitePosts.indexOf((x) => x.id === id);
      // eslint-disable-next-line vue/no-mutating-props
      this.posts.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.site-table {
  max-width: 80vw;
  font-size: 14px;
  // background-color: #686b75;
  // background-color: #eeeeee;
  opacity: 100%;
  border-radius: 10px;
}

.site-table-container {
  display: grid;
  justify-content: center;
}

.site-btn {
  // width: 2vw;
  font-size: 12px;
  padding: 0;
  margin: 3px 0;
  border: none;
}

.site-btn-container {
  display: grid;
}

.site-buttons {
  background-color: #43354f;
  border: none;
}
.site-icons {
  display: flex;
  justify-content: flex-start;
  margin: 0 0 30px 0;
}

::v-deep .btn-secondary {
  background-color: #43354f;
  border: none;
}

.search-site {
  width: 150px;
}
</style>
