
const config = require('./config.js');

const CLASSNAME = config.className,
  USER = 'user',
  ITEM = 'item';

class Key {
  constructor() {
    this.key = '';
    this.keyArr = [];
  }

  joinKey() {
    this.key = [CLASSNAME].concat(this.keyArr).join(':');
    return this.key;
  }

  userDislikedSet(userId) {
    this.keyArr = [USER, userId, 'disliked'];
    return this.joinKey();
  }

  itemLikedBySet(itemId) {
    this.keyArr = [ITEM, itemId, 'liked'];
    return this.joinKey();
  }

  itemDislikedBySet(itemId) {
    this.keyArr = [ITEM, itemId, 'disliked'];
    return this.joinKey();
  }

  mostLiked(userId) {
    this.keyArr = [USER, userId, 'mostLiked'];
    return this.joinKey();
  }

  userLikedSet(userId) {
    this.keyArr = [USER, userId, 'liked'];
    return this.joinKey();
  }

  mostDisliked() {
    this.keyArr = ['mostDisliked'];
    return this.joinKey();
  }

  recommendedZSet(userId) {
    this.keyArr = [USER, userId, 'recommendedZSet'];
    return this.joinKey();
  }

  scoreboardZSet() {
    this.keyArr = ['scoreboard'];
    return this.joinKey();
  }

  similarityZSet(userId) {
    this.keyArr = [USER, userId, 'similarityZSet'];
    return this.joinKey();
  }

  tempAllLikedSet(userId) {
    this.keyArr = [USER, userId, 'tempAllLikedSet'];
    return this.joinKey();
  }
}

module.exports = exports = new Key();
