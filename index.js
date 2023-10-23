// Working with object
const employees = [
    {
      id: "C101",
      name: "Varun",
      role: "Junior Web Developer",
      experience: "2 Years",
      payout: "25000",
    },
    {
      id: "C102",
      name: "Srinika",
      role: "Junior Web Developer",
      experience: "1 Year",
      payout: "20000",
    },
    {
      id: "C103",
      name: "Rakshitha",
      role: "Front End Developer",
      experience: "3 Years",
      payout: "30000",
    },
    {
      id: "C104",
      name: "Hema",
      role: "Junior Web Developer",
      experience: "3 Years",
      payout: "25000",
    },
    {
      id: "C105",
      name: "Deepak",
      role: "Front End Developer",
      experience: "4 Years",
      payout: "35000",
    },
    {
      id: "C106",
      name: "Sakthi",
      role: "Back End Developer",
      experience: "2 Years",
      payout: "300",
    },
]
const data =employees.map(function({name}){
    return name;
});
console.log(data);




