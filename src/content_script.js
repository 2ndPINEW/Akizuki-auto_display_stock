fetch_StoreInfo();

function fetch_StoreInfo(){
  let url = location.href;
  let id = url.split("/g").slice(-1)[0].replace('/', '');
  let StoreInfo_url = "http://akizukidenshi.com/catalog/goods/warehouseinfo.aspx?goods=" + id;
  let target_element = document.getElementsByClassName("detail_stocktitle_");

  //console.log(StoreInfo_url);

  $(function(){
    $.get(StoreInfo_url)
    .done(function(date){
      target_element[0].innerHTML = date.split('<body onLoad="MM_preloadImages(\'/img/usr/bt_top01r.gif\',\'/img/usr/bt_top02r.gif\',\'/img/usr/bt_top03r.gif\',\'/img/usr/bt_top04r.gif\',\'/img/usr/bt_top05r.gif\',\'/img/usr/bt_top06r.gif\')">')[1].split("</body>")[0];
    })
  });
}