<template>

  <avue-crud
    :table-loading="listLoading"
    :data="data"
    :option="option"
    @size-change="sizeChange"
    @current-change="currentChange"
    :page.sync="page"
    @on-load="getList"
  >
    <!--    <template slot="menu" slot-scope="scope">-->
    <!--      <el-button-->
    <!--        style="color: red "-->
    <!--        :size="scope.size"-->
    <!--        :type="scope.type"-->
    <!--        @click.native.prevent="-->
    <!--              deleteStatisticsData(scope.row, data);-->
    <!--            "-->
    <!--      >-->
    <!--        删除-->
    <!--      </el-button>-->
    <!--      <el-button-->
    <!--        :size="scope.size"-->
    <!--        :type="scope.type"-->
    <!--        @click.native.prevent="-->
    <!--              dialogVisible = true;-->
    <!--              getTableData(scope.row);-->
    <!--            "-->
    <!--      >查看-->
    <!--      </el-button>-->
    <!--    </template>-->
  </avue-crud>
  <!--  <el-table-->
  <!--    :data="tableData" style="width: 50%">-->

  <!--    <el-table-column label="字母拼写" prop="letterSpell"></el-table-column>-->

  <!--    <el-table-column label="所在页面" prop="page"></el-table-column>-->

  <!--    <el-table-column label="所属列表" prop="belongList"></el-table-column>-->

  <!--    <el-table-column align="right">-->

  <!--      <template #default="scope">-->
  <!--        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑 </el-button>-->
  <!--        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除 </el-button>-->
  <!--      </template>-->

  <!--    </el-table-column>-->
  <!--  </el-table>-->

</template>

<script>
export default {
  name: "word",
  data() {
    return {
      tableData: null,
      search: '',
      listLoading: true,
      form: {},
      //分页信息
      page: {
        total: 0, // 总页数
        currentPage: 1, // 当前页数
        pageSize: 10, // 每页显示多少条,
        isAsc: false, //是否倒序
      },
      //表单数据
      data: [],
      option: {
        title: "表格",
        titleSize: "h3",

        selection: false,
        //勾选tip
        tip: false,
        align: "center",
        menuAlign: "center",
        //查看按钮
        viewBtn: false,
        editBtn: false,

        //删除按钮
        delBtn: false,
        //新增按钮
        addBtn: false,
        //刷新按钮
        refreshBtn: false,
        //搜索按钮
        searchBtn: false,
        //显隐按钮
        columnBtn: false,
        //表单信息
        column: [
          {
            label: "字母拼写",
            prop: "letterSpell",
          },
          {
            label: "所在页面",
            prop: "page",
          },
          {
            label: "所属列表",
            prop: "belongList",
          },
        ],
      },
    }
  },
  created() {
    console.log("created")
  },
  methods: {
    getList(page, params) {
      // console.log("this.page", page, params)
      this.$api.word.page(
        Object.assign(
          {
            current: page.currentPage,
            size: page.pageSize
          },
          params)
      ).then(response => {
        // console.log("getList - response", response);
        if (response.code === 200) {
          this.data = response.data.records;
          this.page.total = response.data.total;
        } else {
          this.$message.warning("数据为空");
        }
        this.listLoading = false;
      });
    },
    sizeChange(pageSize) {
      // console.log("sizeChange", pageSize)
      this.page.pageSize = pageSize
      this.getList(this.page)
    },
    currentChange(current) {
      // console.log("currentChange", current)
      this.page.currentPage = current
      this.getList(this.page)
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },
}
</script>

<style>

</style>


<style xml:lang="scss">

</style>
