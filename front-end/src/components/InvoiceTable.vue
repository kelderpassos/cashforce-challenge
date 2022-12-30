<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>NOTA FISCAL</th>
          <th>SACADO</th>
          <th>CEDENTE</th>
          <th>EMISSÃO</th>
          <th>VALOR</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(invoice, i) in invoices" v-bind:key="i">
          <td>{{ invoice.orderNumber }}</td>
          <td>{{ invoice.buyers.name }}</td>
          <td>{{ invoice.providers.name }}</td>
          <td>{{ invoice.emissionDate }}</td>
          <td>{{ invoice.value }}</td>
          <td>{{ invoice.orderStatusBuyer }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";
import { storeToRefs } from "pinia";
import { useInvoiceStore } from "@/stores/invoices";

export default defineComponent({
  setup() {
    const store = useInvoiceStore();

    onMounted(() => {
      store.fetchInvoices();
    });

    const { invoices } = storeToRefs(store);

    return { invoices };
  },
});
</script>
<style>
table {
  border-collapse: separate;
  border-spacing: 0 1rem;
  text-align: center;
  width: 100%;
}
th {
  color: #a1a8b8;
  font-size: 0.75rem;
  font-weight: 700;
  padding-bottom: 1rem;
}
td {
  color: #4d5566;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 1rem 0;
}
</style>
