(function () {

	this.Pub = function () {
		var topics = [];

		this.sub = function (topic, callback) {
			if(topics.length >= 1){
				for (var i = 0; i < topics.length; i++) {
					if (topics[i].topic == topic) {
						topics[i].topic.addSubscriber(callback);
					}else{
						var topicAdd = new TopicModel(topic);
						topicAdd.addSubscriber(callback);
						break;
					}
				}
			}else{
				var topicAdd = new TopicModel(topic);
				topicAdd.addSubscriber(callback);
			}
		};

		this.unsub = function (topic, callback){
			for (var i = 0; i < topics.length; i++) {
				if (topics[i].topic == topic) {
					topics[i].removeSubscriber(callback);
				}
			}
		};

		this.pub = function (topic, data){
			for (var i = 0; i < topics.length; i++) {
				if(topics[i].topic == topic) {
					var topicModel = topics[i];
					topicModel.publishToSubscribers(data);
				}
			}
		};

		var TopicModel = function (topic) {
			this.subscribers = [];
			this.topic = topic;
			topics.push(this);
		};

		TopicModel.prototype = {
			addSubscriber: function (data) {
				this.subscribers.push(data);
			},

			removeSubscriber: function (data) {
				for (var subscriber in this.subscribers) {
					if(this.subscribers[subscriber] == data) {
						this.subscribers.splice(this.subscribers.indexOf(
												this.subscribers[subscriber]), 1);
						break;
					}
				}
			},

			id: Date.now(),

			publishToSubscribers: function (data) {
				for (var i = 0; i<this.subscribers.length; i++) {
					this.subscribers[i](data);
				}
			},
		};
	};

	Digest = new this.Pub();
	return Digest;
})();
