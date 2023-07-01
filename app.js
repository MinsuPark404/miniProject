class NumberGame {
    constructor() {
        // HTML에서 사용할 DOM 요소에 접근 
        this.inputNum = document.querySelector(".inputNum");
        this.strikeText = document.querySelector(".strikeText");
        this.ballText = document.querySelector(".ballText");
        this.outText = document.querySelector(".outText");        
        this.resultText = document.querySelector(".results");
        this.inputNum.setAttribute("placeholder", `${arrayLength}자리 숫자를 입력하세요`);
        this.inputNum.setAttribute("maxlength", `${arrayLength}`); // 입력 갯수 제한    
        this.num = this.generateNum();
    }
    
    // 3자리의 무작위 숫자를 생성하는 메서드
    generateNum() {
        const arr = []; // 결과 배열을 저장할 변수
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 중복숫자 방지용 선택할 숫자 배열

        while (arr.length < arrayLength) {
            const randomIdx = Math.floor(Math.random() * nums.length); // 무작위 인덱스를 선택
            arr.push(nums[randomIdx]); // 무작위 인덱스로 뽑은 숫자를 arr 배열에 추가 
            nums.splice(randomIdx, 1); // 같은 숫자를 뽑지 않기 추가했던 숫자는 제거
        }
        // console.log(arr) // 무작위 숫자 확인용
        return arr;
    }

    // 사용자가 입력한 숫자와 무작위 숫자를 비교하는 메서드
    check() {
        let strike = 0;
        let ball = 0;

        for (let i = 0; i < arrayLength; i++) {
            const currentNum = Number(this.inputNum.value[i]);
            // 배열 메서드 includes를 사용하여 포함 여부 확인
            if (this.num.includes(currentNum)) {
                if (this.num[i] == currentNum) {
                    strike++; // 위치가 같으면 스트라이크
                } else {
                    ball++; // 위치가 다르면 볼
                }
            }
        }
        // 정답일 경우
        if (strike === arrayLength) {
            this.resultText.innerText = "축하합니다! 정답입니다.";
        } else {
            // 정답이 아닐 경우 스트라이크와 볼 업데이트
            this.strikeText.innerText = strike;
            this.ballText.innerText = ball;
        }

        // 입력값이 3자리 일 때 버튼을 누르면 아웃 카운트
        if(this.inputNum.value.length == arrayLength){
            count++
            this.outText.innerText = count;
        }
    }
}

const arrayLength = 4; // 숫자 갯수
let count = 0;
const game = new NumberGame();
