export default window.common = (function () {

  const LoadingImageURL = "data:image/gif;base64,R0lGODlhZAAUAKUkAJCapZCbpZGbppOdp5agqpahqZqjrZ2nr6GqsqOstaSttaiwuKqzuq62vrC4vrK6wLa9w7zDycDGzMbM0crP08rP1M3S1s7T19HV2dLW2tTY3Njb39/i5ODj5eLl5+Ll6Obo6unr7ers7uzv8P///////////////////////////////////////////////////////////////////////////////////////////////////////////////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJDQA/ACwAAAAAZAAUAAAG4cCfcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter9MkMcDLns9h4DaoDG7rxy1XG05jj4i5T2f3C/9fXh6gk4Gc3IDRhdyEUiLao1HjwGRkoyOl5aQTXGHcnVDI4cdRqJzpEWmcqipo6WuradMGJ5yE0QZh7dFuXO7uLpHvbZGw2q/Q8YByEgbtWoURB+HF0bTc9VF13LZ2tTW397YTQPPIUUNcgpI6WrrR+0B7/Dq7PX07k4TtRDCExVKMvwLOJAgwCQCDyJJCEXCoQdvIlYZMaEiCIkYM2rcyLGjx48gQz4JAgAh+QQJDQA/ACwAAAAAZAAUAAAG+sCfcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter9ZkMcDLk9HnhDScwi4DRqznAlxBxajIsfOtxxHHyJKgIKDgYaFSIRQD3wBCEUGjm4DRhd2EUiXbpmamJ6coAGdTCCTAXFCe6cBfkMjjh1GsHyys7G3tbl2tksYpxNDv6zBQxmOxUTHfMnKyEbLds1C0W7TSKuOFEMbrAHbQx+OF0bifOTl4+nn63boTG18A3lDA6xqRA12Ckj6bvz99gX8NzAAwCYeCNgZkGrIhFMQjmSYUEHJxIoWKWbEiOSilAkg6RWR4OjBnJNVRoCcAAKly5cwY8qcSbOmzZtCggAAIfkECQ0APwAsAAAAAGQAFAAABv7An3BILBqPyKRyyWw6n9CodEqtWq/YrHbL7Xq/YCPI4wmboyNPCOk5BN4Gzdk8+oiSkHdgMSpy9IAWR3V3SoSGdoiFTxd6EUcPgAEIRQaSbwNGjW+PSJsBnZqOnqNOI5IdRSCXAXJCf6wBgkOngKlGtXq3RLlvu7SoThmSE0UYrMVCx7HJQsOAzUTP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";


  var container = function () {

  };

  var fn = container.prototype;
  /**
   * 获取当前时间 yyyy-MM-dd HH:MM:SS
   * @returns {string}
   */
  container.prototype.getNowFormatDate = function () {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
      + " " + date.getHours() + seperator2 + date.getMinutes()
      + seperator2 + date.getSeconds();
    return currentdate;
  };

  /**
   * 获取时间戳
   */
  container.prototype.getCrt = function () {
    return (new Date()).valueOf();
  };


  /**
   * 获取图片Base64模式的URL
   * @param base64Str base64字符串
   * @param type 图片类型
   * @returns {string}
   */
  container.prototype.imageURL = function (base64Str, type) {
    if (type)
      type = "png";

    return "data:image/" + type + ";base64," + base64Str;
  };

  /**
   * 判断是否是数组
   * @param arg
   * @returns {boolean}
   */
  container.prototype.isArray = function (arg) {

    if (typeof arg === 'object') {
      return Object.prototype.toString.call(arg) === '[object Array]';
    }
    return false;
  };

  /**
   * 抖动警告
   * @param obj
   */
  fn.shakebox = function (obj) {
    obj.toggleClass('shake_effect');
    setTimeout(function () {
      obj.toggleClass('shake_effect')
    }, 500);
  };


  /**
   * 对表单序列化然后发送
   * @param url
   * @param form Jquery对象或者是FormData
   * @param success
   * @param loadAnimOut
   */
  container.prototype.formSerializeSend = function (url, form, success, loadAnimOut) {
    var formData;
    if (form instanceof FormData)
      formData = form;
    else if (form instanceof jQuery) {
      formData = new FormData(form[0]);
    } else {
      throw "表单提交对象必须是Jquery对象或者是FormData"
    }

    $.ajax({
      url: url,
      data: formData,
      type: 'POST',
      contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
      processData: false, // NEEDED, DON'T OMIT THIS
      success: success
      , beforeSend: function () {
        loadAnimOut && loadAnimOut.prepend('<p class="info">加载中，请稍后...</p><br><img src="' + LoadingImageURL + '"  /><br>');
      }
      , complete: function () {
        loadAnimOut && loadAnimOut.empty();
      }
      , error: function (result, status) {
        // alert("请求资源地址使用了不可信的证书，请先访问请求地址，选择高级，再点击 继续前往" + url + "（不安全），之后再次请求");
        alert("请求过程中发生错误，请重试！");
      }
    });
  };

  container.prototype.get = function (url, success, loadAnimOut) {
    $.ajax({
      url: url,
      type: 'GET',
      success: success
      , beforeSend: function () {
        // 插入加载动画
        loadAnimOut && loadAnimOut.prepend('<p class="info">加载中，请稍后...</p><br><img src="' + LoadingImageURL + '"  /><br>');
      }
      , complete: function () {
        // 清空元素
        loadAnimOut && loadAnimOut.empty();
      }
      , error: function (result, status) {
        // alert("请求资源地址使用了不可信的证书，请先访问请求地址，选择高级，再点击 继续前往" + url + "（不安全），之后再次请求");
        alert("请求过程中发生错误，请重试！");
      }
    });
  };

  /**
   * 发送ajax请求
   * @param url 请求地址
   * @param data 数据
   * @param success 成功会掉
   * @param loadAnimOut 加载动画位置
   */
  container.prototype.send = function (url, data, success, loadAnimOut) {
    $.ajax({
      url: url,
      data: data,
      type: 'POST',
      success: success
      , beforeSend: function () {
        // 插入加载动画
        loadAnimOut && loadAnimOut.prepend('<p class="info">加载中，请稍后...</p><br><img src="' + LoadingImageURL + '"  /><br>');
      }
      , complete: function () {
        // 清空元素
        loadAnimOut && loadAnimOut.empty();
      }
      , error: function (result, status) {
        // alert("请求资源地址使用了不可信的证书，请先访问请求地址，选择高级，再点击 继续前往" + url + "（不安全），之后再次请求");
        alert("请求过程中发生错误，请重试！");
      }
    });
  };

  return new container();
})();
