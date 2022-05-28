// 這裡用來撰寫AJAX處理

// // 測試用-所有格子填上文字
// window.onload = function default_text() {
//     for(let i = 1; i<=84; i++){
//         $(`#s${i}`).html(`微積分(二)<br>00000教室`);
//     }
// }



window.onload = function getdata() {
    $.ajax({
        url:'./data.json',
        success:function(response){
            console.log("AJAX狀態:取得課表資料成功")
            console.log(response)
            for(let i = 1,j = 1,c =1; i<=84; i++){ //總共84格ids
                $(`#s${i}`).html(response[`day${c}`][`${j}`]["subj"]);
                c++
                if(i%6==0){j++;} //一周總共有六天，橫排有六節 ["1"]
                if(c==7){c=1;} //一周裡的第幾天，當出現7的時候回歸1下個循環繼續 ["day1"]
            }
        },
        error:function(xhr){
            alert("發生錯誤: " + xhr.status + " " + xhr.statusText);
        }});
}
