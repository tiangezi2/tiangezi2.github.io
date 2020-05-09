<template>
  <div class="BookLabel">
    <h3>
      <slot></slot>
    </h3>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped >
.BookLabel {
  h3 {
    color: #333333;
    font-size: 1rem;
    font-weight: 900;
    line-height: 20px;
    margin: 20px 0;
    padding-left: 10px;
    border-left: 2px solid red;
  }
}
</style>
