/* 模拟实现获取动态路由和动态菜单，用户名，用户id
 *
 */
const signin = async (cxt, next) => {
  //这里正常是应该根据payload中的userid来获取
  cxt.response.body = {
    'name': '管理端',
    'resources': [
      {
        'id': '4028811a5e1820d9015e1824acf20000',
        'name': '登录',
        'summary': null,
        'url': '/signin',
        'method': 'GET'
      },{
        'id' : '4028811a5e1820d9015e1824acf20001',
        'name': '监控',
        'summary': null,
        'url': '/monitor',
        'method': 'GET'
      }
    ],
    'id': '2c9180895e172348015e1740805d000d',
    'user': {
      'userId': '123',
      'userName': 'haohe',
    },
    'menus': [
      {
        'id': '2c9180895e13261e015e13469b7e0000',
        'name': '平台-角色管理',
        'parent_id': null,
        'route': 'roles',
        'summary': null
      },
      {
        'id': '2c9180895e13261e015e1346d40a0001',
        'name': '平台-账户管理',
        'parent_id': null,
        'route': 'accounts',
        'summary': null
      }
    ]
  }
}
module.exports = {
  'GET /signin': signin
}
