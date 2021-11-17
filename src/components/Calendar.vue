<template>
  <div class="calendar-wrapper">
      <div class="calendar-row"
           v-for="day in days"
           v-bind:key="day"
        >
          <div id="card" @click="setActive(day.id)" class="day-card unactive"> 
              <div class="card-info">
                <p class="name">{{ day.dayOfWeek }}</p>
                <p class="day">
                    {{ day.currDate }} 
                </p>
              </div>
             <div class="dot-wrapper">
                    <div class="dot-status" />
                    <div class="dot-status" />
                </div>
          </div>

      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            days: [
                { dayOfWeek: 'Mon', currDate: 16, id: 1 },
                { dayOfWeek: 'Tue', currDate: 17, id: 2 },
                { dayOfWeek: 'Wed', currDate: 18, id: 3 },
                { dayOfWeek: 'Thu', currDate: 19, id: 4 },
                { dayOfWeek: 'Fri', currDate: 20, id: 5 },
                { dayOfWeek: 'Sat', currDate: 21, id: 6 },
                { dayOfWeek: 'Sun', currDate: 22, id: 7 },                
            ],

            arr: [1,2,3],

            currDay: new Date().getDate(),
            currMonth: new Date().getMonth() + 1,
            currYear: new Date().getFullYear(),
            daysInMonth: new Date(this.currYear, this.currMonth, 0).getDate(),
             
            active: 'active'
        }
    },
    methods: {
        showDate() {
              let date = new Date();
              let month = date.getMonth() + 1;
              let year = date.getFullYear();

              let daysInMonth = new Date(year,month, 0).getDate()
              Array.from(daysInMonth)
        },
        setActive() {
            alert(this.days.id)
        }

    },
  

}
</script>

<style scoped>
/* Fonts: */
@import url('https://fonts.googleapis.com/css2?family=BenchNine:wght@700&display=swap');

.calendar-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    overflow-x: scroll;
    
    margin-left: 2rem;
}

.calendar-row {
    display: flex;
    align-items: center;

    width: 100%;
    height: 5rem;

    background-color: rgb(255, 255, 255);
}
    .day-card {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        min-width: 4rem;
        height: 4.5rem;

        margin-right: 1rem;

        text-align: center;
        font-family: 'BenchNine', sans-serif;
        font-size: 20px;

        color: #FFF;

        box-shadow: 1px 1px 1px black;
        border-radius: 14px;
    }
    .active {
        transition: 0.3s;
        color: #FFF;
        text-shadow: 0px 0px 15px rgba(255, 255, 255, 0.672);
        background-color: rgb(0, 0, 0);
    }
    .unactive {
        transition: 0.3s;
        color: #000;
        background-color: #fff;

        box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.207);

    }

        .card-info {
            display: flex;
            flex-direction: column;
        }

.dot-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: 5px;

}
.dot-status {
    width: 5px;
    height: 5px;

    margin-right: 5px;
    
    box-shadow: 0px 0px 10px 2px rgba(138, 20, 197, 0.356);

    border-radius: 50%;
    background: rgb(138, 20, 197);
}
</style>