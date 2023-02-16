<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div>
    <!-- <div class="site-icons"></div> -->
    <div class="gateway-table-container">
      <div class="gateway-icons">
        <b-dropdown
          text="Add Filter"
          id="dropdown-1"
          class="m-md-2 gateway-buttons"
          boundary="scrollParent"
        >
          <b-dropdown-item>Site / Name</b-dropdown-item>
          <b-dropdown-item>Site / Nice Name</b-dropdown-item>
          <b-dropdown-item>Site / Address</b-dropdown-item>
          <b-dropdown-item>Site / Vtron Ip</b-dropdown-item>
          <b-dropdown-item>Site / Vtron User</b-dropdown-item>
          <b-dropdown-item>Site / Ansible User</b-dropdown-item>
          <b-dropdown-item>Site / Latitude</b-dropdown-item>
          <b-dropdown-item>Site / Longitude</b-dropdown-item>
          <b-dropdown-item>Site / Mqtt Prefix</b-dropdown-item>
          <b-dropdown-item>Site / Updated</b-dropdown-item>
          <b-dropdown-item>Site / Created</b-dropdown-item>
          <b-dropdown-item>Site / Name</b-dropdown-item>
        </b-dropdown>
        <b-form-input
          v-model="filter"
          type="search"
          placeholder="Search"
          class="m-md-2 search-gateway"
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
            class="gateway-table"
          >
            <template>
              <div class="gateway-btn-container"></div>
              <b-button class="gateway-btn" style="background-color: #686b75"
                >View</b-button
              >
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
      { key: "name", label: "Name" },
      { key: "primary_mac", label: "Primary Mac" },
      { key: "nice_name", label: "Site" },
      { key: "site", label: "Site Slug" },
      { key: "client", label: "Client" },
      { key: "client_slug", label: "Client Slug" },
      { key: "vpn_ip", label: "VPN IP" },
      { key: "device_token", label: "Device Token" },
      { key: "device_token_expires", label: "Device Token Expires" },
      { key: "updated", label: "Updated" },
      { key: "created", label: "Created" },
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
  methods: {},
};
</script>

<style lang="scss" scoped>
.gateway-table {
  max-width: 80vw;
  font-size: 14px;
  // background-color: #686b75;
  // background-color: #eeeeee;
  opacity: 100%;
  border-radius: 10px;
}

.gateway-table-container {
  display: grid;
  justify-content: center;
}

.gateway-btn {
  // width: 2vw;
  font-size: 12px;
  padding: 0;
  margin: 3px 0;
  border: none;
}

.gateway-btn-container {
  display: grid;
}

.gateway-buttons {
  background-color: #43354f;
  border: none;
}
.gateway-icons {
  display: flex;
  justify-content: flex-start;
  margin: 0 0 30px 0;
}

::v-deep .btn-secondary {
  background-color: #43354f;
  border: none;
}

// ::v-deep .page-link:active {
//   background-color: #43354f;
// }
.search-gateway {
  width: 150px;
}
</style>
