function sortAsc(id ,col) {
    let table, rows, i, switching, shouldSwitch, switchcount;
    table = document.getElementById(id);
    rows = table.rows;
    switching = true;
    switchcount = 0;

    while(switching) {
        switching = false;
        for(i=1; i < (rows.length-1); i++) {
            shouldSwitch = false;
            let x = rows[i].getElementsByTagName("TD")[col].innerHTML.toLowerCase();
            let y = rows[i+1].getElementsByTagName("TD")[col].innerHTML.toLowerCase();
            if(x > y) {
                shouldSwitch = true;
                break
            }
        }
        if(shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
            switchcount++;
            switching = true;
        }
        else if(!shouldSwitch) {
            console.log(switchcount);
        }
    }
}

function sortDec(id ,col) {
    let table, rows, i, switching, shouldSwitch, switchcount;
    table = document.getElementById(id);
    rows = table.rows;
    switching = true;
    switchcount = 0;

    while(switching) {
        switching = false;
        for(i=1; i < (rows.length-1); i++) {
            shouldSwitch = false;
            let x = rows[i].getElementsByTagName("TD")[col].innerHTML.toLowerCase();
            let y = rows[i+1].getElementsByTagName("TD")[col].innerHTML.toLowerCase();
            if(x < y) {
                shouldSwitch = true;
                break
            }
        }
        if(shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
            switchcount++;
            switching = true;
        }
        else if(!shouldSwitch) {
            console.log(switchcount);
        }
    }
}