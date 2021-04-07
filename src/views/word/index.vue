<template>

  <el-table
    :data="tableData" style="width: 50%">

    <el-table-column label="字母拼写" prop="letterSpell"></el-table-column>

    <el-table-column label="所在页面" prop="page"></el-table-column>

    <el-table-column label="所属列表" prop="belongList"></el-table-column>

    <el-table-column align="right">

      <template #default="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑 </el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除 </el-button>
      </template>

    </el-table-column>
  </el-table>

</template>

<script>
    export default {
        name: "word",
        data() {
            return {
                tableData: null,
                search: ''
            }
        },
        created() {
            this.getList();
            console.log("this.tableData: ", this.tableData)
        },
        methods: {
            getList() {
                this.$api.word.listAllWords()
                    .then(res => {
                        console.log("listAllWords - res: ", res)
                        this.tableData = res
                    }).catch(function (res) {
                    console.log("listAllWords - catch", res)
                })
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
