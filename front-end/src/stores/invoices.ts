import { defineStore } from "pinia";
import axios from "axios";

export const useInvoiceStore = defineStore("invoice", {
  state: () => ({
    invoices: [],
  }),
  actions: {
    async fetchInvoices() {
      try {
        const { data } = await axios("http://localhost:3333/invoices/1");
        this.invoices = data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
