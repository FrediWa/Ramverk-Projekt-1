<template>
    <div>
        <h1>{{firstTitle}} </h1>
        <h2>{{titleText}}</h2>
        <p>{{contentText}}</p>
    </div>

</template>


<script>
export default {
    props: ['firstTitle', 'titleText', 'contentText']
};

</script>

