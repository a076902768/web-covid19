<template>
  <div v-loading="loading">
    <div class="filter-bar">
      <el-form>
        <el-form-item label="縣市">
          <el-select v-model="searching.city" @change="changeCity">
            <el-option :label="'全部'" :value="''" />
            <el-option v-for="(city, index) in cityList" :key="index" :label="city" :value="city" />
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <el-table stripe :data="tableData" style="width: 100%">
      <el-table-column prop="a01" label="個案研判日" />
      <el-table-column prop="a02" label="個案公佈日" />
      <el-table-column prop="a03" label="縣市" />
      <el-table-column prop="a04" label="鄉鎮" />
      <el-table-column prop="a05" label="性別" />
      <el-table-column prop="a07" label="年齡層" />
    </el-table>
    <el-pagination
      layout="total, prev, pager, next"
      :total="totalElement"
      :current-page="page"
      @current-change="currentChange"
    />
  </div>
</template>

<script>
import { defineComponent, reactive, ref, onMounted } from 'vue'
import BackendApi from '../assets/js/api/backendApi';

export default defineComponent({
  name: 'App',
  setup() {
    const tableData = reactive([]);
    const searching = reactive({
      city: '',
    });
    const cityList = reactive([]);
    const loading = ref(false);
    const page = ref(1);
    const totalElement = ref(10);

    const getData = async () => {
      loading.value = true;
      const res = await BackendApi.getData({
        page: page.value,
        ...searching,
      });
      if (res.code === 200) {
        Object.assign(tableData, res.data.content);
        totalElement.value = res.data.totalElement
      }
      loading.value = false;
      console.log(456);
      console.log(res);
    };

    const getCityList = async () => {
      const res = await BackendApi.getCityList();
      if (res.code === 200) {
        res.data.forEach((e) => {
          cityList.push(e);
        })
      }
    }

    const currentChange = (e) => {
      page.value = e;
      getData();
    };

    const changeCity = () => {
      page.value = 1;
      getData();
    }

    onMounted(() => {
      getCityList();
      getData();
    });

    return {
      loading,
      tableData,
      cityList,
      searching,
      totalElement,
      page,
      currentChange,
      changeCity,
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
