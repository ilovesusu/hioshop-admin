# hioshop-admin

感觉原作者 https://github.com/iamdarcy/ 开源的代码  
感觉原作者 https://github.com/iamdarcy/ 开源的代码  
感觉原作者 https://github.com/iamdarcy/ 开源的代码  

### 海风小店，开源商城（后台管理端VUE 3）

+ 基于开源项目 hioshop-admin 重建，完善了一些功能，并重新使用 VUE 3 构建
+ 测试数据来自上述开源项目
+ 服务端 api 基于Node.js+ThinkJS+MySQL (后续会改为 Golang + MariaDb + Redis)
+ 后台管理 基于VUE3 + element-plus

#### 本项目暂时需要配合下面的程序,等待后续开源
服务端： https://github.com/iamdarcy/hioshop-server  
微信小程序：https://github.com/iamdarcy/hioshop-miniprogram

Vue2版本 线上demo：http://hiolabs.com/demo/#/login  
用户名：hiolabs  
密码：hiolabs

### 项目截图
+ Dashboard

<img width="900" src="http://git.hiolabs.com/github/dashboard.jpg"/>

+ 订单

<img width="900" src="http://git.hiolabs.com/github/order.jpg"/>

+ 电子面单生成

<img width="900" src="http://git.hiolabs.com/github/express2.jpg"/>

+ 商品管理

<img width="900" src="http://git.hiolabs.com/github/goods.jpg"/>

+ 购物车

<img width="900" src="http://git.hiolabs.com/github/cart.jpg"/>

+ 用户

<img width="900" src="http://git.hiolabs.com/github/user.jpg"/>

+ 运费模板

<img width="900" src="http://git.hiolabs.com/github/template.jpg"/>

+ 运费模板详情页

<img width="900" src="http://git.hiolabs.com/github/template2.jpg"/>

### 本地开发环境配置
+ 克隆项目到本地
```
git clone https://github.com/ilovesusu/hioshop-admin
```
+ 安装依赖
```
yarn install
```

+ 启动
```
yarn serve
```

+ build 打包成静态文件
```
yarn build
```

生成的静态文件在dist文件夹中，上传到服务器就可以在浏览器中打开了。

### 功能列表
+ 订单管理：查看，修改订单价格，发货，生成电子面单，修改订单状态
+ 商品管理：添加、修改、删除商品，添加商品分类
+ 购物车：可以看到用户加入购物车的情况
+ 用户列表：用户的一些使用踪迹
+ 店铺设置：广告列表，公告管理，运费模板（可以根据地区设置相应的运费），管理员

### 最近更新

- 项目地址  
  - 后台管理：https://github.com/ilovesusu/hioshop-admin
  - 服务端： todo 
  - 微信小程序： todo

- 本项目会持续更新和维护，喜欢别忘了 Star，有问题可以联系我，谢谢您的关注。