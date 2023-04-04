<script>
    export let title = "Ninja Gaming"
</script>

<div class="title">
    <img src="/google-controller.svg" alt="site logo">
    <h1>{title}</h1>
</div>


<style >
    .title {
        display: flex;
    }
    .title img {
        /* height: 24px; */
        width: 24px;
        display: inline-block;
        filter:invert(88%) sepia(18%) saturate(886%) hue-rotate(199deg) brightness(100%) contrast(90%);
    }
    .title h1 {
        margin-left: 10px;
    }
</style>