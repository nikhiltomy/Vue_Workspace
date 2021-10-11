<template>
  <div>
    <button @click="activteModel">Add Task</button>

    <model-dialog
      @close-form="closebutton"
      v-if="isActive === true"
      @saveto-app="saveapp"
    ></model-dialog>

    <div v-if="isActive === false">
      <div class="list">
        <ul>
          <li>Title</li>
          <li>Description</li>
          <li>StartDate</li>
          <li>EndDate</li>
          <li>Assigned Person</li>
          <li>Time Entry</li>
          <li>Time Consumed</li>
        </ul>
      </div>
      <new-profile
        v-for="(data, index) in storedResources"
        :key="data.id"
        :index="index"
        :title="data.Title"
        :description="data.Description"
        :stertdate="data.StertDate"
        :enddate="data.EndDate"
        :assignedperson="data.AssignedPerson"
        :totalTime="data.Totaltime"
        @save-time = "updateUserTime"
      >
      </new-profile>
    </div>
    <div>
     
    </div>
 <hr style="width:50%;text-align:left;margin-left:0">
  <p>Whole Time:{{wholeTime}}</p>
  <button @click="calculate">ClickMeeeeeeeee</button>
  </div>
</template>

<script>
import ModelDialog from "./components/ModelDialog.vue";
import NewProfile from "./components/NewProfile.vue";
export default {
  components: {
    ModelDialog,
    NewProfile,
  },
  computed:{
    
  },
  emits: ["close-form",'update-time'],
  data() {
    return {
      isActive: false,
      wholeTime:null,
      storedResources: [
        {
          id: "Vinayak",
          Title: "Task A",
          Description: "Big task",
          StertDate: "20-09-2021",
          EndDate: "25-09-2021",
          AssignedPerson: "Vinayak",
          Totaltime:null
        },
      ],
      
    };
  },
  // mounted() {
  //   if (localStorage.storedResources) {
  //     this.storedResources = JSON.parse(localStorage.storedResources);
  //   }
  // },
  // watch: {
    // storedResources(newNodes) {
    //   localStorage.storedResources = JSON.stringify(newNodes);
    // },
  // },
  methods: {
    activteModel() {
      this.isActive = true;
    },
    closebutton() {
      this.isActive = false;
    },
    calculate(){
      this.wholeTime = null;
      this.storedResources.map((item)=>{
       this.wholeTime += item.Totaltime;
      })
    },
    // removeItems() {
    //   this.storedResources = localStorage.removeItem(this.storedResources);
    //   this.storedResources = [{}];
    // },
    saveapp(inptitle, inpdes, inpstdate, inpenddate, inpperson) {
      const newdata = {
        Title: inptitle,
        Description: inpdes,
        StertDate: inpstdate,
        EndDate: inpenddate,
        AssignedPerson: inpperson,
        Totaltime:null
      };
      console.log(newdata);
      this.storedResources.push(newdata);
      this.isActive = false;
    },
    updateUserTime(tt,ind){
      console.log(tt);
      this.storedResources[ind].Totaltime =tt;
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.list ul:nth-child(odd) {
  background-color: #ddd;
}

.list ul:nth-child(even) {
  background-color: #fff;
}

/* big */
@media screen and (min-width: 600px) {
  .list {
    display: table;
    margin: 1em;
  }

  .list ul {
    display: table-row;
  }

  .list ul:first-child li {
    background-color: #444;
    color: #fff;
  }

  .list ul > li {
    display: table-cell;
    padding: 1em 2em;
  }
}

/* small */
@media screen and (max-width: 599px) {
  .list ul {
    border: solid 1px #ccc;
    display: block;
    list-style: none;
    margin: 1em;
    padding: 0.5em 1em;
  }

  .list ul:first-child {
    display: none;
  }

  .list ul > li {
    display: block;
    padding: 0.25em 0;
  }

  .list ul:nth-child(odd) > li + li {
    border-top: solid 1px #ccc;
  }

  .list ul:nth-child(even) > li + li {
    border-top: solid 1px #eee;
  }

  .list ul > li:before {
    color: #000;
    content: attr(data-label);
    display: inline-block;
    font-size: 75%;
    font-weight: bold;
    text-transform: capitalize;
    vertical-align: top;
    width: 50%;
  }

  .list p {
    margin: -1em 0 0 50%;
  }
}

/* tiny */
@media screen and (max-width: 349px) {
  .list ul > li:before {
    display: block;
  }

  .list p {
    margin: 0;
  }
}
</style>
