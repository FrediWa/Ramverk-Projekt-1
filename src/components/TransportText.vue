<template>
    <div>
        <h1>{{titleText}}</h1>
        <p>{{contentText}}</p>
    </div>

</template>


<script>
export default {
    props: ['titleText', 'contentText']
};

</script>

