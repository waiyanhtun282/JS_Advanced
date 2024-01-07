// ProtoType
let dragon={
    name:'Leo',
    fire:true,
    fight(){
        return 5;
    },
    sing(){
      if(this.fire){
          return ` I am ${this.name} the breathe o fire`;
      }
    }
};


let football ={
    name:'naymar',
    fight(){
        return 1
    }
}

const player =dragon.sing.bind(football);
console.log(player());