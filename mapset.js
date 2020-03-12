let map_one = new Map();

map_one.set("Indesit","Washing machine");
map_one.set("LG","Tv");
map_one.set("Beko","Washing machine");
map_one.set("Philips","Juicer");

let map_two = new Map();

map_two.set("Indesit",650);
map_two.set("LG",562);
map_two.set("Beko",765);
map_two.set("Philips",623);

let map_three = new Map();

map_three.set("Indesit",5);
map_three.set("LG",4);
map_three.set("Beko",3);
map_three.set("Philips",2);

let min_price = function() {
    let a = map_two.get("Indesit")
    let b = map_two.get("LG")
    let c = map_two.get("Beko")
    let d = map_two.get("Philips")

    if(a == Math.min(a, b, c, d)) {
        console.log(` ${map_one.get("Indesit")}: ${map_two.get("Indesit")} USD - Indesit ${map_three.get("Indesit")} day`)
    }else if(b == Math.min(b, a, c, d)) {
        console.log(` ${map_one.get("LG")}: ${map_two.get("LG")} USD - LG - ${map_three.get("LG")} day`)
    }else if(c == Math.min(a, b, c, d)) {
        console.log(` ${map_one.get("Beko")}:  ${map_two.get("Beko")} USD - Beko - ${map_three.get("Beko")} day`)
    }else if(d == Math.min(a, b, c, d)) {
        console.log(` ${map_one.get("Philips")}: ${map_two.get("Philips")} USD - Philips ${map_three.get("Philips")} day`)
    }

}

let min_time = function() {
    let a = map_three.get("Indesit")
    let b = map_three.get("LG")
    let c = map_three.get("Beko")
    let d = map_three.get("Philips")

    if(a == Math.min(a, b, c, d)) {
        console.log(` ${map_one.get("Indesit")}: / ${map_two.get("Indesit")} USD /Indesit/ ${map_three.get("Indesit")} day`)
    }else if(b == Math.min(b, a, c, d)) {
        console.log(` ${map_one.get("LG")}: / ${map_two.get("LG")} USD  /LG/ ${map_three.get("LG")} day`)
    }else if(c == Math.min(a, b, c, d)) {
        console.log(` ${map_one.get("Beko")}: / ${map_two.get("Beko")} USD  /Beko/ ${map_three.get("Beko")} day`)
    }else if(d == Math.min(a, b, c, d)) {
        console.log(` ${map_one.get("Philips")}: ${map_two.get("Philips")} USD - Philips - ${map_three.get("Philips")} day`)
    }

}

let max_price = function() {
    let a = map_two.get("Indesit")
    let b = map_two.get("LG")
    let c = map_two.get("Beko")
    let d = map_two.get("Philips")

    if(a == Math.max(a, b, c, d)) {
        console.log(` ${map_one.get("Indesit")}: ${map_two.get("Indesit")} USD  /Indesit/ ${map_three.get("Indesit")} day`)
    }else if(b == Math.max(b, a, c, d)) {
        console.log(` ${map_one.get("LG")}: ${map_two.get("LG")} USD - LG - ${map_three.get("LG")} day`)
    }else if(c == Math.max(a, b, c, d)) {
        console.log(` ${map_one.get("Beko")}: ${map_two.get("Beko")} USD - Beko - ${map_three.get("Beko")} day`)
    }else if(d == Math.max(a, b, c, d)) {
        console.log(` ${map_one.get("Philips")}: ${map_two.get("Philips")} USD - Philips - ${map_three.get("Philips")} day`)
    }

}

let max_time = function() {
    let a = map_three.get("Indesit")
    let b = map_three.get("LG")
    let c = map_three.get("Beko")
    let d = map_three.get("Philips")

    if(a == Math.max(a, b, c, d)) {
        console.log(` ${map_one.get("Indesit")}: ${map_two.get("Indesit")} USD  - Indesit - ${map_three.get("Indesit")} day`)
    }else if(b == Math.max(b, a, c, d)) {
        console.log(` ${map_one.get("LG")}: ${map_two.get("LG")} USD - LG - ${map_three.get("LG")} day`)
    }else if(c == Math.max(a, b, c, d)) {
        console.log(`${map_one.get("Beko")}: ${map_two.get("Beko")} USD - Beko - ${map_three.get("Beko")} day`)
    }else if(d == Math.max(a, b, c, d)) {
        console.log(` ${map_one.get("Philips")}: ${map_two.get("Philips")} USD  - Philips - ${map_three.get("Philips")} day`)
    }

}

min_price();
min_time();
max_price();
max_time();

