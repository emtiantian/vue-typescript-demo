## map设计
1. 支持多种地图，对外提供统一的事件机制，统一的数据接口（生成mark，生成mark解释），统一的样式管理,定义指定的数据格式。
2. 地图自动切换(和手动切换)（地理位置是否自动校正），懒加载
3. 通过vuex存储状态？没使用vuex的话使用触发器（多个设置自定义前缀）
4. （先写为组件后期，可能没有后期）提交到npm
5. demo可以做一个我已经去过的地方