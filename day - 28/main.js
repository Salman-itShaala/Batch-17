function deletePara() {
    const paraEl = document.getElementById("para");

    // paraEl it is not child of document --> body
    const body = document.body;

    body.removeChild(paraEl);
}


// select the parent
// select the child

// parent.removerChild(child)