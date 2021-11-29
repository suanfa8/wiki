module.exports = [
	'/RabbitMQ/1-intro.md',
	'/RabbitMQ/2-install.md',
	'/RabbitMQ/3-config.md',
	{
      text: '第 4 章 RabbitMQ 入门',
      collapsable: true,
      children : [
     	'/RabbitMQ/4-hello-world/4.0-AMQP.md',
		'/RabbitMQ/4-hello-world/4.1-message-model.md',
		'/RabbitMQ/4-hello-world/4.2-dependent.md',
		'/RabbitMQ/4-hello-world/4.3-direct.md',
		'/RabbitMQ/4-hello-world/4.4-work-quene.md',
		'/RabbitMQ/4-hello-world/4.5-fanout.md',
		'/RabbitMQ/4-hello-world/4.6-Routing.md'
      ]
    },
    {
      text: '第 5 章 在 SpringBoot 中使用 RabbitMQ',
      collapsable: true,
      children : [
		'/RabbitMQ/5-SpringBoot/5.0-hello-world.md',
		'/RabbitMQ/5-SpringBoot/5.1-direct.md',
		'/RabbitMQ/5-SpringBoot/5.2-work-quene.md',
		'/RabbitMQ/5-SpringBoot/5.3-fanout.md',
		'/RabbitMQ/5-SpringBoot/5.4-route.md',
		'/RabbitMQ/5-SpringBoot/5.5-topic.md'
      ]
    },
    {
      text: '第 6 章 RabbitMQ 的应用',
      collapsable: true,
      children : [
		'/RabbitMQ/6-application/6.1-asynchronous.md',
		'/RabbitMQ/6-application/6.2-application-decoupling.md',
		'/RabbitMQ/6-application/6.3-traffic-peaking.md'
      ]
    },
    {
      text: '第 7 章 集群架构',
      collapsable: true,
      children : [
		'/RabbitMQ/7-Cluster/7.1-cluster-architecture.md'
      ]
    }
]