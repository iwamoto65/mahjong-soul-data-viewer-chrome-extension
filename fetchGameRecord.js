var pbWrapper = net.ProtobufManager.lookupType(".lq.Wrapper");
var pbGameDetailRecords = net.ProtobufManager.lookupType(".lq.GameDetailRecords");
function parseRecords(gameDetailRecords, json) {
  try {
    if (gameDetailRecords.version == 0) {
      for (let i in gameDetailRecords.records) {
        var record = pbWrapper.decode(gameDetailRecords.records[i]);
        var pb = net.ProtobufManager.lookupType(record.name);
        var data = JSON.parse(JSON.stringify(pb.decode(record.data)));
        json.records[i] = { name: record.name, data: data };
      }
    } else if (gameDetailRecords.version == 210715) {
      for (let i in gameDetailRecords.actions) {
        if (gameDetailRecords.actions[i].type == 1) {
          var record = pbWrapper.decode(gameDetailRecords.actions[i].result);
          var pb = net.ProtobufManager.lookupType(record.name);
          var data = JSON.parse(JSON.stringify(pb.decode(record.data)));
          json.actions[i].result = { name: record.name, data: data };
        }
      }
    } else {
      throw "Unknown version: " + gameDetailRecords.version;
    }
  } catch (e) {
    alert('牌譜の取得に失敗しました。再度試してください。');
  }
  return json;
}

app.NetAgent.sendReq2Lobby(
  "Lobby",
  "fetchGameRecord",
  { game_uuid: GameMgr.Inst.record_uuid, client_version_string: GameMgr.Inst.getClientVersion() },
  function (e, gameRecord) {
    try {
      var gameDetailRecordsWrapper = pbWrapper.decode(gameRecord.data);
      var gameDetailRecords = pbGameDetailRecords.decode(gameDetailRecordsWrapper.data);
      var gameDetailRecordsJson = JSON.parse(JSON.stringify(gameDetailRecords));
      gameDetailRecordsJson = parseRecords(gameDetailRecords, gameDetailRecordsJson);
      gameRecord.data = "";
      var gameRecordJson = JSON.parse(JSON.stringify(gameRecord));
      gameRecordJson.data = { name: gameDetailRecordsWrapper.name, data: gameDetailRecordsJson };

      window.postMessage({ name: 'gameRecord', result: JSON.stringify(gameRecordJson) }, "https://game.mahjongsoul.com")
    } catch {
      alert('牌譜画面でもう一度お試しください。')
    }
  }
);
