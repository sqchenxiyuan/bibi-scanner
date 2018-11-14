# 插件配置

## 插件基础信息

### name 名称
    插件名称

### description 插件描述
    插件描述

### author 作者
    插件作者

### time 插件创建时间
    time

插件通过提供一个info函数来提供插件信息

``` python
def info():
    poc_info = OrderedDict()
    poc_info['name'] = "plugin_name"
    poc_info['description'] = "plugin_description"
    poc_info['author'] = 'plugin_author'
    poc_info['time'] = "plugin_time"
    return info
```

## 插件运行函数

提供一个poc函数,返回正确或者失败

``` python
def poc(url): 127.0.0.1:80
    #操作
    return True or False
```