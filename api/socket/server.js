exports.socketServer = function () {
    // 在前者的基础上，实现 Client --> Sever 的通讯，如此一来便是双向通讯
    var net = require('net');
    var chatServer = net.createServer(),
        clientList = [];
    chatServer.on('connection', function(client) {
        // JS 可以为对象自由添加属性。这里我们添加一个 name 的自定义属性，用于表示哪个客户端（客户端的地址+端口为依据）
        client.name = client.remoteAddress + ':' + client.remotePort;
        client.write('Hi ' + client.name + '!\n');
        clientList.push(client);
        client.on('data', function(data) {
            broadcast(data, client);// 接受来自客户端的信息
            client.write('your data is '+data);
            console.log(data);
        });
        client.on('end', function() {
            clientList.splice(clientList.indexOf(client), 1); // 删除数组中的制定元素。这是 JS 基本功哦~
        })
        //TCP API 中还提供一个 error 事件，用于捕捉客户端的异常：
        client.on('error', function(e) {
            console.log(e);
        });
    });
//但是我们还不敢说上述代码很健壮，因为一旦 end 没有被触发，异常仍然存在着。下面我们看看解决之道：重写 broadcast()：
    function broadcast(message, client) {
        var cleanup = []
        for(var i=0;i<clientList.length;i+=1) {
            if(client !== clientList[i]) {

                if(clientList[i].writable) { // 先检查 sockets 是否可写
                    clientList[i].write(client.name + " says " + message)
                } else {
                    cleanup.push(clientList[i]) // 如果不可写，收集起来销毁。销毁之前要 Socket.destroy() 用 API 的方法销毁。
                    clientList[i].destroy()
                }
            }
        }
        //Remove dead Nodes out of write loop to avoid trashing loop index，删除已经断开连接的信息
        for(i=0;i<cleanup.length;i+=1) {
            clientList.splice(clientList.indexOf(cleanup[i]), 1)
        }
    }
    chatServer.listen(8001);
    console.log('stock端口监听在8001端口')
}

