<template>
  <div class="container">
    <div>
      <aside class="sidebarContainer">
        <img src="@/assets/logo.png" alt="cashforce's logo" />
        <div class="handshakeContainer">
          <img src="@/assets/handshake.svg" alt="image of a handshake" />
          <p>Notas Fiscais</p>
        </div>
      </aside>
    </div>
    <main class="mainContainer">
      <header>
        <section class="invoiceHeader">
          <img src="@/assets/hands.svg" alt="image of a handshake" />
          <h3>Notas Fiscais</h3>
        </section>
        <p>Visualize as notas fiscais que você tem</p>
      </header>
      <InvoiceTable :invoices="invoices" />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InvoiceTable from "@/components/InvoiceTable.vue";
import axios from "axios";

export default defineComponent({
  name: "InvoiceView",
  data() {
    return {
      invoices: [],
    };
  },
  methods: {
    async getInvoices() {
      const teste = await axios("http://localhost:3333/invoices/1")
        .then(({ data }) => (this.invoices = data))
        .catch((error) => console.error(error.message));

      return teste;
    },
  },
  mounted() {
    this.getInvoices();
  },
  components: { InvoiceTable },
});
</script>

<style scoped>
.container {
  display: flex;
}

.sidebarContainer {
  display: flex;
  /* border: solid red 1px; */
  flex-direction: column;
  justify-content: start;
  background-color: #fbfdfe;

  height: 97vh;
  width: 25rem;

  border-radius: 0.93rem 0px 0px 0.93rem;
  box-shadow: 4px 4px #e1e5ec80;
}

.sidebarContainer img {
  width: 12rem;
}

.handshakeContainer {
  display: flex;
  justify-content: center;

  margin-top: 1.5rem;
  width: 12rem;

  border-left: 0.25rem solid #00ad8c;
  border-start-start-radius: 0.25rem;
}

.handshakeContainer p {
  color: #00ad8c;
  font-size: 0.875rem;
  font-weight: bold;
  margin-left: 20px;
}

.handshakeContainer > img {
  height: 14.0625px;
  width: 24px;
  margin-top: 12px;
}

.mainContainer {
  height: 97vh;
  background-color: #ffff;
}

header {
  margin-top: 4rem;
}

.invoiceHeader {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 9px;

  width: 182px;
  height: 28px;
}

.invoiceHeader > img {
  margin-right: 10px;
  width: 2rem;
}

.invoiceHeader h3 {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 9px;

  width: 182px;
  height: 28px;
  color: #021B51;
}

.mainContainer p {
  /* border: solid red 1px; */
  color: #727d94;
}
</style>
