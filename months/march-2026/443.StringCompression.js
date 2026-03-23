function StringCompress(s) {

    let read = 0;
    let write = 0;

    while (read < s.length) {
        let ch = s[read];
        let count = 0;

        while (read < s.length && s[read] === ch) {
            read++;
            count++;
        }

        s[write] = ch;
        write++;

        if (count > 1) {
            let countStr = count.toString();

            for (let digit of countStr) {
                s[write] = digit;
                write++;
            }
        }



    }
    return write;
}

// s = ['a','a','b','b','c','c','c'];
let s = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]
console.log(StringCompress(s));
