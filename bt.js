let number = prompt("Nhập số lượng số nguyên tố cần in ra : ");
let count = 0;
let N = 2;
let isSNT = true;
while (count < number){
    for (let i = 2; i < number; i++){
        isSNT = true;
        if ((N%i) ==0){
            if (N == i){
                continue;
            }
            else {
                isSNT = false;
                break;
            }
        }
    }
    isSNT = true;
    if (isSNT){
        document.write(N + "<br>");
        count++;
    }
    N++;
    isSNT = false;
}