// 이렇게 하면 내부적으로 name과 method가 있어도
// a에서 name만 반환하기에 접근은 name만 가능하고, method는 접근할 수 없다.
const singleton = (function() {
    this.name = "singleton",
    this.method = "designPattern"
    
    const a = {
        name: this.name
    }
    
    return a;
})();

