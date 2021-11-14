<template>
  <div class="calendar-wrapper">
      <div class="calendar-row"
           v-for="day in days"
           v-bind:key="day"
        >
          <div id="card" class="day-card unactive" 
               v-on:click="giveActive()"
            
            >
              <div class="card-info">
                <p class="name">{{ day }}</p>
                <p class="day">{{  }}</p>
              </div>
             <div class="dot-wrapper">
                    <div class="dot-status" />
                    <div class="dot-status" />
                </div>
          </div>
<!-- 
            <div id="card" class="day-card unactive">
                 <div class="card-info">
                    <p class="name">Tue</p>
                    <p class="day">2</p>
                 </div>    
               <div class="dot-wrapper">
                    <div class="dot-status" />
                    <div class="dot-status" />
                </div>
            </div>

            <div id="card" class="day-card unactive">
                 <div class="card-info">
                    <p class="name">Wed</p>
                    <p class="day">3</p>
                 </div>    
            <div class="dot-wrapper">
                    <div class="dot-status" />
                    <div class="dot-status" />
                </div>
            </div>

            <div id="card" class="day-card unactive">
                 <div class="card-info">
                    <p class="name">Thu</p>
                    <p class="day">4</p>
                 </div>          
               <div class="dot-wrapper">
                    <div class="dot-status" />
                    <div class="dot-status" />
                </div>
            </div>

            <div id="card" class="day-card unactive">
                 <div class="card-info">
                    <p class="name">Fri</p>
                    <p class="day">5</p>
                 </div>
                <div class="dot-wrapper">
                    <div class="dot-status" />
                    <div class="dot-status" />
                </div>
            </div>

             <div id="card" class="day-card unactive">
                 <div class="card-info">
                    <p class="name">Sat</p>
                    <p class="day">6</p>
                 </div>
                 <div class="dot-wrapper">
                    <div class="dot-status" />
                    <div class="dot-status" />
                </div>
            </div>

             <div id="card" class="day-card unactive">
                 <div class="card-info">
                    <p class="name">Sun</p>
                    <p class="day">7</p>
                 </div>    
                 <div class="dot-wrapper">
                    <div class="dot-status" />
                    <div class="dot-status" />
                </div>          
            </div> -->

      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            months: [1,2,3,4,5,6,7,8,9],
            days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
    },
    methods: {
        giveActive: () => {
            let dayCards = document.querySelectorAll('#card') 
            Array.from(dayCards)
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
        color: #FFF;
        text-shadow: 0px 0px 15px rgba(255, 255, 255, 0.672);
        background-color: rgb(0, 0, 0);
    }
    .unactive {
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