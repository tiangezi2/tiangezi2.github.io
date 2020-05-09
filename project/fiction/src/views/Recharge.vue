<template>
  <div class="recharge">
    <van-nav-bar
      title="登录"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    >
      <van-icon name="wap-home-o" slot="right" />
    </van-nav-bar>
    <h6>-第三方整合快捷登录-</h6>
    <a href=""
      ><div class="qq"></div>
      <p>QQ</p></a
    >
    <a href=""
      ><div class="weibo"></div>
      <p>微博</p></a
    >
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.recharge {
  text-align: center;

  //   padding: 0 15px;
  .van-nav-bar {
    .van-nav-bar__title {
      font-weight: 900;
      color: #999;
    }
    .van-nav-bar__text {
      margin-left: -30px;
    }
    .van-icon {
      left: -10px;
      font-size: 20px;
      &:nth-of-type(2) {
        left: 0px;
      }
    }
  }
  h6 {
    color: black;
  }
  a {
    div {
      display: inline-block;
      width: 3.3rem;
      height: 3.3rem;
      background-size: 100%;
      background-position: 50%;
    }
    .qq {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdFNTFFREI5OTFCODExRTZBMTJFRTFDNkIyNDIzOEY4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdFNTFFREJBOTFCODExRTZBMTJFRTFDNkIyNDIzOEY4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0U1MUVEQjc5MUI4MTFFNkExMkVFMUM2QjI0MjM4RjgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6N0U1MUVEQjg5MUI4MTFFNkExMkVFMUM2QjI0MjM4RjgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5PLcY2AAAKd0lEQVR42uxd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);
    }
    .weibo {
      background-image: url("/c1619674dd9a.weibo.png");
      background-repeat: no-repeat;
    }
  }
}
</style>
