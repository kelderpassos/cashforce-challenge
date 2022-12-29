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
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InvoiceTable",
  components: {},
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
