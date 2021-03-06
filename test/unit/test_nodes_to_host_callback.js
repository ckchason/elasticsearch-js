describe('Nodes to host callback', function () {
  var callback = require('../../src/lib/nodes_to_host');

  // example node list that would come back from "GET _cluster/nodes"
  var nodes = require('../fixtures/short_node_list.json');

  it('properly creates host objects', function () {
    var hosts = callback(nodes);
    hosts.should.have.lengthOf(2);
    hosts[0].should.eql({
      host: '10.10.10.100',
      port: 9205,
      _meta: {
        id: 'id1',
        name: 'Headknocker',
        hostname: 'Spencers-MacBook-Pro.local',
        version: '0.90.5'
      }
    });
    hosts[1].should.eql({
      host: '10.10.10.101',
      port: 9205,
      _meta: {
        id: 'id2',
        name: 'Buttknocker',
        hostname: 'Johns-MacBook-Pro.local',
        version: '0.90.5'
      }
    });
  });

});