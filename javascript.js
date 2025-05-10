
class user{
    

    constructor(name,email){
     this.name=name;
     this.email=email;
    }


    viewData(name,email){
        console.log(`your name is ${name}`);
        console.log(`your email is ${email}`);
    }
}

let obj = new user("hamza","hamza@gmail.com");
class admin extends user{

constructor(name,email){
    console.log("this is admin class");
super(name,email);
}

editData(){
    console.log("admin has power to edit your data");
}

}
let min =new admin("admin","admin@gmail.com");


