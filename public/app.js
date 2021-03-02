var list = document.getElementById("list");

function addData()
{
    var inp = document.getElementById("inp");
     var li = document.createElement("li");
     var text = document.createTextNode(inp.value);
     li.appendChild(text);
    // console.log(li);
     inp.value = "";
     list.appendChild(li);

     var del = document.createElement("button")
     var delText = document.createTextNode("Delete");
     del.appendChild(delText);
     li.appendChild(del);
     del.setAttribute("onclick","delfunc(this)");

     var edit = document.createElement("button")
     var editText = document.createTextNode("Edit");
     edit.appendChild(editText);
     li.appendChild(edit);
     edit.setAttribute("onclick","editfunc(this)");

    // var finalInp = inp.value;
    // document.createElement("li");
    
    // console.log()
}

function editfunc(e)
{
    var edit = prompt("Enter Text",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = edit;
}

function delfunc(e)
{
    e.parentNode.remove();
}

function DelAll()
{
    list.remove();
}