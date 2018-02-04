/**
 * Created by Administrator on 2017/9/20 0020.
 */
/*公共方法、公共变量*/
export default{
  install(Vue, options)
  {
    /*域名*/
    /*线上版*/
    // Vue.prototype.BASEURL = 'http://diamonds.gaossn.com',
    // Vue.prototype.BASEURL = 'http://192.168.1.163/diamonds',
    /*开发版*/
    Vue.prototype.BASEURL = '/diamonds',
      Vue.prototype.setlist =
        /*设置信息set*/
        [
          {
            /*裸钻*/
            dia: '1',
            ring: '2',
            gem: '2',
          },
          {
            /*戒托*/
            dia: '2',
            ring: '1',
            gem: '1',
          },
          {
            /*普定（钻）*/
            dia: '3',
            ring: '2',
            gem: '2',
          },
          {
            /*普定（戒）*/
            dia: '2',
            ring: '3',
            gem: '2',
          },
          {
            /*收藏*/
            dia: '2',
            ring: '1',
            gem: '1',
          },
          {
            /*确认定制信息，普通定制订单*/
            dia: '2',
            ring: '2',
            gem: '2',
          },
          {
            /*确认裸钻信息，深度定制订单*/
            dia: '4',
            ring: '2',
            gem: '2',
          },
          {
            /*确认深度定制订单*/
            dia: '5',
            ring: '2',
            gem: '2',
          }

        ],
      /*刷新路由及时更新设置信息*/
      Vue.prototype.restset = function () {
        if (this.$route.query.set) {
          this.set = JSON.parse(this.$route.query.set)
        }
      },
      /*加入购物车model*/
      Vue.prototype.openonlydiamond = function (txt, txt1, txt2, router1, router2, router3) {
        /*判断是否是加入购物车的*/
        this.buyonlydiamond();
        this.$confirm(txt, {
          confirmButtonText: txt1,
          cancelButtonText: txt2,
          confirmButtonClass: 'btn-b',
          cancelButtonClass: 'btn-w',
        }).then(() => {
          this.$router.push({name: router1, query: {tab: 2}});
        }).catch(() => {
          if (router3) {
            this.$router.go(-1)
          }
        });
        this.procuctdetailsIsshow = false
      },
      /*购买裸钻加入购物车接口配置*/
      Vue.prototype.buyonlydiamond = function () {
        var url = this.BASEURL+'/index.php?action=addcart';
        this.$http.get(url, {
          params: {
            /*裸钻*/
            dia_id: this.pruductdetails.id,
            dia_ref: this.pruductdetails.Ref,
            dia_price: this.pruductdetails.totalPrice,
            dia_size: this.pruductdetails.Size,
            dia_shape: this.pruductdetails.Shape,
            dia_color: this.pruductdetails.Color,
            dia_clarity: this.pruductdetails.Clarity,
            dia_cut: this.pruductdetails.Cut,
            dia_polish: this.pruductdetails.Polish,
            dia_sym: this.pruductdetails.Sym,
            dia_cert: this.pruductdetails.Cert,
            //戒托
            ring_id: this.pruductdetails.rid,
            ring_name: this.pruductdetails.name,
            ring_fnum: this.pruductdetails.fnum,
            ring_fushi: this.pruductdetails.f_min,
            ring_weight: this.pruductdetails.j_min,
            ring_handsize: this.HandNumselected,
            ring_lettering: this.letteringtext,
            ring_material: this.texturedata,
            ring_price: (parseFloat(this.pricepushdata['total_price'])).toFixed(0),
          }
        }, {}).then(response => {
        }, response => {
          console.log(response);
        });
      },
      /*时间戳转日期*/
      Vue.prototype.gettime = function getLocalTime(nS) {
        return new Date(parseInt(nS) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
      },
      /*订单确认收货*/
      Vue.prototype.ConfirmReceipt = function (val) {
        this.$confirm('<p>是否确认收货？</p>', {
          confirmButtonClass: 'btn-b',
          cancelButtonClass: 'btn-w',
          dangerouslyUseHTMLString: true
        }).then(() => {
          var url = this.BASEURL+'/index.php?action=arrive';
          this.$http.get(url, {
            params: {
              orderid: val
            }
          }, {}).then(response => {
            if (response.body.result == "SUCCESS") {
              this.messagedata = '收货成功';
              /*（定义提示框内容）*/
              this.message();
              /*（调用提示框）*/
              /*将订单状态改成已完成状态*/
              this.orderdetail.status = '6'
              /*(修改按钮文本)*/
            }
          }, response => {
            console.log(response);
          });
        }).catch(() => {
        });

      },
      /*订单确认价格*/
      Vue.prototype.ConfirmPrice = function (val) {
        var url = this.BASEURL+'/index.php?action=trueprice';
        this.$http.get(url, {
          params: {
            order_id: val
          }
        }, {}).then(response => {
          if (response.body.error_code == "0") {
            this.messagedata = '确认价格成功';
            /*（定义提示框内容）*/
            this.message();
            /*（调用提示框）*/
            this.orderdetail.status = '13'
            /*(修改按钮文本)*/
          }
        }, response => {
          console.log(response);
        });
      },
      /*灰色提示框,调用的时候要在页面定义一个messagedata变量*/
      //this.messagedata = '请输入登陆手机号码'; （定义提示框内容）
      //this.message();（调用提示框）
      Vue.prototype.message = function (demo) {
        if (demo == '1') {
          this.$message({
            message: this.messagedata,
            duration: 1000,
            customClass: 'my-el-message',
            onClose: function () {
              this.$router.push({
                path: '/setting'
              });
            }
          });
        } else {
          this.$message({
            message: this.messagedata,
            duration: 1000,
            customClass: 'my-el-message',
          });
        }
      },
      Vue.prototype.zhekou = function (op, np) {
        /*折扣方法(原价：op，折后价：np)*/
        var num = np / op
        if (num > 0 && num <= 0.1) {
          num = 1
        } else if (num > 0.1 && num <= 0.2) {
          num = 1
        } else if (num > 0.2 && num <= 0.3) {
          num = 2
        } else if (num > 0.3 && num <= 0.4) {
          num = 3
        } else if (num > 0.4 && num <= 0.5) {
          num = 4
        } else if (num > 0.5 && num <= 0.6) {
          num = 5
        } else if (num > 0.6 && num <= 0.7) {
          num = 6
        } else if (num > 0.7 && num <= 0.8) {
          num = 7
        } else if (num > 0.8 && num <= 0.9) {
          num = 8
        } else if (num > 0.9 && num <= 1) {
          num = 9
        } else if (num == 0) {
          num = 0
        } else {
          num = 10
        }
        return num
      },
      Vue.prototype.priceratio = function (op, np) {
        /*价格比例方法(原价：op，折后价：np)*/
        op = parseFloat(op)
        var num = np / op
        /*0.0014907573047108*/
        num = parseInt(num * 100)
        if ((np / op) > 0 && num == 0) {
          num = 1
        }
        return num
      }
       //设置cookie
      Vue.prototype.setCookie = function (cname, cvalue, exdays) {
          var d = new Date();
          d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
          var expires = "expires=" + d.toUTCString();
          document.cookie = cname + "=" + cvalue + "; " + expires;
      },
      //获取cookie
      Vue.prototype.getCookie = function (cname) {
          var name = cname + "=";
          var ca = document.cookie.split(';');
          for (var i = 0; i < ca.length; i++) {
              var c = ca[i];
              while (c.charAt(0) == ' ') c = c.substring(1);
              if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
          }
          return "";
      },
      //清除cookie
      Vue.prototype.clearCookie = function () {
          this.setCookie("username", "", -1);
      }
  }
}
