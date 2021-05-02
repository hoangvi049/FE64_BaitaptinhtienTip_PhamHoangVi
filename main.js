document
  .getElementById("btnTinhTienTip")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var tongTien = document.getElementById("txtTongTien").value;
    var pointTongTien = parseFloat(tongTien);

    var phanTram = document.getElementById("slPhanTramTip").value;
    var pointPhanTram = parseFloat(phanTram / 100);

    var share = document.getElementById("txtSoNguoi").value;
    var pointShare = parseFloat(share);

    var tip = (pointTongTien * pointPhanTram) / pointShare;
    var poitnTip = parseInt(tip);

    if (poitnTip > 0) {
      document.getElementById("txtThongBaoTienTip").innerHTML =
        "Tiền tip mỗi người là" + " " + poitnTip + "$";
    } else {
      document.getElementById("txtThongBaoTienTip").innerHTML = "Xin hãy tip";
    }
  });
