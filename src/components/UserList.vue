<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div>
    <div class="user-table-container">
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
            class="user-table"
          >
            <template v-slot:cell(actions)="data">
              <div class="user-btn-container">
                <b-button class="user-btn" style="background-color: #686b75"
                  >View</b-button
                >
                <b-button class="user-btn" style="background-color: #43354f"
                  >Edit</b-button
                >
                <b-button
                  variant="danger"
                  @click="deleteItem(data.item.id)"
                  class="user-btn"
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
    fields: [],
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
.user-table {
  max-width: 80vw;
  font-size: 14px;
  // background-color: #686b75;
  // background-color: #eeeeee;
  opacity: 100%;
  border-radius: 10px;
}

.user-table-container {
  display: grid;
  justify-content: center;
}

.user-btn {
  // width: 2vw;
  font-size: 12px;
  padding: 0;
  margin: 3px 0;
  border: none;
}

.user-btn-container {
  display: grid;
}
</style>
