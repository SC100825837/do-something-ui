import Mock from 'mockjs'

Mock.mock('http://localhost:8001/login', {
  'token': '3sa4d56g4da65' //令牌
})

Mock.mock('http://localhost:8080/user', {
  'name': '@name',
  'email': '@email',
  'age|1-10': 5,
})
