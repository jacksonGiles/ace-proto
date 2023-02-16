<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div>
    <div class="form-container">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-select
          v-model="select"
          :items="items"
          :rules="[(v) => !!v || 'Item is required']"
          label="Item"
          required
        ></v-select>

        <v-checkbox
          v-model="checkbox"
          :rules="[(v) => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
        ></v-checkbox>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Validate
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

        <v-btn color="warning" @click="resetValidation">
          Reset Validation
        </v-btn>
      </v-form>
    </div>
    <div class="point-table-container">
      <div class="point-icons">
        <b-button class="m-md-2 point-buttons">Create</b-button>
        <b-dropdown
          text="Export"
          id="dropdown-1"
          class="m-md-2"
          boundary="scrollParent"
        >
          <b-dropdown-item v-on:click="csvExport()">Export CSV</b-dropdown-item>
          <b-dropdown-item v-on:click="xlsExport()">Export XLS</b-dropdown-item>
          <b-dropdown-item v-on:click="xlsxExport()"
            >Export XLSX</b-dropdown-item
          >
          <b-dropdown-item v-on:click="jsonExport()"
            >Export JSON</b-dropdown-item
          >
        </b-dropdown>
        <b-button class="m-md-2 point-buttons">Set Display Columns</b-button>
        <b-dropdown
          id="dropdown-1"
          text="Add Filter"
          class="m-md-2 point-buttons"
          boundary="scrollParent"
        >
          <b-dropdown-text text-class="filter-label">By Site</b-dropdown-text>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Site / Name</b-dropdown-item>
          <b-dropdown-item>Site / Nice Name</b-dropdown-item>
          <b-dropdown-item>Site / Address</b-dropdown-item>
          <b-dropdown-item>Site / Vtron IP</b-dropdown-item>
          <b-dropdown-item>Site / Vtron User</b-dropdown-item>
          <b-dropdown-item>Site / Ansible User</b-dropdown-item>
          <b-dropdown-item>Site / Latitude</b-dropdown-item>
          <b-dropdown-item>Site / Longitude</b-dropdown-item>
          <b-dropdown-item>Site / Mqtt Prefix</b-dropdown-item>
          <b-dropdown-item>Site / Updated</b-dropdown-item>
          <b-dropdown-item>Site / Created</b-dropdown-item>
          <b-dropdown-item>Site / Name</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-text text-class="filter-label">By Field</b-dropdown-text>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Name</b-dropdown-item>
          <b-dropdown-item>Point Type</b-dropdown-item>
          <b-dropdown-item>Collect Enabled</b-dropdown-item>
          <b-dropdown-item>Marker Tags</b-dropdown-item>
          <b-dropdown-item>KV Tags</b-dropdown-item>
          <b-dropdown-item>Collect Config</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-text text-class="filter-label">By Client</b-dropdown-text>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Client / Name</b-dropdown-item>
          <b-dropdown-item>Client / Address</b-dropdown-item>
          <b-dropdown-item>Client / Tech Contact</b-dropdown-item>
          <b-dropdown-item>Client / Bus Contact</b-dropdown-item>
          <b-dropdown-item>Client / Nice Name</b-dropdown-item>
          <b-dropdown-item>Client / Updated</b-dropdown-item>
          <b-dropdown-item>Client / Created</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-text text-class="filter-label">By BACNet</b-dropdown-text>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>BACNet Data</b-dropdown-item>
          <b-dropdown-item>BACNet Object Name</b-dropdown-item>
          <b-dropdown-item>BACNet Object Description</b-dropdown-item>
          <b-dropdown-item>BACNet Device Name</b-dropdown-item>
          <b-dropdown-item>BACNet Device Description</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-text text-class="filter-label">By Config</b-dropdown-text>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Config Object Name</b-dropdown-item>
          <b-dropdown-item>Config Object Description</b-dropdown-item>
          <b-dropdown-item>Config Device Name</b-dropdown-item>
          <b-dropdown-item>Config Device Description</b-dropdown-item>
        </b-dropdown>
        <b-dropdown
          text="Items Per Page"
          id="dropdown-1"
          class="m-md-2 point-buttons"
          boundary="scrollParent"
        >
          <b-dropdown-item>20 Items</b-dropdown-item>
          <b-dropdown-item>50 Items</b-dropdown-item>
          <b-dropdown-item>100 Items</b-dropdown-item>
        </b-dropdown>
        <b-dropdown
          text="With Selected"
          id="dropdown-1"
          class="m-md-2 point-buttons"
          boundary="scrollParent"
        >
          <b-dropdown-item>Add KV Tag</b-dropdown-item>
          <b-dropdown-item>Remove KV Tag</b-dropdown-item>
          <b-dropdown-item>Add Marker Tag</b-dropdown-item>
          <b-dropdown-item>Delete</b-dropdown-item>
          <b-dropdown-item>Set Collection Interval</b-dropdown-item>
          <b-dropdown-item>Set Writable</b-dropdown-item>
        </b-dropdown>
        <b-dropdown
          text="With Filtered"
          id="dropdown-1"
          class="m-md-2 filter-dropdown point-buttons"
          boundary="scrollParent"
        >
          <b-dropdown-item>Set Collection Interval</b-dropdown-item>
          <b-dropdown-item>Add KV Tag to Filtered</b-dropdown-item>
          <b-dropdown-item>Add Marker Tag to Filtered</b-dropdown-item>
          <b-dropdown-item>Enable Writable</b-dropdown-item>
          <b-dropdown-item>Remove KV Tag from Filtered</b-dropdown-item>
          <b-dropdown-item>Remove Marker Tag</b-dropdown-item>
        </b-dropdown>
        <b-form-input
          v-model="filter"
          type="search"
          placeholder="Search"
          class="m-md-2 search-point"
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
            :filter="filter"
            :perPage="perPage"
            :currentPage="currentPage"
            :fields="fields"
            class="point-table"
          >
            <template v-slot:cell(actions)="data">
              <div class="point-btn-container">
                <b-button class="point-btn" style="background-color: #686b75"
                  >View</b-button
                >
                <b-button class="point-btn" style="background-color: #43354f"
                  >Edit</b-button
                >
                <b-button
                  variant="danger"
                  @click="deleteItem(data.item.id)"
                  class="point-btn"
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
      { key: "name", tdClass: "td-name" },
      "site",
      "client",
      "point_type",
      "collect_enabled",
      "collect_interval",
      "marker_tags",
      "kv_tags",
      "bacnet_data",
      "collect_config",
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
      const index = this.posts.indexOf((x) => x.id === id);
      // eslint-disable-next-line vue/no-mutating-props
      this.posts.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.point-table {
  max-width: 80vw;
  font-size: 14px;
  // background-color: #686b75;
  // background-color: #eeeeee;
  opacity: 100%;
  border-radius: 10px;
}

.point-table-container {
  display: grid;
  justify-content: center;
}

.point-btn {
  // width: 2vw;
  font-size: 12px;
  padding: 0;
  margin: 3px 0;
  border: none;
}

.point-btn-container {
  display: grid;
}

// .filter-label {
//   font-weight: bold;
// }

// .dropdown-menu {
//   font-size: 12px;
// }
.point-icons {
  display: flex;
  justify-content: flex-start;
  margin: 0 0 30px 0;
}
.search-point {
  width: 150px;
}

.point-buttons {
  background-color: #43354f;
  border: none;
}

::v-deep .btn-secondary {
  background-color: #43354f;
  border: none;
}
</style>
