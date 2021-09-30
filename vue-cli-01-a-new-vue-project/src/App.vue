<template>
    <div>
       <h2>My Friends</h2>
       <ul>
        <friend-contact></friend-contact>
       </ul> 
    </div>
</template>

<script>
  export default {
      data() {
          return {
              friends : [
                  {
                      id:'nikhil',
                      name:'Nikhil Tomy',
                      phone:"9497274176",
                      email:"nikhiltomy7176@gmail.com"
                  },
                  {
                      id:'meera',
                      name:'Meera VA',
                      phone:"9497234176",
                      email:"meera@gmail.com"
                  }
              ]
          }
      },
  }  
</script>