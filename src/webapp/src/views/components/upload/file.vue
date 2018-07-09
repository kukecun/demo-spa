<template>
  <div class="g-file">
    <input type="file" name="file" ref="fileDom" @change="fileSelected" value="fileToUpload" />

    <ul>
      <li v-for="(file, index) in fileList" ref="fileItem" :key="file.name">
        <div>{{file.name}}</div>
        <div>{{getFileSize(file.size)}}</div>
        <div>{{file.type}}</div>
        <div>{{index}}</div>
        <div class="g-file-progress"><span ref="progressNumber"></span></div>

        <a href="javascript:" @click="deleteFile(index)" v-if="isDelete">删除</a>
      </li>
    </ul>

    <input type="button" @click="uploadFile" value="Upload" />
  </div>
</template>
<script>

import Util from '@/lib/util';

export default {
  data () {
    return {
      fileList: [],
      isDelete: true,
    };
  },
  props: ['multi', 'fileUrl', 'fileAccept'],
  computed: {
    
  },
  methods: {

    // 筛选选中文件列表
    fileSelected(){

      this.fileList = [];
      this.isDelete = true;

      let files = this.$refs.fileDom.files;
      for(let i=0; i<files.length; i++) {
        this.fileList.push(files[i]);
      }

      this.$refs.fileDom.value = "";
    },

    // 执行上传
    uploadFile(){
      this.isDelete = false;
      this.fileList.forEach((file, index) => {
        this.xhrList(file, index);
      });
    },

    // 建立http文件上传请求
    xhrList(file, index){
      let xhr = new XMLHttpRequest();
      let fd = new FormData();

      fd.append("file", file);

      xhr.upload.addEventListener("progress", (evt) => { this.uploadProgress(evt, index)}, false);
      xhr.addEventListener("load", (evt) => { this.uploadComplete(evt)}, false);
      xhr.addEventListener("error", (evt) => { this.uploadFailed(evt)}, false);
      xhr.addEventListener("abort", (evt) => { this.uploadCanceled(evt)}, false);
      xhr.open("POST", this.fileUrl);

      xhr.send(fd);
    },

    // 计算当前上传进度
    uploadProgress(evt, index) {
      if (evt.lengthComputable) {
        let percentComplete = Math.round(evt.loaded * 100 / evt.total);
        this.$refs.progressNumber[index].style.width = percentComplete.toString() + '%';
      } else {
        this.$refs.progressNumber[index].innerHTML = '无法计算文件大小，请查看文件是否正常！';
      }
    },

    // 上传成功后调用
    uploadComplete(evt, index) {
       console.log(evt.target.responseText)
    },

    // 上传失败调动
    uploadFailed(evt) {
      console.log(evt)
    },

    // 上传取消调用
    uploadCanceled(evt) {
      console.log(evt)
    },

    // 获取上传文件大小
    getFileSize(size){

      let fileSize = 0;

      if (size > 1024 * 1024){
        fileSize = (Math.round(size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
      } else {
        fileSize = (Math.round(size * 100 / 1024) / 100).toString() + 'KB';
      }

      return fileSize;
    },

    // 删除当前上传文件
    deleteFile(index){
      this.fileList.splice(index, 1);
    },
  },

  mounted () {

    // 配置单文件还是多文件上传
    if(this.multi) this.$refs.fileDom.setAttribute("multiple", true);

    // 配置文件类型
    //this.$refs.fileDom.setAttribute("accept", this.fileAccept);
  }
};
</script>
