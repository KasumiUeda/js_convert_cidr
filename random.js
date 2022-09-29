function onclick(sendingCIDR){
    const CIDR_array = sendingCIDR.split(".")
    const splitPart = CIDR_array[3].split("/")
    const CIDR_block = splitPart[1]
    var divided = []

    CIDR_array.splice(3, 1, splitPart[0])

    var CIDR_array_binary = []

    function binary_array_conversation(value){
        var s = parseInt(value).toString(2).padStart(8, "0")
        CIDR_array_binary.push(s)
    }

    CIDR_array.forEach(binary_array_conversation)

    newCIDRAdress = CIDR_array_binary.join("").substring(0, CIDR_block) + "1".repeat(32 - CIDR_block)

    for(var i=0,len=newCIDRAdress.length;i<len;i+=8) {
        divided.push(newCIDRAdress.slice(i, i + 8));
    }

    var CIDR_array_new = []

    function decimal_conversation(value){
        var a = parseInt(value, 2)
        CIDR_array_new.push(a)
    }
    divided.forEach(decimal_conversation)
    randomAddress = (Math.floor(Math.random() * (CIDR_array_new[0] - parseInt(CIDR_array[0])) + parseInt(CIDR_array[0])) + "." + Math.floor(Math.random() * (CIDR_array_new[1] - parseInt(CIDR_array[1])) + parseInt(CIDR_array[1])) +  "." + Math.floor(Math.random() * (CIDR_array_new[2] - parseInt(CIDR_array[2])) + parseInt(CIDR_array[2])) + "." + Math.floor(Math.random() * (CIDR_array_new[3] - parseInt(CIDR_array[3])) + parseInt(CIDR_array[3])))
}


onclick("1.14.51.0/24")