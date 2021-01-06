<template>
    <div>
        <button
            class="decreise-button"
            type="button"
            @click="decreaseCount"
        >
        -
        </button>
        <input 
        type="number"
        class="count-input"
        :value="count"
        :min="minCount"
        :max="maxCount"       
        />
        <button
            class="increise-button"
            type="button"
            @click="increaseCount"
        >
        +
        </button>
    </div>
</template>

<script>
export default {
    name: "Counter",
    data(){
        return{
            maxCount: 5,
            minCount: 1,
            count: 1
        }
    },
     props: {
        film: {
        type: Object
    },
  },
    methods:{
        increaseCount(){
            if(this.count < this.maxCount){
                this.count++
            }
            console.log('film', this.film);
        },
        decreaseCount(){
            if(this.count > this.minCount){
                this.count--
                this.film.rate = this.count
            }
            console.log('film', this.film);

    }
    }
}
</script>

<style scoped>
.increise-button, .decreise-button{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid white;
    background: transparent;
    color: wheat;
    font-weight: 700;
}
.count-input{
    display: inline-block;
    width: 30px;
    height: 20px;
    padding: 0;
    margin: 0px 6px 0px 6px;
    background: transparent;
    color: white;
    border: white;
}
</style>