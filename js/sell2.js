$(document).ready(function () {
    function regularJuge(x,mark) {
        switch (mark){
            case 0:
                if ( x == "") {
                    alert("必填项目不能为空!");
                }
                else {
                    return 1;
                }
                break;
            case 1:
                var patrn = /[^\x00-\x80]/;
                if (!patrn.exec(x)){
                    alert("姓名填写有误!");
                }
                else {
                    return 1;
                }
                break;
            case 2:
                var patrn = /^([0-9A-Za-z\-_\.]+)@([0-9A-Za-z]+\.[A-Za-z]{2,3}(\.[A-Za-z]{2})?)$/g;
                if (!patrn.exec(x)){
                    alert("邮箱地址填写有误!");
                }
                else {
                    return 1;
                }
                break;
            case 3:
                var patrn = /^0?(13[0-9]|15[012356789]|18[0236789]|14[57])[0-9]{8}$/;
                if (!patrn.exec(x)){
                    alert("电话号码填写有误!");
                }
                else {
                    return 1;
                }
                break;
            case 4:
                var patrn = /^[a-zA-Z0-9 ]{3,12}$/;
                if (!patrn.exec(x)){
                    alert("邮编填写有误!");
                }
                else {
                    return 1;
                }
                break;
            case 5:
                var patrn = /[^\x00-\x80]/;
                if (!patrn.exec(x)){
                    alert("地址填写有误!");
                }
                else {
                    return 1;
                }
                break;
        }
    }
    function addCity(checkVal,flag) {
        if (checkVal == flag) {
            $('#sel2').html('');
            for (var i = 0; i < town[(flag - 1)].length; i++) {
                $('#sel2').append('<option>' + '---' + town[(flag - 1)][i] + '---' + '</option>');
            }
        }
    }
    $(document).bind("selectstart",function(){return false;});
    $("#reduce").click(function () {
        $("#amount").val(function (index,value) {
            var x = parseInt(value);
            if ( x <= 0 ){
                return x = 0;
            }else {
                return x -= 1;
            }
        });
    });
    $("#add").click(function () {
        $("#amount").val(function (index,value) {
            var x = parseInt(value);
            if ( x >= 99 ){
                return x = 99;
            }else {
                return x += 1;
            }
        });
    });
    //购买界面弹出
    $("#btnbuy").click(function () {
        $("#tbody").html("");
        var x = parseInt($("#amount").val());
        var y = parseInt($("#price").text());
        $("#orderBox").css("display","block");
        $("#tbody").append("<tr>" +
            "<td>"+$("#name").text()+"</td>" +
            "<td>"+$("#amount").val()+"</td>" +
            "<td>"+ y +"</td>" +
            "<tr>");
        $("#priceAll").text(x*y);
        $('#sel2').attr("disabled",true);
    });
    var town = [
        ["东城区","西城区","朝阳区","宣武区","昌平区","大兴区","丰台区","海淀区"],
        ['宝山区','长宁区','丰贤区', '虹口区','黄浦区','青浦区','南汇区','徐汇区','卢湾区'],
        ['和平区', '河西区', '南开区', '河北区', '河东区', '红桥区', '塘古区', '开发区']
    ];
    $("#sel1").change(function(){
        var x = parseInt($(this).val());
        if ( x == 0){
            $('#sel2').html('');
            $('#sel2').append('<option value="0">' + '---请选择所在省份和地区---' + '</option>');
            $("#sel2").val("0");
            $('#sel2').attr("disabled",true);
        }else {
            $('#sel2').attr("disabled",false);
            addCity(x,1);
            addCity(x,2);
            addCity(x,3);
        }
    });
    //取消订单
    $("#cancel").click(function () {
        $("#orderBox").css("display","none");
    });
    //提交订单
    $("#confirm").click(function () {
        if (regularJuge($("#buyerName").val(),0) == 1 &&
            regularJuge($("#buyerName").val(),1) == 1 &&
            regularJuge($("#buyerEmail").val(),0) == 1 &&
            regularJuge($("#buyerEmail").val(),2) == 1 &&
            regularJuge($("#buyerPhone").val(),0) == 1 &&
            regularJuge($("#buyerPhone").val(),3) == 1 &&
            regularJuge($("#buyerPostcode").val(),0) == 1 &&
            regularJuge($("#buyerPostcode").val(),4) == 1 &&
            regularJuge($("#buyerAddress").val(),0) == 1 &&
            regularJuge($("#buyerAddress").val(),5) == 1){
            $("#orderBox").css("display","none");
            $("#amount").val("1");
            alert("提交成功");
        }
    });
});