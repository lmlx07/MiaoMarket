Page({
    data: {
        e_Name:"",
        e_Number:""
      },
    Input_name(e) {
        this.setData({
          e_Name: e.detail.value
        });
      },
    Input_number(e) {
        this.setData({
          e_Number: e.detail.value
        });
      },
    register: function() {
      wx.redirectTo({         // 使用redirectTo方法进行跳转
        url: '/pages/register/register'  // 目标页面的路径
    })
    },  
    judgeInput() {
    const e_Name = this.data.e_Name;
    const e_Number = this.data.e_Number;

    // 示例：判断输入内容是否为纯数字
    const isName = "mao";
    const isNumber = "123456";

    if (e_Name==isName && e_Number == isNumber) {
        wx.switchTab({         // 使用redirectTo方法进行跳转
            url: '/pages/main/main'  // 目标页面的路径
          })
    } 
  }  
  })