function Account(name, age, region) {
    this.name = name;
    this.age = age;
    this.region = region;
    console.log(this.name);
    console.log(this.region);
  }
  
  let user = new Account('oyatillo', 24, 'Andijon');
  console.log(user.age);
 
