const data = {
    activities: {},
    categories: {
        "1546969049": { text: "books", id: '1546969049' },
        "1546969225": { text: "movies", id: '1546969225' }
    }
}


class FakeAPI {
    storingData(data) {
        localStorage.setItem('activity_data', JSON.stringify(data));
    };
    getLocalData() {
        const activityData = localStorage.getItem('activity_data');
        return JSON.parse(activityData);
    };

    canContinue() {
        const rundomNumber = Math.floor(Math.random() * 10);
        if (rundomNumber > 5) {
            return true;
        }
        return false;
    };

    getData(resource, { force = 0 }) {
        return new Promise((resolve, reject) => {
            this.asyncCall(() => {
                if (force || this.canContinue()) {
                    const data = this.getLocalData();
                    resolve({...data[resource] });
                } else {
                    reject(`Can not upload ${resource}`);
                }
            });

        });
    };
    post(resource, item) {
        return new Promise((resolve, reject) => {
            const data = this.getLocalData();
            data[resource][item.id] = item;
            this.storingData(data);
            resolve(item);
        })
    };
    deletePost(resource, item) {
        return new Promise((resolve, reject) => {
            const data = this.getLocalData();
            delete data[resource][item.id];
            this.storingData(data);
            resolve(item);
        })
    };
    asyncCall(callback) {
        setTimeout(callback, 1000);
    };
}

export default new FakeAPI();