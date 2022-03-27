<template>
  <div v-loading="loading">
    <div class="filter-bar">
      <el-form inline>
        <el-form-item label="縣市">
          <el-select filterable v-model="search.city">
            <el-option :label="'全部'" :value="''" />
            <el-option v-for="(city, index) in cityList" :key="index" :label="city" :value="city" />
          </el-select>
        </el-form-item>
        <el-form-item label="開始日期">
          <el-date-picker
            v-model="search.startDt"
            value-format="YYYY-MM-DD"
            :disabled-date="disabledStartDate"
            type="date"
            placeholder="開始日期"
          />
        </el-form-item>
        <el-form-item label="結束日期">
          <el-date-picker
            v-model="search.endDt"
            value-format="YYYY-MM-DD"
            :disabled-date="disabledEndDate"
            type="date"
            placeholder="結束日期"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getSearch">查詢</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="clear">清除</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table
      stripe
      :default-sort="{ prop: 'a02', order: 'descending' }"
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column prop="a01" label="個案研判日" />
      <el-table-column prop="a02" sortable label="個案公佈日" />
      <el-table-column prop="a03" label="縣市" />
      <el-table-column prop="a04" label="區域" />
      <el-table-column prop="a05" label="新增確診人數" />
      <el-table-column prop="a06" label="累計確診人數" />
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
  setup() {
    const tableData = reactive([]);
    const search = reactive({
      city: null,
      startDt: null,
      endDt: null,
    });
    const searching = reactive({
      city: null,
      startDt: null,
      endDt: null,
    });
    const cityList = reactive([]);
    const loading = ref(false);
    const page = ref(1);
    const totalElement = ref(10);

    const getData = async () => {
      loading.value = true;
      tableData.splice(0);
      const res = await BackendApi.getData({
        page: page.value,
        ...searching,
      });
      if (res.code === 200) {
        res.data.content.forEach((e) => {
          tableData.push(e);
        })
        // Object.assign(tableData, res.data.content);
        totalElement.value = res.data.totalElement
      }
      loading.value = false;
    };

    const getCityList = async () => {
      const res = await BackendApi.getCityList();
      if (res.code === 200) {
        res.data.forEach((e) => {
          cityList.push(e);
        })
      }
    }

    const getSearch = () => {
      Object.keys(search).forEach((key) => {
        searching[key] = search[key];
      });
      page.value = 1;
      getData();
    }

    const clear = () => {
      reset();
      getData();
    }

    const reset = () => {
      Object.keys(search).forEach((key) => {
        search[key] = null;
        searching[key] = null;
      });
      page.value = 1;
    }

    const currentChange = (e) => {
      page.value = e;
      getData();
    };

    const disabledStartDate = (time) => {
      return !search.endDt ? false : time.getTime() > new Date(search.endDt).getTime();
    }

    const disabledEndDate = (time) => {
      return time.getTime() > Date.now() || time.getTime() < new Date(search.startDt).getTime();
    }

    onMounted(() => {
      getCityList();
      getData();
    });

    return {
      loading,
      tableData,
      cityList,
      search,
      searching,
      totalElement,
      page,
      currentChange,
      getSearch,
      clear,
      disabledStartDate,
      disabledEndDate
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
