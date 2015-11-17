(function () {

	this.Pub = function () {
		this.topics = [];

		this.Topic = function (scope, topic) {
			this.subscribers = [];
			this.topic = topic;
			scope.topics.push(this);
		};

		this.Topic.prototype = {
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

	Pub.prototype.sub = function (topic, callback) {
		if(this.topics.length >= 1){
			for (var i = 0; i < this.topics.length; i++) {
				if (this.topics[i].topic == topic) {
					this.topics[i].topic.addSubscriber(callback);
				}else{
					var topicAdd = new this.Topic(this, topic);
					topicAdd.addSubscriber(callback);
					break;
				}
			}
		}else{
			var topicAdd = new this.Topic(this, topic);
			topicAdd.addSubscriber(callback);
		}
	};

	Pub.prototype.unsub = function (topic, callback){
		for (var i = 0; i < this.topics.length; i++) {
			if (this.topics[i].topic == topic) {
				this.topics[i].removeSubscriber(callback);
			}
		}
	};

	Pub.prototype.pub = function (topic, data){
		for (var i = 0; i < this.topics.length; i++) {
			if(this.topics[i].topic == topic) {
				var topicModel = this.topics[i];
				topicModel.publishToSubscribers(data);
			}
		}
	};
	Digest = new this.Pub();
	return Digest;
})();
