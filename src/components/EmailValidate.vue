<template>
    <div>
      <div v-for="(ticket, index) in tickets" :key="index">
        <label>Buyer {{ index + 1 }} Email:</label>
        <input type="email" v-model="ticket.email" :placeholder="ticket.emailError" @input="validateEmail(index)" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tickets: [
          { email: "", emailError: "" },
          { email: "", emailError: "" },
        ],
        usedEmails: [],
      };
    },
    methods: {
      validateEmail(index) {
        const email = this.tickets[index].email;
        if (this.usedEmails.includes(email)) {
          console.log("Email already used");
        } else {
          this.tickets[index].emailError = "";
          this.usedEmails[index] = email;
        }
      },
    },
  };
  </script>
  