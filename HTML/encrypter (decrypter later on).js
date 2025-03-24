let bin = "111 010 101 110 111 010 010 110 111 100 101 110 111 100 011 110 111 001 100 001 111 001 100 110 111 100 101 110 111 010 100 001 111 010 011 110 111 100 101 001 111 101 010 001 111 101 001 001 111 010 100 001"
bin = bin.split(" ")
let rep = bin.length
let tap = ""
while (rep > 0){
    switch (bin[rep-1]){
        case "001":
            tap = tap+"1"
            break;
        case "010":
            tap = tap+"2"
            break;
        case "011":
            tap = tap+"3"
            break;
        case "100":
            tap = tap+"4"
            break;
        case "101":
            tap = tap+"5"
            break;
        case "110":
            tap = tap+"0"
            break;
        case "111":
            tap = tap+"-"
            break;
    }
    rep--
}
tap = tap.split("-")
rep = tap.length
let numb = ""
while (rep > 0){
    switch (tap[rep-1]){
        case "111":
            numb = numb+"A"
            break;
        case "011":
            numb = numb+"a"
            break;
        case "121":
            numb = numb+"B"
            break;
        case "021":
            numb = numb+"b"
            break;
        case "131":
            numb = numb+"C"
            break;
        case "031":
            numb = numb+"c"
            break;
        case "141":
            numb = numb+"D"
            break;
        case "041":
            numb = numb+"d"
            break;
        case "151":
            numb = numb+"E"
            break;
        case "051":
            numb = numb+"e"
            break;
        case "112":
            numb = numb+"F"
            break;
        case "012":
            numb = numb+"f"
            break;
        case "122":
            numb = numb+"G"
            break;
        case "022":
            numb = numb+"g"
            break;
        case "132":
            numb = numb+"H"
            break;
        case "032":
            numb = numb+"h"
            break;
        case "142":
            numb = numb+"I"
            break;
        case "042":
            numb = numb+"i"
            break;
        case "152":
            numb = numb+"J"
            break;
        case "052":
            numb = numb+"j"
            break;
        case "131":
            numb = numb+"K"
            break;
        case "031":
            numb = numb+"k"
            break;
        case "113":
            numb = numb+"L"
            break;
        case "013":
            numb = numb+"l"
            break;
        case "123":
            numb = numb+"M"
            break;
        case "023":
            numb = numb+"m"
            break;
        case "133":
            numb = numb+"N"
            break;
        case "033":
            numb = numb+"n"
            break;
        case "143":
            numb = numb+"O"
            break;
        case "043":
            numb = numb+"o"
            break;
        case "153":
            numb = numb+"P"
            break;
        case "053":
            numb = numb+"p"
            break;
        case "114":
            numb = numb+"Q"
            break;
        case "014":
            numb = numb+"q"
            break;
        case "124":
            numb = numb+"R"
            break;
        case "024":
            numb = numb+"r"
            break;
        case "134":
            numb = numb+"S"
            break;
        case "034":
            numb = numb+"s"
            break;
        case "144":
            numb = numb+"T"
            break;
        case "044":
            numb = numb+"t"
            break;
        case "154":
            numb = numb+"U"
            break;
        case "054":
            numb = numb+"u"
            break;
        case "115":
            numb = numb+"V"
            break;
        case "015":
            numb = numb+"v"
            break;
        case "125":
            numb = numb+"W"
            break;
        case "025":
            numb = numb+"w"
            break;
        case "135":
            numb = numb+"X"
            break;
        case "035":
            numb = numb+"x"
            break;
        case "145":
            numb = numb+"Y"
            break;
        case "045":
            numb = numb+"y"
            break;
        case "155":
            numb = numb+"Z"
            break;
        case "055":
            numb = numb+"z"
            break;
    }
    rep--
}
numb = numb.split("")
rep = numb.length
let pass = ""
while (rep > 0){
    switch (numb[rep-1]){
        case "D":
            pass = pass+"A"
            break;
        case "d":
            pass = pass+"a"
            break;
        case "E":
            pass = pass+"B"
            break;
        case "e":
            pass = pass+"b"
            break;
        case "F":
            pass = pass+"C"
            break;
        case "f":
            pass = pass+"c"
            break;
        case "G":
            pass = pass+"D"
            break;
        case "g":
            pass = pass+"d"
            break;
        case "H":
            pass = pass+"E"
            break;
        case "h":
            pass = pass+"e"
            break;
        case "I":
            pass = pass+"F"
            break;
        case "i":
            pass = pass+"f"
            break;
        case "J":
            pass = pass+"G"
            break;
        case "j":
            pass = pass+"g"
            break;
        case "K":
            pass = pass+"H"
            break;
        case "k":
            pass = pass+"h"
            break;
        case "L":
            pass = pass+"I"
            break;
        case "l":
            pass = pass+"i"
            break;
        case "M":
            pass = pass+"J"
            break;
        case "m":
            pass = pass+"j"
            break;
        case "N":
            pass = pass+"K"
            break;
        case "n":
            pass = pass+"k"
            break;
        case "O":
            pass = pass+"L"
            break;
        case "o":
            pass = pass+"l"
            break;
        case "P":
            pass = pass+"M"
            break;
        case "p":
            pass = pass+"m"
            break;
        case "Q":
            pass = pass+"N"
            break;
        case "q":
            pass = pass+"n"
            break;
        case "R":
            pass = pass+"O"
            break;
        case "r":
            pass = pass+"o"
            break;
        case "S":
            pass = pass+"P"
            break;
        case "s":
            pass = pass+"p"
            break;
        case "T":
            pass = pass+"Q"
            break;
        case "t":
            pass = pass+"q"
            break;
        case "U":
            pass = pass+"R"
            break;
        case "u":
            pass = pass+"r"
            break;
        case "V":
            pass = pass+"S"
            break;
        case "v":
            pass = pass+"s"
            break;
        case "W":
            pass = pass+"T"
            break;
        case "w":
            pass = pass+"t"
            break;
        case "X":
            pass = pass+"U"
            break;
        case "x":
            pass = pass+"u"
            break;
        case "Y":
            pass = pass+"V"
            break;
        case "y":
            pass = pass+"v"
            break;
        case "Z":
            pass = pass+"W"
            break;
        case "z":
            pass = pass+"w"
            break;
        case "A":
            pass = pass+"X"
            break;
        case "a":
            pass = pass+"x"
            break;
        case "B":
            pass = pass+"Y"
            break;
        case "b":
            pass = pass+"y"
            break;
        case "C":
            pass = pass+"Z"
            break;
        case "c":
            pass = pass+"z"
            break;
    }
    rep--
}
let imp = prompt("Enter password:\n")
if (imp == pass){
    console.log("correct")
    let correctpass = true
} else{
    console.log("incorrect")
    let correctpass = false
}
