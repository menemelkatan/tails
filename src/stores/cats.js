import { defineStore } from "pinia"
import { createPinia } from "pinia"
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export const catsStore = defineStore({
  id: "cats_store",
  state: () => ({
    //usd Data
    catsList: JSON.parse(localStorage.getItem("catsList"))
  }),
  actions: {
    getCatsData: async (state) => {
      var myHeaders = new Headers();
      myHeaders.append("Cookie", "connect.sid=s%3A6vG4wUK_S1Fq_mhNMWtQEspMM0Yzd_A-.QJHIMSqZdYCXEHfs%2BUM1aor60wL058IMbcWTwP4tb2M");

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      if (!localStorage.getItem("catsList")) {
        fetch("https://cat-fact.herokuapp.com/facts", requestOptions)
          .then(response =>
            response.text()
          )
          .then(data => {
            state.catsList = JSON.parse(data);
            localStorage.setItem("catsList", JSON.stringify(state.catsList));
          })
          .catch(error => console.log('error', error));
      }
      else {
        fetch("https://cat-fact.herokuapp.com/facts", requestOptions)
          .then(response =>
            response.text()
          )
          .then(data => {
            if (state.catsList !== JSON.parse(localStorage.getItem("catsList"))) {
              state.catsList = JSON.parse(data);
              localStorage.setItem("catsList", JSON.stringify(state.catsList));
            }
          })
          .catch(error => console.log('error', error));
      }
      },
  },
  persist: true,
});
