<template>
  <article class="post">
    <div class="activity-title">
      <i class="fas fa-cog activity-settings" @click="isMenuDisplayed = !isMenuDisplayed" />
      <input v-model="activityToUpdate.title" type="text" class="input" />
    </div>
    <div class="activity-category">
      <select v-model="activityToUpdate.category" class="select">
        <option disabled value>Please select one</option>
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >{{ category.text }}</option>
      </select>
    </div>
    <div class="control activity-notes">
      <textarea
        v-model="activityToUpdate.notes"
        class="textarea"
        placeholder="Write some notes here"
      />
    </div>
    <div class="media">
      <div class="media-left">
        <p class="image is-32x32">
          <img src="../assets/user.png" />
        </p>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <a href="#">Jakub Maliniak</a>
            updated {{ activityToUpdate.updatedAt | postTime }} &nbsp;
          </p>
        </div>
      </div>
      <div class="media-right">
        <input
          id="progress"
          v-model.number="activityToUpdate.progress"
          type="range"
          name="progress"
          min="0"
          max="100"
          value="90"
          step="1"
        />
        <label for="progress">{{ activityToUpdate.progress }} %</label>
      </div>
    </div>
    <div v-if="isMenuDisplayed" class="activity-controll">
      <a class="button is-warning" @click="updateActivity">Commit Update</a>
      <a class="button is-danger" @click="$emit('toggleUpdate', false)">Cancel</a>
    </div>
  </article>
</template>

<script>
import store from "@/store";
import textUtility from "@/mixins/textUtility";
export default {
  mixins: [textUtility],
  props: {
    activity: {
      type: Object,
      required: true
    },
    categories: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isMenuDisplayed: true,
      activityToUpdate: { ...this.activity }
    };
  },
  methods: {
    updateActivity() {
      store.updateActivity(this.activityToUpdate).then(() => {
        this.$emit("toggleUpdate", false);
      });
    }
  }
};
</script>

<style lang="scss" scope>
.activity-title {
  margin-bottom: 10px;
}
.activity-category {
  margin-bottom: 10px;
}
.activity-notes {
  margin-bottom: 10px;
}
.post {
  margin-bottom: 5px;
}

.activity-settings {
  float: right;
  font-size: 22px;
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
  }
}
.activity-controll {
  margin: 20px 0 0 0;
  a {
    margin-right: 5px;
  }
}
</style>