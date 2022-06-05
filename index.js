// oops: object oriented programming
// three ways to create an object
//1. let obj={}  object leiteral
//2. object.create()
//3. constructor function 
//4. classes

// create a login/signup system
// User
// Admin
// Author

// functionality


// 1. User can sighnup  ValidateUsername validatwPassword
// 2. user can login

// 1. encapsulation
class User{
    #password;
    constructor(name){
        this.name=name
    }
    #validateUsername(Username){
// validating UseraName through if else
// by default, we are simulating all username are correct
        return true
    }

    #validatePassword(Password){
// validating password through if else
// by default, we are simulating all password are correct
        return true

    }

    signUp(Username, password){
        let isvalidated= false

        // when user input valid username and password

        isvalidated= this.#validateUsername(Username) && this.#validatePassword(password)

        if(isvalidated){
            this.Username=Username
            this.#password=password

            console.log(`user sighned up successfuly`)
        }
        else{
            console.log(`sighnup failed`)
        }

    }

    login(username, password){
        if(username===this.Username && password===this.#password){
            console.log(`login successfull`)
        }
        else{
            console.log(`authentication failed`)
        }
    }
    //   changePassword(newPassword) {
  //     this.#password = newPassword;
  //   }

  set password(newPassword) {
    this.#password = newPassword;
  }

  get naamBatao() {
    return this.name;
  }

}

class Author extends User{
    constructor(name){

        super(name)
        // this.type= `author`
    }
}
class Admin extends User {
    constructor(name) {
      super(name);
    }
  }
  
  // let a1 = new Author('vivekananda');
  // console.log('a1:', a1);
  
  // let u1 = new User('pablo');
  
  // //clicked on button
  
  // u1.signUp('real_pablo_official_7', 'pablo123');
  
  // u1.login('real_pablo_official_7', 'pablo123');
  
  // let a1 = new Author('vivekananda');
  
  // a1.signUp('vivekananda_', 'vivekananda123');
  // console.log('a1:', a1);
  
  let admin1 = new Admin('babu bhaiyaa');
  
  admin1.signUp('paisahipaisa', 'khopodi_tod');

  admin1.login('paisahipaisa', 'khopodi_tod');

// admin1.password('are ja re, tu jaa re');

admin1.password = 'are ja re, tu ja re';

// console.log('admin1:', admin1.name);

console.log(admin1.naamBatao);

//will user need u1.validateUsername()

//en-capsulation

//change of password
  