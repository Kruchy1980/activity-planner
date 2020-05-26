<template>
  <article class="post">
    <div class="activity-title">
      <i class="fas fa-cog activity-settings" @click="isMenuDisplayed = !isMenuDisplayed" />
      <h4 :style="{'margin-bottom': '5px'}">{{ activity.title | uppercase }}</h4>
    </div>
    <p>{{ textUtility_capitalizedWord(categories[activity.category].text) }}</p>
    <p>{{ activity.notes }}</p>
    <div class="media">
      <div class="media-left">
        <p class="image is-32x32">
          <img src="../assets/user.png" />
        </p>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            updated:
            {{ activity.updatedAt | postTime }} .
          </p>
        </div>
      </div>
      <div class="media-right">
        <span>
          Progress:
          <span :style="{'color': displayProgressColor}">{{ activity.progress }} %</span>
        </span>
      </div>
    </div>
    <div v-if="isMenuDisplayed" class="activity-controll">
      <a class="button is-warning" @click="$emit('toggleUpdate', true)">Edit</a>
      <a class="button is-danger" @click="deleteActivity">Delete</a>
    </div>
  </article>
</template>

<script>
import textUtility from "@/mixins/textUtility";
import store from "@/store";
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
      isMenuDisplayed: false
    };
  },

  computed: {
    displayProgressColor() {
      const progress = this.activity.progress;
      return progress <= 20
        ? "red"
        : progress <= 70
        ? "orange"
        : progress <= 95
        ? "yellow"
        : "green";
    }
  },
  methods: {
    deleteActivity() {
      store.deleteActivity(this.activity);
    }
  }
};
</script>

<style lang="scss" scoped>
.post {
  margin-bottom: 5px;
}
.activity-title {
  margin-bottom: 5px;
}
.activity-settings {
  float: right;
  font-size: 22px;
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


