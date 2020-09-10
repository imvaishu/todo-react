class RedisClient {
  constructor(client) {
    this.redisClient = client;
  }

  readFromRedis(key) {
    return new Promise((resolve, reject) => {
      this.redisClient.get(key, (err, data) => {
        if (err) reject(err.message);
        resolve(JSON.parse(data));
      });
    });
  }

  writeToRedis(key, data) {
    return new Promise((resolve, reject) => {
      this.redisClient.set(key, JSON.stringify(data), (err, reply) => {
        if (err) reject(err.message);
        resolve(reply);
      });
    });
  }
}

module.exports = { RedisClient };
