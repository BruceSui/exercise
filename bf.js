function bf(A, B) {
    for (let i=0,j=0; i<A.length; i++,j++) {
        if (A[i] == B[j]) {
            if (j == B.length-1) {
                return i - B.length + 1;
            }
        } else if (A[i] == B[0]) {
            j = 0;
        } else {
            j = -1;
        }
    }
    return -1;
}
// console.log(bf('asdfghj', 'fgh'))\