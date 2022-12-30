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
        <tr v-for="(invoice, i) in invoices" v-bind:key="i" class="list">
          <td>{{ invoice.orderNumber }}</td>
          <td>{{ invoice.buyers.name }}</td>
          <td>{{ invoice.providers.name }}</td>
          <td>{{ convertDate(invoice.emissionDate) }}</td>
          <td>{{ invoice.value }}</td>
          <td>{{ invoice.orderStatusBuyer }}</td>
          <td>Dados do cedente</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useInvoiceStore } from "@/stores/invoices";
import { convertDate } from "@/helpers/convertDate";

export default defineComponent({
  setup() {
    const store = useInvoiceStore();

    onMounted(() => {
      store.fetchInvoices();
    });

    const { invoices } = storeToRefs(store);

    return { invoices };
  },
  data() {
    return {
      convertDate,
    };
  },
});
</script>
<style scoped>
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
  width: 120px;
}

tr {
  border: 1px solid #dfe2eb;
  border-radius: 6px;
  padding: 1rem;
}

td {
  color: #4d5566;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 1rem 0;
  margin-bottom: 1rem;
}

.list {
  box-shadow: 1px 1px 1px 1px #dfe2eb;
  border-radius: 0.5rem;
}
</style>
