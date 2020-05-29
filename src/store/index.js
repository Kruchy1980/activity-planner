import fakeAPI from '@/lib/fakeAPI';
import Vue from 'vue';


const store = {
    state: {
        activities: {},
        categories: {}
    },
    generateUid() {
        return Math.floor(new Date() * (Math.random() * 16));
    },

    fetchActivities() {
        return fakeAPI.getData('activities', { force: 1 })
            .then(activities => {
                const keys = Object.keys(activities)
                Object.keys(activities).forEach(key => {
                    this.setItem('activities', key, activities[key])
                });
                return activities;
            });
    },
    fetchCategories() {
        return fakeAPI.getData('categories', { force: 1 })
            .then(categories => {
                Object.keys(categories).forEach(key => {
                    this.setItem('categories', key, categories[key])
                });
                return categories;
            });
    },
    fetchUsers() {
        return {
            name: "Jakub Maliniak",
            id: "-Aj34jknvncx98812"
        }
    },
    createActivity(activity) {
        activity.id = this.generateUid();
        activity.progress = 0;
        activity.created = new Date();
        activity.updatedAt = new Date();
        return fakeAPI.post('activities', activity)
            .then(createdActivity => {
                this.setItem('activities', createdActivity.id, createdActivity);
                return createdActivity;
            });
    },
    updateActivity(activity) {
        activity.updatedAt = new Date();
        return fakeAPI.post('activities', activity)
            .then(updatedActivity => {
                this.setItem('activities', updatedActivity.id, updatedActivity);
                return updatedActivity;
            })
    },

    deleteActivity(activity) {
        return fakeAPI.deletePost('activities', activity)
            .then(deletedActivity => {
                Vue.delete(this.state.activities, activity.id);
                return deletedActivity;
            });
    },
    setItem(resource, id, item) {
        Vue.set(this.state[resource], id, item);
    }
}

export default store;