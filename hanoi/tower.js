//function to solve hanoi tower and the sequence of moves
const getHanoiSolutions = (nDiscs) => {
    const solutions = []

    //recurssion function to move the tower of the discs from origin to destiny usng aux as an auxiliary peg
    const hanoi = (n, origin , destiny ,aux) => {
        if (n==1){
            //base case: if there's only one disc , move it directly to destiny
            solutions.push({disc:n, origin , destiny})
            return;
        }

        // move n-1 from origin to aux, using destiny as an auxilery peg
        hanoi(n-1,origin,aux,destiny)

        //move the nth disc from origin to destiny
        solutions.push({disc:n,origin,destiny})

        // move n-1 from aux to destiny, using origin as an auxilery peg
        hanoi(n-1,aux,destiny,origin)
    }

    //start the recursive process with the initial call to the hanoi fuction
    hanoi(nDiscs,0,1,2)
    return solutions;
}

export{
    getHanoiSolutions
}