<template>
  <div class="activityCreateForm">
    <a
      v-if="!isFormDisplayed"
      class="button is-primary is-block is-alt is-large"
      href="#"
      @click="toggleFormDisplay"
    >New Activity</a>
    <div v-if="isFormDisplayed" class="craete-form">
      <h2>Create Activity</h2>
      <form>
        <div class="field">
          <label for class="label">Title</label>
          <div class="control">
            <input
              v-model="newActivity.title"
              type="text"
              class="input"
              placeholder="Enter the title"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Notes</label>
          <div class="control">
            <textarea
              id
              v-model="newActivity.notes"
              name
              cols="30"
              rows="10"
              class="textarea"
              placeholder="Enter Your Note..."
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Category</label>
          <div class="control">
            <select v-model="newActivity.category" class="select">
              <option value disabled>Please select a Category</option>
              <option
                v-for="category in categories"
                :key="category.id"
                :value="category.id"
              >{{ category.text }}</option>
            </select>
          </div>
        </div>
        <div class="field is-gouped">
          <div class="control">
            <button
              class="button is-link"
              :disabled="!isDescValid"
              @click.prevent="createActivity"
            >Create Activity</button>
          </div>
          <div class="control">
            <button class="button is-text" @click="toggleFormDisplay">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  props: {
    categories: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isFormDisplayed: false,
      newActivity: {
        title: "",
        notes: "",
        category: ""
      }
    };
  },
  computed: {
    isDescValid() {
      return (
        this.newActivity.title &&
        this.newActivity.notes &&
        this.newActivity.category
      );
    }
  },
  methods: {
    toggleFormDisplay() {
      this.isFormDisplayed = !this.isFormDisplayed;
    },
    resetActivityForm() {
      this.newActivity.title = "";
      this.newActivity.notes = "";
      this.newActivity.category = "";
      this.isFormDisplayed = false;
    },
    createActivity(resetActivityForm) {
      store.createActivity({ ...this.newActivity }).then(activity => {
        this.resetActivityForm();
        this.isFormDisplayed = false;
      });
    }
  }
};
</script>

<style scoped>
</style>