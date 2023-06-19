
function addPoints()
{
    var value = parseInt(document.getElementById('currentPoints').value, 10);
    value = isNaN(value) ? 0 : value;
    value = value + parseInt(document.getElementById('currentPpc').value, 10);
    document.getElementById('currentPoints').value = value;
}

function buyItem()
{
    if(parseInt(document.getElementById("currentPoints").value, 10) >= parseInt(document.getElementById("itemPrice").value, 10))
    {
        var newPointValue = parseInt(document.getElementById("currentPoints").value, 10) - parseInt(document.getElementById("itemPrice").value, 10);
        document.getElementById("currentPoints").value = newPointValue;

        var newItemCount = parseInt(document.getElementById("itemCount").value, 10) + 1;
        document.getElementById("itemCount").value = newItemCount;

        var newPrice = parseInt(document.getElementById("itemPrice").value, 10) * 1.25;
        document.getElementById("itemPrice").value = newPrice;

        var newPpc = parseInt(document.getElementById("currentPpc").value, 10) + parseInt(document.getElementById("itemPpc").value, 10);
        document.getElementById("currentPpc").value = newPpc;

    }
}

function switchMenue()
{
    document.getElementById('shop_menue_upgrades');
    document.getElementById('shop_menue_worker');

    if (document.getElementById('shop_menue_upgrades').style.display != 'flex') {
        document.getElementById('shop_menue_upgrades').style.display= 'flex';
        document.getElementById('shop_menue_worker').style.display= 'hidden';
    } else {
        document.getElementById('shop_menue_upgrades').style.display= 'hidden';
        document.getElementById('shop_menue_worker').style.display= 'flex';
    }
}