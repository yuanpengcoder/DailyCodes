data-base school-pro



tab1  school-msg

   _id   weather(string)  city school-name school-details{

​	schoolMsg{

​		title

​		author

​		date

​		context

​	}

​	}

tab2  

  school-detail-id(主键)  

school-name

 schoolMsg{

​		image

​		title

​		author

​		date

​		context

}

article{

_openid

contents

date

commentNum

articles （array） 

{



}



id作为评论的外键

}

评论最多三层

在

任务

 云函数生成createarticle

  云函数生成createImg

  浏览问题页面，回答问题





3、tabar的第二个页面   评论页面

4/11 完成评论文章功能 核心 文章的id 作为外键  ,评论最多三层，评论模板可直接拿comment，

comments {有openid  articleId  contents cImgs  date }





个人

{

登录

我的发布1

评论记录





1.1发布的文章

1.2回答的问题

}



功能缺少：编辑已发布问题，//

​		分页

​		实现敏感词汇检测(调用api)；showComment里面已经实现了

​		 实现进入评论最底层页面时问题显示在导航条

​		单机我的评论进入评论最底层页面时让其是是显示模式的（用锚点）

​		删除问题，回答，评论（直接在我的信息那边删除）

​		收藏问题（新建一个集合，user-collections  

​				_openid

​				article_id

​				userName

​				userImg

​				contents(问题内容)

​			）









论文

主要功能模块

json自动显示当前城市的学院名称

校园信息（即时天气，校园信息）

问题论坛（添加你的问题，回答他人的问题，评论他人的问题，评论量，最热问题系列，搜索问题，收藏问题）

消息（文章被回答，文章被评论）

个人用户（授权用户信息，已发布的问题（可删除），已发表的回答（可删除），已发表的评论（可删除））

收藏的文章和回答

