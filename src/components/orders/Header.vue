<template>
    <div class="row">
        <div class="col-md-12">
            <div>
                <h2>Orders In</h2>
            </div>
            <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" :style="{width:(orderCount/maxCount) * 100 + '%'}">

                        {{ orderCount }} / {{ maxCount }}

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:
            ['orderCount','maxCount']
        }
</script>

<style>

</style>