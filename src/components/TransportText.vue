<template>
    <div>
        <h2>{{titleText}}</h2>
        <p>{{contentText}}</p>
    </div>

</template>


<script>
export default {
    props: ['titleText', 'contentText']
};

</script>

