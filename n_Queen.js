// eightQueen
// let count = 0; // 駒の置き方が何通りかを保存する
// let board = []; // stackとして利用


// boardに置きたい座標を渡して斜め重複しているかを見る関数。
function deplicate(x1, y1){
    for(let i = 0; i < board.length; i++){
        let x2 = i;
        let y2 = board[i];

        // 斜めで重複している場合
        if(Math.abs(x1 - x2) == Math.abs(y1 - y2)) return true;
    }

    return false;
}

// 数字配列とnumberを受け取って、含むか判定する関数: 列が重複しているならtrue
function existNumber(arr, number){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === number) return true;
    }

    return false;
}


// クイーンを何個おけるかを出す関数
// 縦はindex=(y),横はxで表現する。
// 1行ずつ配置していき最後の行まできたらcount++;
// 1周目の例は、n_queen(8,0);
function n_queen(n, x){
    // ベースケース
    if(n == x){
        count++;
    }
    // main処理
    else{
        // x行のときの列をn列作成する
        for(let y = 0; y < n; y++){
            // 縦横斜めの重複を見る。boardを見て、重複がない(boardに)場合n_queen(n, x+1)を実行する
            // この時の座標は(x, y), board上の座標は(index, value)
            // 重複している場合、何もしないで、次のyマスに行く
            if(existNumber(board, y) || deplicate(x, y)) continue;
            else{
                // boardに駒を配置→次の行以降の操作を最後の行まで実行→boardを1つ前の状態に戻す
                board.push(y);
                n_queen(n, x+1);// n=8の時indexは7なので、xは7までしかないが、8に行けた時x=7まで全て配置したことになる。
                board.pop();
            }
        }
    }
}


// 関数の実行
// n_queen(8,0);
// console.log(count);




// 以上をまとめて1つの関数に
function howN_queensQuestionResult(N){
    // helper関数の定義
    function deplicate(x1, y1){
        for(let i = 0; i < board.length; i++){
            let x2 = i;
            let y2 = board[i];
    
            // 斜めで重複している場合
            if(Math.abs(x1 - x2) == Math.abs(y1 - y2)) return true;
        }
    
        return false;
    }
    function existNumber(arr, number){
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === number) return true;
        }
    
        return false;
    }

    // main
    let count = 0; // 駒の置き方が何通りかを保存する
    let board = []; // stackとして利用
    
    function n_queen(n, x){
        
        
        // ベースケース
        if(n == x){
            count++;
        }
        // main処理
        else{
            // x行のときの列をn列作成する
            for(let y = 0; y < n; y++){
                // 縦横斜めの重複を見る。boardを見て、重複がない(boardに)場合n_queen(n, x+1)を実行する
                // この時の座標は(x, y), board上の座標は(index, value)
                // 重複している場合、何もしないで、次のyマスに行く
                if(existNumber(board, y) || deplicate(x, y)) continue;
                else{
                    // boardに駒を配置→次の行以降の操作を最後の行まで実行→boardを1つ前の状態に戻す
                    board.push(y);
                    n_queen(n, x+1);// n=8の時indexは7なので、xは7までしかないが、8に行けた時x=7まで全て配置したことになる。
                    board.pop();
                }
            }
        }
    }

    n_queen(N,0);

    return count;
}