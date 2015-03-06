/**
 * Created by petitspois on 15/2/25.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var notification = new Schema({
    //类型 位置 类型  comment
    type: {
        type: String,
        required: true
    },
    // 来源
    who: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    // 目标
    me: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    // 被操作 object
    resource: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },
    // 激活时间
    noticeAt: {
        type: Date,
        default: Date.now
    }

}, {
    toObject: {getters: true, virtuals: true},
    toJSON: {getters: true, virtuals: true}
});


module.exports = notification;