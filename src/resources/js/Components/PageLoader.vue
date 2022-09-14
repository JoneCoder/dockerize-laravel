<template>
    <div class="se-pre-con">
        <div class="pre-loader">
            <img class="img-fluid" src="../assets/images/loadergif.gif" alt="loading">
        </div>
    </div>
</template>

<style scoped>
.se-pre-con {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background-color: #fff; }
.se-pre-con .pre-loader {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%; }
.se-pre-con .pre-loader p {
    margin-top: 5px; }
.se-pre-con .loaderpage {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite;
    /* Safari */
    animation: spin 2s linear infinite;
    position: absolute;
    top: 50%;
    left: 50%; }
</style>
