


const app = Vue.createApp({
    data() {
        return {
            playerHealth:100,
            monsterHealth:100,
            currentRound:0,
            winner: null,
            logMessages :[]
        };
    },
    methods: {
        attackMonster(){
         this.currentRound++
         const attackValue = Math.floor(Math.random() * (12 - 5)) +5;
         this.monsterHealth = this.monsterHealth - attackValue;
         this.addLoagMessage('player','attack',attackValue);
         this.attackPlayer();
         
        },
        attackPlayer(){  
        const attackValue = Math.floor(Math.random() * (15 - 8)) +8;
        this.playerHealth -= attackValue;
        this.addLoagMessage('monster','attack',attackValue);
        },
        specialAttack(){
            this.currentRound++
            const attackValue = Math.floor(Math.random() * (20 - 10)) +10;
            this.monsterHealth = this.monsterHealth - attackValue;
            this.addLoagMessage('player','attack',attackValue);
            this.attackPlayer();
        },
        healPlayer(){
            this.currentRound++
            const healValue = Math.floor(Math.random() * (20 - 8)) +8;
            if(this.playerHealth + healValue >100){
                this.playerHealth = 100;
            }else{
            this.playerHealth += healValue;
            this.addLoagMessage('player','heal',healValue);
            }
            this.attackPlayer();
        },
        startGame(){
            this.monsterHealth = 100;
            this.playerHealth =100;
            this.winner = null;
            this.currentRound = 0;
            this.logMessages =[]
        },
        surrender(){
            this.winner = 'monster';
        },
        addLoagMessage(who,what,value){
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        }
    },
    computed :{
        monsterBarStyles(){
            if(this.monsterHealth < 0){
                return { width:'0%' };
            }
            return {width: this.monsterHealth + '%'}
        },
        playerBarStyles(){
            if(this.playerHealth < 0){
                return { width:'0%' };
            }
            return {width: this.playerHealth + '%'}
        }
    },
    watch: {
      playerHealth(value){
        if(value <= 0 && this.monsterHealth <= 0){
            this.winner = 'draw';
        }else if(value <= 0){
            this.winner ='monster';
        }
      },
      monsterHealth(value){
        if(value <= 0 && this.playerHealth <= 0){
            this.winner = 'draw';
        }else if(value <= 0){
            this.winner ='player';
        }
      }  
    }
}).mount('#game');