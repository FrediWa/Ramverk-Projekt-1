<template>
    <div>
        <h1>{{bigTitle}} </h1>
        <h2>{{titleText}}</h2>
        <p>{{contentText}}</p>
    </div>

</template>


<script>
export default {
    props: ['bigTitle', 'titleText', 'contentText']
};

</script>

<style scoped>

p{
    font-size: 1.5vw;
}
h1{
    font-size: 3.5vw;
    font-weight: 400;
}
h2{
    font-size:2.2vw;
}
</style>

